using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Engine.AddOns;
using Engine.Models.Infrastructure;

namespace Engine.Models.Application
{
    [Seedable]
    public class Order : NamedInfo
    {
        public virtual int TotalPrice { get; set; }
        public virtual int Rating { get; set; }
        public virtual DateTime PlacedAt { get; set; }
        public virtual int DeliveryTime { get; set; }
    }
}