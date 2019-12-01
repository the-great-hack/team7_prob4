using Microsoft.Web.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Engine.DTOs;
using Engine.Helpers;
using Engine.Implementations;
using RecommendationEngine.Services.Interfaces.v1;

namespace RecommendationEngine.Controllers.v1
{
    [ApiVersion("1")]
    [RoutePrefix("api/v{version:apiVersion}/Search")]
    public class SearchController : ApiController, ISearchController
    {
        #region Public Methods
        [Route("Recommended")]
        [HttpGet]
        public IEnumerable<RecommendedItemsDTO> GetRecommendations()
        {
            return RecommendationProvider.Instance.GetRecommendations();
        }

        public IEnumerable<RecommendedItemsDTO> SimulateAgeFactor()
        {
            return RecommendationProvider.Instance.GetSimulatedData(Enums.SimulationEnum.AgeFactor);
        }

        public IEnumerable<RecommendedItemsDTO> SimulateCultralEvent()
        {
            return RecommendationProvider.Instance.GetSimulatedData(Enums.SimulationEnum.CulturalEvent);
        }

        public IEnumerable<RecommendedItemsDTO> SimulateDeals()
        {
            return RecommendationProvider.Instance.GetSimulatedData(Enums.SimulationEnum.Deals);
        }

        public IEnumerable<RecommendedItemsDTO> SimulateMoodChanges()
        {
            return RecommendationProvider.Instance.GetSimulatedData(Enums.SimulationEnum.Mood);
        }

        public IEnumerable<RecommendedItemsDTO> SimulateNewLocation()
        {
            return RecommendationProvider.Instance.GetSimulatedData(Enums.SimulationEnum.LocationChanged);
        }

        public IEnumerable<RecommendedItemsDTO> SimulatePreferences()
        {
            return RecommendationProvider.Instance.GetSimulatedData(Enums.SimulationEnum.Preferences);
        }

        public IEnumerable<RecommendedItemsDTO> SimulateWeather()
        {
            return RecommendationProvider.Instance.GetSimulatedData(Enums.SimulationEnum.Weather);
        }
        #endregion

        #region Private Methods 
        #endregion
    }
}
 