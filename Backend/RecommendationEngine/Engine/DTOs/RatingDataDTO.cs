using System;
using Microsoft.ML.Data;

namespace Recommender
{
    public class RatingDataDTO
    {
        [LoadColumn(0)]
        public float userId;
        [LoadColumn(1)]
        public float itemId;
        [LoadColumn(2)]
        public float Label;
    }
}
