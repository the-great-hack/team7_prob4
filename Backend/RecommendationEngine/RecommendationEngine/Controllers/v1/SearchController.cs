using Microsoft.Web.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RecommendationEngine.Controllers.v1
{
    [ApiVersion("1")]
    [RoutePrefix("api/v{version:apiVersion}/Search")]
    public class SearchController : ApiController
    {
        #region Public Methods
        [Route("Recommended")]
        [HttpGet]
        public IEnumerable<object> GetRecommended()
        {
            return new List<object>
            {
                new
                {
                    title = "Main dishes",
                    data = new List<string>
                    {
                        "Pizza", "Burger", "Risotto"
                    }

                },
                new
                {
                    title = "Sides",
                    data = new List<string>
                    {
                        "French Fries", "Onion Rings", "Fried Shrimps"
                    }

                },
                new
                {
                    title = "Drinks",
                    data = new List<string>
                    {
                        "Water", "Coke", "Beer"
                    }

                }
            };
        }
        #endregion

        #region Private Methods 
        #endregion
    }
}
 