﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Engine.AddOns;
using Engine.Models.Infrastructure;

namespace Engine.Models.Application
{
    [Seedable]
    public class OrderItem : NamedInfo
    {
        public int OrderID { get; set; }
        public int ItemID { get; set; }
        public int OrderItemLookupID { get; set; }
    }
}