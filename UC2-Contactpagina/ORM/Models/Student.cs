namespace ORM.Models;

public class Student
{
    public int Id { get; set; }
    public string LastName { get; set; }
    public string FirstName { get; set; }
    
    public List<Enrollment>? Enrollments { get; set; }
}