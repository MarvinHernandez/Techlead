using System;
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
    public class PhonesController : ControllerBase
    {
        private readonly PhoneService _phoneService;

        public PhonesController(PhoneService phoneService)
        {
            _phoneService = phoneService;
        }

        [HttpGet]
        public ActionResult<List<phones>> Get() =>
            _phoneService.Get();

        [HttpGet("{Name}", Name = "GetPhoneName")]
        public ActionResult<phones> Get(string name)
        {
            var pho = _phoneService.Get(name);

            if (pho == null)
            {
                return NotFound();
            }

            return pho;
        }
    }
}
