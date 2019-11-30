using Engine.AddOns;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Engine.Models.Infrastructure
{
    [SeedableAttribute]
    public class Lookup : NamedAuditInfo
    {
        public virtual long LookupCategoryID { get; set; } 
        public virtual string Code { get; set; }
        public virtual int Value { get; set; }
        public virtual bool IsDeleted { get; set; }
        public virtual int SortOrder { get; set; }
        public virtual LookupCategory LookupCategory { get; set; }
        public virtual Lookup Parent { get; set; }
    }
}