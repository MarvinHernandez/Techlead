using TechLead.models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;
using System;

namespace TechLead.services
{
    public class ProductFeedbackService
    {
        private readonly IMongoCollection<ProductFeedback> _productFeedback;

        public ProductFeedbackService(ITechLeadDatabaseSettings settings)
        {
            try
            {
                var client = new MongoClient(settings.ConnectionString);
                var database = client.GetDatabase(settings.DatabaseName);

                _productFeedback = database.GetCollection<ProductFeedback>(settings.ProductFeedbackCollectionName);
            }
            catch (Exception ex)
            {
                System.Console.WriteLine(ex);

            }

        }

        public List<ProductFeedback> Get()
        {
            var productFeedback = _productFeedback.Find(productFeedback => true).ToList();
            int debug = 0;
            return productFeedback;
        }

        public ProductFeedback Get(string id) =>
            _productFeedback.Find<ProductFeedback>(productFeedback => productFeedback.Id == id).FirstOrDefault();

        public ProductFeedback GetByMemberId(string memberId)
        {
            var productFeedback = _productFeedback.Find<ProductFeedback>(productFeedback => productFeedback.memberId == memberId).FirstOrDefault();
            int debug = 0;
            return productFeedback;
        }


        public ProductFeedback Create(ProductFeedback productFeedback)
        {
            _productFeedback.InsertOne(productFeedback);
            return productFeedback;
        }

        public void Update(string id, ProductFeedback productFeedback) =>
            _productFeedback.ReplaceOne(productFeedback => productFeedback.Id == id, productFeedback);

        public void Remove(ProductFeedback productFeedback) =>
            _productFeedback.DeleteOne(productFeedback => productFeedback.Id == productFeedback.Id);

        public void Remove(string id) =>
            _productFeedback.DeleteOne(productFeedback => productFeedback.Id == id);
    }
}
