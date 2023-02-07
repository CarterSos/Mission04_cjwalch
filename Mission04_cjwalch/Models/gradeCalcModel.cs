using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_cjwalch.Models
{
    public class gradeCalcModel
    {
        // These validations make sure a user enters a score from 0 to 100
        [Required]
        [Range(0, 100, ErrorMessage = "Assignments score must be a score from 0 to 100")]
        public ushort assignments { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Group project score must be a score from 0 to 100")]
        public ushort group { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Quiz score must be a score from 0 to 100")]
        public ushort quiz { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Midterm score must be a score from 0 to 100")]
        public ushort midterm { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Final Exam score must be a score from 0 to 100")]
        public ushort final { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Intex score must be a score from 0 to 100")]
        public ushort intex { get; set; }


    }
}


