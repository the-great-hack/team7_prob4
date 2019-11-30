using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Engine.Models.Infrastructure
{
    public class NamedInfo : Identity
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}