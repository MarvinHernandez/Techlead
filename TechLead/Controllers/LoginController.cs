using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Cors;
using TechLead.models;
using TechLead.services;

namespace TechLead.Controllers
{
    [EnableCors("AnotherPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : Controller
    {
        private IConfiguration _config;
        private readonly LoginService _loginService;

        public LoginController(IConfiguration config, LoginService loginService)
        {
            _config = config;
            _loginService = loginService;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody] Member login)
        {
            IActionResult response = Unauthorized();

            var user = _loginService.AuthenticateUser(login);

            if (user != null)
            {
                var tokenString = _loginService.GenerateJSONWebToken(user, _config);
                response = Ok(new { token = tokenString, username = user.username, id = user.Id });
            }

            return response;
        }       
    }
}
