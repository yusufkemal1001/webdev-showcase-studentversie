namespace ORM.Models;

    public enum Grade
    {
        A, B, C, D, F
    }

    public class Enrollment
    {
        public int Id { get; set; }

        public int CourseID { get; set; }
        public Course Course { get; set; }

        public int StudentID { get; set; }
        public Student Student { get; set; }
    }
