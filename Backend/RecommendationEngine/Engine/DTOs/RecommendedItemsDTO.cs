using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Engine.DTOs
{
    public class RecommendedItemsDTO
    {
        public int ItemID { get; set; }
        public string ItemName { get; set; }
        public int ItemPrice { get; set; } //should be of type Decimal in actual case
        public string ItemCategory { get; set; }
    }
}
 