using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Engine.DTOs;
using Engine.Helpers;
using Engine.Interfaces;

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
    } 
}
 