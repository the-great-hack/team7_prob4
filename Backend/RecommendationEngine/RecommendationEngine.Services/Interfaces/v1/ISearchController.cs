using Engine.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RecommendationEngine.Services.Interfaces.v1
{
    public interface ISearchController
    {
        IEnumerable<RecommendedItemsDTO> GetRecommendations();
        IEnumerable<RecommendedItemsDTO> GetTrainedRecommendations(long userID);
        IEnumerable<RecommendedItemsDTO> SimulateWeather();
        IEnumerable<RecommendedItemsDTO> SimulateMoodChanges();
        IEnumerable<RecommendedItemsDTO> SimulateNewLocation();
        IEnumerable<RecommendedItemsDTO> SimulateAgeFactor();
        IEnumerable<RecommendedItemsDTO> SimulateCultralEvent();
        IEnumerable<RecommendedItemsDTO> SimulatePreferences();
        IEnumerable<RecommendedItemsDTO> SimulateDeals();
    }
}
