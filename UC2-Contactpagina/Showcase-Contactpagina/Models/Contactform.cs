using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Showcase_Contactpagina.Models
{
    public class Contactform
    {
        [Required]
        [StringLength(60)]
        public string FirstName {  get; set; }

        [Required]
        [StringLength(60)]
        public string LastName {  get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }
        

        [Required]
        [Phone]
        public string Phone { get; set; }
        
        [Required]
        [FromForm(Name = "g-recaptcha-response")]
        [StringLength(5000)]
        public string Captcha { get; set; }
            
    }
}
