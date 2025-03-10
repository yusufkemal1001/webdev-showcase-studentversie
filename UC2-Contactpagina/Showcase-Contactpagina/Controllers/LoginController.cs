using Microsoft.AspNetCore.Mvc;

namespace Showcase_Contactpagina.Controllers;

public class LoginController : Controller
{
    
    private readonly HttpClient _httpClient;
    
    public LoginController(HttpClient httpClient)
    {
        _httpClient = httpClient;
        _httpClient.BaseAddress = new Uri("https://localhost:7278");
    }
    public IActionResult Index()
    {
        return View();
    }
    
}