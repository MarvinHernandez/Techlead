using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TechLead.models
{
    public class laptops
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

        [BsonElement("OS")]
        [BsonRepresentation(BsonType.String)]
        public string? OS { get; set; }

        [BsonElement("Usage")]
        public List<string> Usage { get ; set; }

        [BsonElement("ScreenSize")]
        [BsonRepresentation(BsonType.String)]
        public string? ScreenSize { get; set; }


        [BsonElement("Gpu")]
        [BsonRepresentation(BsonType.String)]
        public string? Gpu { get; set; }

        [BsonElement("Cpu")]
        [BsonRepresentation(BsonType.String)]
        public string? Cpu { get; set; }


        [BsonElement("CpuProvider")]
        [BsonRepresentation(BsonType.String)]
        public string? CpuProvider { get; set; }

        [BsonElement("ScreenResolution")]
        [BsonRepresentation(BsonType.String)]
        public string? ScreenResolution { get; set; }

        [BsonElement("touch")]
        [BsonRepresentation(BsonType.String)]
        public string? touch { get; set; }

        // check
        [BsonElement("2in1")]
        [BsonRepresentation(BsonType.String)]
        public string? TwoInOne { get; set; }

        [BsonElement("BuildQuality")]
        [BsonRepresentation(BsonType.String)]
        public string? BuildQuality { get; set; }

        [BsonElement("price")]
        [BsonRepresentation(BsonType.String)]
        public string? price { get; set; }

        [BsonElement("Ram")]
        [BsonRepresentation(BsonType.String)]
        public string? Ram { get; set; }


        [BsonElement("Storage")]
        [BsonRepresentation(BsonType.String)]
        public string? Storage { get; set; }

        [BsonElement("ProductType")]
        [BsonRepresentation(BsonType.String)]
        public string? ProductType { get; set; }
    }
}
