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
    public class PcController : ControllerBase
    {
        private readonly PcService _pcService;

        public PcController(PcService pcService)
        {
            _pcService = pcService;
        }
        [HttpGet]
        public ActionResult<List<pc>> Get() =>
            _pcService.Get();


        [HttpGet("{NickName}", Name = "GetNickName")]
        public ActionResult<pc> Get(string nickname)
        {
            var a_Pc = _pcService.Get(nickname);

            if (a_Pc == null)
            {
                return NotFound();
            }

            return a_Pc;
        }

    }
}
