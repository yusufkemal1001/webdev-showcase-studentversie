using System.ComponentModel.DataAnnotations;

namespace Showcase_Contactpagina.Models;

public class User
{
    
    public int Id { get; set; }
    
    [Required]
    [EmailAddress]
    public string Email { get; set; }
    
    public bool IsAdmin { get; set; }
    
    [Required]
    //[Password]
    public string Password { get; set; }
    
    [Required]
    [StringLength(120)]
    public string FullName { get; set; }
}