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
    public class LaptopsController : ControllerBase
    {
        private readonly LaptopService _laptopService;

        public LaptopsController(LaptopService laptopService)
        {
            _laptopService = laptopService;
        }

        [HttpGet]
        public ActionResult<List<laptops>> Get() =>
            _laptopService.Get();

        [HttpGet("{Name}", Name = "GetLaptopName")]
        public ActionResult<laptops> Get(string nickname)
        {
            var lap = _laptopService.Get(nickname);

            if (lap == null)
            {
                return NotFound();
            }

            return lap;
        }
    }
}
