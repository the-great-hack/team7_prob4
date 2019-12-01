using Engine.Models.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RecommendationEngine.Services.Interfaces.v1
{
    public interface ILookupsController
    {
        IEnumerable<Lookup> GetLookupByCategory(int id);
    }
}
