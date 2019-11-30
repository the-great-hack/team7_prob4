using Engine.AddOns;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Engine.Models.Infrastructure
{
    [Seedable]
    public class LookupCategory : NamedAuditInfo
    {
        public virtual string Code { get; set; } 
        public virtual bool IsDeleted { get; set; }
    }
}