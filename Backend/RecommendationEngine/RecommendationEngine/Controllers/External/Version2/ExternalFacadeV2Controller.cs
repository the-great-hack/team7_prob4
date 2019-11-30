using Microsoft.Web.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace RecommendationEngine.Controllers.External.Version2
{
    [ApiVersion("2")] 
    public class ExternalFacadeV2Controller : ExternalFacadeController
    {
        public ExternalFacadeV2Controller() : base(2)
        { 
        }
        public override IHttpActionResult GetHospitals()
        {
            return Ok($"Overridden Method: This is api version {base.GetApiVersion()}, method name is {System.Reflection.MethodBase.GetCurrentMethod().Name} " +
                      $"& class is {this.GetType().Name}");
        }
         
        [HttpGet]
        public IHttpActionResult GetExclusiveResults()
        {
            return Ok($"Exclusive Method: This is api version {base.GetApiVersion()}, method name is {System.Reflection.MethodBase.GetCurrentMethod().Name} & class is {this.GetType().Name}");
        }

        private (int, string) Foo(int param, string param2)
        {
            return (1,"");
        }

    }
}