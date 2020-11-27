using TechLead.models;
using TechLead.services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.AspNetCore.Cors;


namespace TechLead.Controllers
{
    [EnableCors("AnotherPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductFeedbackController : Controller
    {
        private readonly ProductFeedbackService _productFeedbackService;

        public ProductFeedbackController(ProductFeedbackService productFeedbackService)
        {
            _productFeedbackService = productFeedbackService;
        }

        [HttpGet]
        public ActionResult<List<ProductFeedback>> Get()
        {
            var productFeedbacks = _productFeedbackService.Get();
            int degug = 0;
            return productFeedbacks;
        }
        //_productFeedbackService.Get();

        [HttpGet("{id}")]
        public ActionResult<List<ProductFeedback>> Get(string id)
        {
            var productFeedback = _productFeedbackService.GetByProductId(id);

            if (productFeedback == null)
            {
                return NotFound();
            }

            return productFeedback;
        }

        [HttpPost]
        public ActionResult<ProductFeedback> Create(ProductFeedback productFeedback)
        {
            _productFeedbackService.Create(productFeedback);

            return CreatedAtRoute("GetProductFeedback", new { id = productFeedback.Id.ToString() }, productFeedback);
        }

        [HttpPut("{id}")]
        public IActionResult Update(string id, ProductFeedback memberIn)
        {
            var productFeedback = _productFeedbackService.Get(id);

            if (productFeedback == null)
            {
                return NotFound();
            }

            _productFeedbackService.Update(id, memberIn);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var productFeedback = _productFeedbackService.Get(id);

            if (productFeedback == null)
            {
                return NotFound();
            }

            _productFeedbackService.Remove(productFeedback.Id);

            return NoContent();
        }
    }
}