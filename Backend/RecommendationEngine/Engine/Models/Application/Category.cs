using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Engine.AddOns;
using Engine.Models.Infrastructure;

namespace Engine.Models.Application
{
    [Seedable]
    public class Category : Identity
    {
        public string Name { get; set; }
        public int RestaurantID { get; set; }

    }
}