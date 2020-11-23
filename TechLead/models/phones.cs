using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TechLead.models
{
    public class phones
    {
#nullable enable
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("Company")]
        [BsonRepresentation(BsonType.String)]
        public string? Company { get; set; }

        [BsonElement("Name")]
        [BsonRepresentation(BsonType.String)]
        public string? Name { get; set; }

        [BsonElement("Type")]
        [BsonRepresentation(BsonType.String)]
        public string? Type { get; set; }

        [BsonElement("positve")]
        public List<string> positve { get; set; }

        [BsonElement("Price")]
        [BsonRepresentation(BsonType.String)]
        public string? Price { get; set; }


        [BsonElement("Mainusage")]
        [BsonRepresentation(BsonType.String)]
        public string? MainUsage { get; set; }

        [BsonElement("Cpu")]
        [BsonRepresentation(BsonType.String)]
        public string? Cpu { get; set; }


        [BsonElement("Ram")]
        [BsonRepresentation(BsonType.String)]
        public string? Ram { get; set; }

        [BsonElement("ScreenSize")]
        [BsonRepresentation(BsonType.String)]
        public string? ScreenSize { get; set; }

        [BsonElement("5GSupport")]
        [BsonRepresentation(BsonType.String)]
        public string? FiveGSupport { get; set; }

    }
}
