using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ORM.Data;
using ORM.Models;

namespace ORM.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    private readonly SchoolContext _schoolContext;
    
    

    public HomeController(ILogger<HomeController> logger, SchoolContext schoolContext)
    {
        _logger = logger;
        _schoolContext = schoolContext;
    }

    public async Task<IActionResult> Index()
    {
        return View(await _schoolContext.Students.Include(s => s.Enrollments).ThenInclude(e => e.Course).ToListAsync());
    }

    public IActionResult Privacy()
    {
        return View();
    }
    
    public IActionResult CreateStudent()
    {
        return View(new Student());
    }

    public async Task<IActionResult> Create([Bind("Id","LastName","FirstName")] Student student)
    {
        if (ModelState.IsValid)
        {
            _schoolContext.Add(student);
            await _schoolContext.SaveChangesAsync();
            return RedirectToAction("Index");
        }
        return View(student);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}