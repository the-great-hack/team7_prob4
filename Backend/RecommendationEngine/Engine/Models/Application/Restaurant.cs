using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Engine.AddOns;
using Engine.Models.Infrastructure;

namespace Engine.Models.Application
{
    [Seedable]
    public class Restaurant : Identity
    {
        public virtual string Name { get; set; }
        public virtual string Location { get; set; }
        public virtual string Searches { get; set; }
    }
}