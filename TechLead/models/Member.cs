using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TechLead.models
{
    [BsonIgnoreExtraElements]
    public class Member
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("username")]
        [BsonRepresentation(BsonType.String)]
        public string username { get; set; }

        [BsonElement("password")]
        [BsonRepresentation(BsonType.String)]
        public string password { get; set; }

    }
}
