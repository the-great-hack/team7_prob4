using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using Engine.DataFactory;
using Engine.DTOs;
using Engine.Helpers;
using Engine.Interfaces;
using Microsoft.ML;
using Microsoft.ML.Trainers;
using Recommender;

namespace Engine.Implementations
{

    public class RecommendationProvider : IRecommendationProvider
    {
        private static readonly object threadLock = new object();
        private RecommendationProvider()
        {
        }
        private static RecommendationProvider instance = null;
        public static RecommendationProvider Instance
        {
            get
            {
                lock (threadLock)
                {
                    if (instance == null)
                    {
                        instance = new RecommendationProvider();
                    }
                    return instance;
                }
            }
        }
        public IEnumerable<RecommendedItemsDTO> GetRecommendations()
        {
            return new List<RecommendedItemsDTO>
            {
                new RecommendedItemsDTO
                {
                    ItemID = 1,
                    ItemName = "Pizza",
                    ItemPrice = 250,
                    ItemCategory = "Italian"
                }
            };
        }

        public IEnumerable<RecommendedItemsDTO> GetSimulatedData(Enums.SimulationEnum simulationType)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<RecommendedItemsDTO> GetMLRecommendations(long userID)
        {
            try
            {
                MLContext mlContext = new MLContext();
                (IDataView trainingDataView, IDataView testDataView) = LoadSeededData(mlContext);
                ITransformer model = BuildAndTrainModel(mlContext, trainingDataView);
                EvaluateModel(mlContext, testDataView, model);
                return UseModelForSinglePrediction(mlContext, model, userID);

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
            
        }

        public static (IDataView training, IDataView test) LoadSeededData(MLContext mlContext)
        {
            //using hard coded paths for now to access file, logic can be implemented for dynamic paths, if this is hosted as a service, console application on in debug env.
            var trainingDataPath = "G:\\Development\\Careem\\SampleData\\recommendation-ratings-train.csv";
            var testDataPath = "G:\\Development\\Careem\\SampleData\\recommendation-ratings-test.csv";
          
            IDataView trainingDataView = mlContext.Data.LoadFromTextFile<RatingDataDTO>(trainingDataPath, hasHeader: true, separatorChar: ',');
            IDataView testDataView = mlContext.Data.LoadFromTextFile<RatingDataDTO>(testDataPath, hasHeader: true, separatorChar: ',');

            return (trainingDataView, testDataView);

        }
        public static ITransformer BuildAndTrainModel(MLContext mlContext, IDataView trainingDataView)
        { 
                IEstimator<ITransformer> estimator = mlContext.Transforms.Conversion.MapValueToKey(outputColumnName: "userIdEncoded", inputColumnName: "userId")
                    .Append(mlContext.Transforms.Conversion.MapValueToKey(outputColumnName: "itemIdEncoded", inputColumnName: "itemId"));
                var options = new MatrixFactorizationTrainer.Options
                {
                    MatrixColumnIndexColumnName = "userIdEncoded",
                    MatrixRowIndexColumnName = "itemIdEncoded",
                    LabelColumnName = "Label",
                    NumberOfIterations = 20,
                    ApproximationRank = 100
                };

                var trainerEstimator = estimator.Append(mlContext.Recommendation().Trainers.MatrixFactorization(options));
                ITransformer model = trainerEstimator.Fit(trainingDataView);

                return model; 
        }
        public static void EvaluateModel(MLContext mlContext, IDataView testDataView, ITransformer model)
        { 
            var prediction = model.Transform(testDataView);
            var metrics = mlContext.Regression.Evaluate(prediction, labelColumnName: "Label", scoreColumnName: "Score"); 

        }
        public static IEnumerable<RecommendedItemsDTO> UseModelForSinglePrediction(MLContext mlContext, ITransformer model, long userID)
        {
            var response = new List<RecommendedItemsDTO>();
            var predictionEngine = mlContext.Model.CreatePredictionEngine<RatingDataDTO, RatingPredictionDTO>(model);
            var itemsList = DataStore.Instance.Items.Select(o => o.ID);
            foreach (var item in itemsList)
            {
                var testInput = new RatingDataDTO { userId = userID, itemId = item };
                var movieRatingPrediction = predictionEngine.Predict(testInput);
                if (Math.Round(movieRatingPrediction.Score, 1) > 3.5)
                {
                    var itemDetails = DataStore.Instance.Items.FirstOrDefault(o => o.ID == item);
                    
                    if (null != itemDetails)
                    {
                        var itemCategory = DataStore.Instance.LookupCategories.FirstOrDefault(o => o.ID == itemDetails.LookupCategoryID);
                        response.Add(new RecommendedItemsDTO
                        {
                            ItemName = itemDetails.Name,
                            ItemCategory = itemCategory.Name,
                            ItemPrice = itemDetails.Price,
                            ItemID = itemDetails.ID
                        });
                    }
                };
            }
            
            return response;
        }
    } 
}
 