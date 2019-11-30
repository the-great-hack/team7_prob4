using Microsoft.Web.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace RecommendationEngine.Controllers.External
{ 
    [ApiVersion("1")] 
    public class ExternalFacadeController : ApiController
    {
        private readonly int ApiVersion = 1;
        public ExternalFacadeController()
        {
                
        }
        public ExternalFacadeController(int apiVersion)
        {
            ApiVersion = apiVersion;
        }

        public int GetApiVersion()
        {
            return ApiVersion;
        }
         
        [HttpGet]
        public IHttpActionResult GetProfiles()
        {
            return Ok($"This is api version {ApiVersion}, method name is {System.Reflection.MethodBase.GetCurrentMethod().Name} & class is {this.GetType().Name}");
        }
         
        [HttpGet]
        public virtual IHttpActionResult GetHospitals()
        {
            return Ok($"This is api version {ApiVersion}, method name is {System.Reflection.MethodBase.GetCurrentMethod().Name} & class is {this.GetType().Name}");
        }



    }

}