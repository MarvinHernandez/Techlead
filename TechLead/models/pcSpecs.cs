using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TechLead.models
{
    public class pcSpecs
    {
        # nullable enable
        [BsonElement("Cpu")]
        [BsonRepresentation(BsonType.String)]
        public string? Cpu { get; set; }

        [BsonElement("Gpu")]
        [BsonRepresentation(BsonType.String)]
        public string? Gpu { get; set; }

        [BsonElement("MotherBoard")]
        [BsonRepresentation(BsonType.String)]
        public string? MoatherBoared { get; set; }


        [BsonElement("Ram")]
        [BsonRepresentation(BsonType.String)]
        public string? Ram { get; set; }

        [BsonElement("Storage")]
        [BsonRepresentation(BsonType.String)]
        public string? Storage { get; set; }

        [BsonElement("StorageUnit")]
        [BsonRepresentation(BsonType.String)]
        public string? StorageUnit { get; set; }

        [BsonElement("Case")]
        [BsonRepresentation(BsonType.String)]
        public string? Case { get; set; }

        [BsonElement("PowerSupplyUnit")]
        [BsonRepresentation(BsonType.String)]
        public string? PowerSupplyUnit { get; set; }

        [BsonElement("Cooling")]
        [BsonRepresentation(BsonType.String)]
        public string? Cooling { get; set; }

        [BsonElement("Monitor")]
        [BsonRepresentation(BsonType.String)]
        public string? Monitor { get; set; }

        [BsonElement("pump")]
        [BsonRepresentation(BsonType.String)]
        public string? pump { get; set; }

        [BsonElement("Tubes")]
        [BsonRepresentation(BsonType.String)]
        public string? Tubes { get; set; }

        [BsonElement("CoolingLiquid")]
        [BsonRepresentation(BsonType.String)]
        public string? CoolingLiquid { get; set; }

        [BsonElement("Cables")]
        [BsonRepresentation(BsonType.String)]
        public string? Cables { get; set; }
    }
}
