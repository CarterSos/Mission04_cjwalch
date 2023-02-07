////A "Grade Calculator" form that takes as input a percentage scored for each grade
////category listed in the syllabus

////Build a JavaScript program that calculates and displays both a final percentage and a letter grade
////using the "Grade Calculator" form entries based on the weights listed in the syllabus.Use
////jQuery selectors(i.e.the “$”) in your program.Print the letter grade to the form(not in an alert.)

// assignments      50 %
// Group Project    10 %
// Quizzes          10 %
// Midterm Exam     10 %
// Final Exam       10 %
// INTEX            10 %

$("#btnCalculate").click(function () {
    var totalScore = 0.0; /* declare variable to then calculate total final percentage */
    totalScore = ($("#grAss").val() * 0.5) + ($("#grGP").val() * 0.1) /* get input from the html form */
        + ($("#grQuiz").val() * 0.1) + ($("#grME").val() * 0.1) +     /* and make calculations */
        ($("#grFE").val() * 0.1) + ($("#grIntex").val() * 0.1);        /* variables are grade (gr) then category Midterm Exam (ME) */
   
    var letterGrade = ''; /* set the letter grade based on numeric grade percentage */
    if (totalScore >= .94) {
        letterGrade = 'A';
    } else if (totalScore >= .90) {
        letterGrade = 'A-';
    } else if (totalScore >= .87) {
        letterGrade = 'B+';
    } else if (totalScore >= .84) {
        letterGrade = 'B';
    } else if (totalScore >= .80) {
        letterGrade = 'B-';
    } else if (totalScore >= .77) {
        letterGrade = 'C+';
    } else if (totalScore >= .74) {
        letterGrade = 'C';
    } else if (totalScore >= .70) {
        letterGrade = 'C-';
    } else if (totalScore >= .67) {
        letterGrade = 'D+';
    } else if (totalScore >= .64) {
        letterGrade = 'D';
    } else if (totalScore >= .60) {
        letterGrade = 'D-';
    } else {
        letterGrade = 'E';
    }

    document.getElementById("result").innerHTML = 'Final Grade: ' + letterGrade; /* takes the result and prints back to the 'result' label within the form */

})
