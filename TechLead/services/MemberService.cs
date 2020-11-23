using TechLead.models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;
using System;

namespace TechLead.services
{
    public class MemberService
    {
        private readonly IMongoCollection<Member> _members;

        public MemberService(ITechLeadDatabaseSettings settings)
        {
            try {
                var client = new MongoClient(settings.ConnectionString);
                var database = client.GetDatabase(settings.DatabaseName);

                _members = database.GetCollection<Member>(settings.MembersCollectionName);
            }
            catch (Exception ex) {
                System.Console.WriteLine(ex);
            
            }

        }

        public List<Member> Get() =>
            _members.Find(member => true).ToList();

        public Member Get(string id) =>
            _members.Find<Member>(member => member.Id == id).FirstOrDefault();
        
        public Member GetByUsername(string username) =>
            _members.Find<Member>(member => member.username == username).FirstOrDefault();

        public Member Create(Member member)
        {
            _members.InsertOne(member);
            return member;
        }

        public void Update(string id, Member member) =>
            _members.ReplaceOne(member => member.Id == id, member);

        public void Remove(Member member) =>
            _members.DeleteOne(member => member.Id == member.Id);

        public void Remove(string id) =>
            _members.DeleteOne(member => member.Id == id);
    }
}
