using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Engine.DTOs;
using static Engine.Helpers.Enums;

namespace Engine.Interfaces
{
    public interface IRecommendationProvider
    {
        IEnumerable<RecommendedItemsDTO> GetRecommendations();
        IEnumerable<RecommendedItemsDTO> GetSimulatedData(SimulationEnum simulationType);
    }
}
