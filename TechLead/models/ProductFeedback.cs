using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace TechLead.models
{
    public class ProductFeedback
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("memberId")]
        [BsonRepresentation(BsonType.ObjectId)]
        public string memberId { get; set; }

        [BsonElement("productId")]
        [BsonRepresentation(BsonType.ObjectId)]
        public string productId { get; set; }

        [BsonElement("rating")]
        [BsonRepresentation(BsonType.Int64)]
        public int rating { get; set; }

        [BsonElement("text")]
        [BsonRepresentation(BsonType.String)]
        public string text { get; set; }
    }
}
