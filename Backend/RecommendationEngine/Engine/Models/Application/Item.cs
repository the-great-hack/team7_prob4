using Engine.AddOns;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Engine.Models.Application
{
    [Seedable]
    public class Item
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int LookupCategoryID { get; set; }
    }
} 