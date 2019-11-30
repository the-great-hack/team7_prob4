using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Routing;
using Microsoft.Owin;
using Microsoft.Web.Http;
using Microsoft.Web.Http.Routing;
using Newtonsoft.Json;
using Owin; 

[assembly: OwinStartup(typeof(RecommendationEngine.Startup))]

namespace RecommendationEngine
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            HttpConfiguration httpConfiguration = new HttpConfiguration();

            var constraintResolver = new DefaultInlineConstraintResolver()
            {
                ConstraintMap =
                {
                    ["apiVersion"] = typeof( ApiVersionRouteConstraint )
                }
            }; 
            httpConfiguration.MapHttpAttributeRoutes(constraintResolver,new CustomDirectRouteProvider());

            httpConfiguration.AddApiVersioning(action =>
            {
                action.AssumeDefaultVersionWhenUnspecified = true;
                action.DefaultApiVersion = new ApiVersion(1, 1);
            }); 


            httpConfiguration.Routes.MapHttpRoute(
                "ApiVersioningControllerRoutes",
                "api/v{apiVersion}/{controller}",
                defaults: null,
                constraints: new { apiVersion = new ApiVersionRouteConstraint() });

            httpConfiguration.Routes.MapHttpRoute(
                "ApiVersioningActionRoutes",
                "api/v{apiVersion}/{controller}/{action}",
                defaults: null,
                constraints: new { apiVersion = new ApiVersionRouteConstraint() });

            httpConfiguration.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));
            InitConfigs(httpConfiguration); 
            app.UseWebApi(httpConfiguration);

            // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=316888
        }
        private void InitConfigs(HttpConfiguration config)
        {
            var jsonFormatter = config.Formatters.OfType<JsonMediaTypeFormatter>().First();
            jsonFormatter.SerializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Local;
        }
    }
    public class CustomDirectRouteProvider : DefaultDirectRouteProvider
    {
        protected override IReadOnlyList<IDirectRouteFactory>
            GetActionRouteFactories(HttpActionDescriptor actionDescriptor)
        {
            // inherit route attributes decorated on base class controller's actions
            return actionDescriptor.GetCustomAttributes<IDirectRouteFactory>
                (inherit: true);
        }
    }

}
