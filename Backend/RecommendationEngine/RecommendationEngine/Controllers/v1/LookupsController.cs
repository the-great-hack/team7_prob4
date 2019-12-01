using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Engine.DataFactory;
using Engine.Models.Infrastructure;
using Microsoft.Web.Http;
using RecommendationEngine.Services.Interfaces.v1;

namespace RecommendationEngine.Controllers.v1
{
    [ApiVersion("1")]
    [RoutePrefix("api/v{version:apiVersion}/Lookups")]
    public class LookupsController : ApiController, ILookupsController
    { 
        [HttpGet, Route("{id}"), Route("Get")]
        public IEnumerable<Lookup> GetLookupByCategory(int id)
        {
            try
            {

                return DataStore.Instance.Lookups.Where(o => o.LookupCategoryID == id);
            }
            catch (Exception e)
            { 
                throw e;
            }
        }
    }
}
