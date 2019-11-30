using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Engine.DataFactory;

namespace Engine.Bootstrapping
{
    public class EngineBootStrapper
    {
        private static readonly object threadLock = new object();
        private EngineBootStrapper()
        {
        }
        private static EngineBootStrapper instance = null;
        public static EngineBootStrapper Instance
        {
            get
            {
                lock (threadLock)
                {
                    if (instance == null)
                    {
                        instance = new EngineBootStrapper(); 
                    }
                    return instance;
                }
            }
        }

        public void boot()
        {
            var seeder = new Seeder();
            seeder.StartSeeding();
        }
    }
}