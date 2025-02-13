using Microsoft.AspNetCore.Mvc;

namespace Showcase_Profielpagina.Controllers
{
    [Route("team")]
    public class TeamController : Controller
    {
        [Route("topteam")]
        [Route("")]
        public IActionResult Topteam()
        {
            
            return View();
        }
            
            
        
    }
}
