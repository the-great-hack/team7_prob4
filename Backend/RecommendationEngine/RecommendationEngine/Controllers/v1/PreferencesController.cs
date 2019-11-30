using Microsoft.Web.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RecommendationEngine.Controllers
{
    [ApiVersion("1")]
    [RoutePrefix("api/v{version:apiVersion}/Preferences")]
    public class PreferencesController : ApiController
    { 
        [Route("Lookups")]
        [HttpGet]
        public IHttpActionResult GetLookups()
        { 
            return Ok($"This api returns Lookups");
        }
    }
}
