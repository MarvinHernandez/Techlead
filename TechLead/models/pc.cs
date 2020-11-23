using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TechLead.models
{
    [BsonIgnoreExtraElements]
    public class pc
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("price")]
        [BsonRepresentation(BsonType.String)]
        public string price { get; set; }

        [BsonElement("NickName")]
        [BsonRepresentation(BsonType.String)]
        public string NickName { get; set; }

        [BsonElement("Usage")]
        [BsonRepresentation(BsonType.String)]
        public string Usage { get; set; }

        [BsonElement("Specs")]
        public pcSpecs Specs { get; set; }

    }
}
