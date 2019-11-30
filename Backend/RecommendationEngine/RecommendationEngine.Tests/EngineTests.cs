using System;
using Engine.DataFactory;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace RecommendationEngine.Tests
{
    [TestClass]
    public class EngineTests
    {
        [TestMethod]
        public void Can_Get_Seedable_Models()
        {
            var seeder = new Seeder();
        }

        [TestMethod]
        public void Can_Seed_Data()
        {
            var seeder = new Seeder();
            var isSeeded = seeder.StartSeeding();

            Assert.IsTrue(isSeeded);
        }
    }
}
