//button 
const calculateButton = document.querySelector('.calculate')


calculateButton.addEventListener('click', () =>{
    let result = document.getElementById('result')
    // elements for each credit hour
    let credit1 = document.getElementById('credit-hours1').value
    let credit2 = document.getElementById('credit-hours2').value
    let credit3 = document.getElementById('credit-hours3').value
    let credit4 = document.getElementById('credit-hours4').value
    let credit5 = document.getElementById('credit-hours5').value
    let credit6 = document.getElementById('credit-hours6').value
    let credit7 = document.getElementById('credit-hours7').value
    let credit8 = document.getElementById('credit-hours8').value
    let credit9 = document.getElementById('credit-hours9').value

    // elements for each value grade
    let grade1 = document.getElementById('letterGrade1').value
    let grade2 = document.getElementById('letterGrade2').value
    let grade3 = document.getElementById('letterGrade3').value
    let grade4 = document.getElementById('letterGrade4').value
    let grade5 = document.getElementById('letterGrade5').value
    let grade6 = document.getElementById('letterGrade6').value
    let grade7 = document.getElementById('letterGrade7').value
    let grade8 = document.getElementById('letterGrade8').value
    let grade9 = document.getElementById('letterGrade9').value

   
    
    // grade conversions 
    
    if (grade1 === 'A') {
        grade1 = 4
    }
    if (grade1 === 'A-') {
        grade1 = 3.7
    }
    if (grade1 === 'B+') {
        grade1 = 3.33
    }
    if (grade1 === 'B') {
        grade1 = 3.0
    }
    if (grade1 === 'B-') {
        grade1 = 2.7
    }
    if (grade1 === 'C+') {
        grade1 = 2.3
    }
    if (grade1 === 'C') {
        grade1 = 2
    }
    if (grade1 === 'C-') {
        grade1 = 1.7
    }
    if (grade1 === 'D+') {
        grade1 = 1.3
    }
    if (grade1 === 'D') {
        grade1 = 1
    }
    if (grade1 === 'D-') {
        grade1 = 0.7
    }
    if (grade1 === 'Select'|| grade1 === "F"){
        grade1 = 0
    }
    


    // grade2 conversions 

    if (grade2 === 'A') {
        grade2 = 4
    }
    if (grade2 === 'A-') {
        grade2 = 3.7
    }
    if (grade2 === 'B+') {
        grade2 = 3.33
    }
    if (grade2 === 'B') {
        grade2 = 3.0
    }
    if (grade2 === 'B-') {
        grade2 = 2.7
    }
    if (grade2 === 'C+') {
        grade2 = 2.3
    }
    if (grade2 === 'C') {
        grade2 = 2
    }
    if (grade2 === 'C-') {
        grade2 = 1.7
    }
    if (grade2 === 'D+') {
        grade2 = 1.3
    }
    if (grade2 === 'D') {
        grade2 = 1
    }
    if (grade2 === 'D-') {
        grade2 = 0.7
    }
    if (grade2 === 'Select'|| grade2 === "F") {
        grade2 = 0
    }

    // grade 3 conversion 
    if (grade3 === 'A') {
        grade3 = 4
    }
    if (grade3 === 'A-') {
        grade3 = 3.7
    }
    if (grade3 === 'B+') {
        grade3 = 3.33
    }
    if (grade3 === 'B') {
        grade3 = 3.0
    }
    if (grade3 === 'B-') {
        grade3 = 2.7
    }
    if (grade3 === 'C+') {
        grade3 = 2.3
    }
    if (grade3 === 'C') {
        grade3 = 2
    }
    if (grade3 === 'C-') {
        grade3 = 1.7
    }
    if (grade3 === 'D+') {
        grade3 = 1.3
    }
    if (grade3 === 'D') {
        grade3 = 1
    }
    if (grade3 === 'D-') {
        grade3 = 0.7
    }
    if (grade3 === 'Select' || grade3 === "F") {
        grade3 = 0
    }


    // grade4 conversion
    if (grade4 === 'Select') {
        grade4 = 0
    }
    if (grade4 === 'A') {
        grade4 = 4
    }
    if (grade4 === 'A-') {
        grade4 = 3.7
    }
    if (grade4 === 'B+') {
        grade4 = 3.33
    }
    if (grade4 === 'B') {
        grade4 = 3.0
    }
    if (grade4 === 'B-') {
        grade4 = 2.7
    }
    if (grade4 === 'C+') {
        grade4 = 2.3
    }
    if (grade4 === 'C') {
        grade4 = 2
    }
    if (grade4 === 'C-') {
        grade4 = 1.7
    }
    if (grade4 === 'D+') {
        grade4 = 1.3
    }
    if (grade4 === 'D') {
        grade4 = 1
    }
    if (grade4 === 'D-') {
        grade4 = 0.7
    }
    if (grade4 === "F") {
        grade4 = 0
    }

    // grade 5 conversions 
    if (grade5 === 'Select') {
        grade5 = 0
    }
    if (grade5 === 'A') {
        grade5 = 4
    }
    if (grade5 === 'A-') {
        grade5 = 3.7
    }
    if (grade5 === 'B+') {
        grade5 = 3.33
    }
    if (grade5 === 'B') {
        grade5 = 3.0
    }
    if (grade5 === 'B-') {
        grade5 = 2.7
    }
    if (grade5 === 'C+') {
        grade5 = 2.3
    }
    if (grade5 === 'C') {
        grade5 = 2
    }
    if (grade5 === 'C-') {
        grade5 = 1.7
    }
    if (grade5 === 'D+') {
        grade5 = 1.3
    }
    if (grade5 === 'D') {
        grade5 = 1
    }
    if (grade5 === 'D-') {
        grade5 = 0.7
    }
    if (grade5 === 'Select' || grade5 === "F") {
        grade5 = 0
    }

    // grade 6 conversion 
    if (grade6 === 'Select') {
        grade6 = 0
    }
    if (grade6 === 'A') {
        grade6 = 4
    }
    if (grade6 === 'A-') {
        grade6 = 3.7
    }
    if (grade6 === 'B+') {
        grade6 = 3.33
    }
    if (grade6 === 'B') {
        grade6 = 3.0
    }
    if (grade6 === 'B-') {
        grade6 = 2.7
    }
    if (grade6 === 'C+') {
        grade6 = 2.3
    }
    if (grade6 === 'C') {
        grade6 = 2
    }
    if (grade6 === 'C-') {
        grade6 = 1.7
    }
    if (grade6 === 'D+') {
        grade6 = 1.3
    }
    if (grade6 === 'D') {
        grade6 = 1
    }
    if (grade6 === 'D-') {
        grade6 = 0.7
    }
    if (grade6 === 'Select' || grade6 === "F") {
        grade6 = 0
    }

    // grade 7 conversion 
    if (grade7 === 'Select') {
        grade7 = 0
    }
    if (grade7 === 'A') {
        grade7 = 4
    }
    if (grade7 === 'A-') {
        grade7 = 3.7
    }
    if (grade7 === 'B+') {
        grade7 = 3.33
    }
    if (grade7 === 'B') {
        grade7 = 3.0
    }
    if (grade7 === 'B-') {
        grade7 = 2.7
    }
    if (grade7 === 'C+') {
        grade7 = 2.3
    }
    if (grade7 === 'C') {
        grade7 = 2
    }
    if (grade7 === 'C-') {
        grade7 = 1.7
    }
    if (grade7 === 'D+') {
        grade7 = 1.3
    }
    if (grade7 === 'D') {
        grade7 = 1
    }
    if (grade7 === 'D-') {
        grade7 = 0.7
    }
    if (grade7 === "Select" || grade7 === "F") {
        grade7 = 0
    }

    // grade 8 conversions 
    if (grade8 === 'Select') {
        grade8 = 0
    }
    else if (grade8 === 'A') {
        grade8 = 4
    }
    else if (grade8 === 'A-') {
        grade8 = 3.7
    }
    else if (grade8 === 'B+') {
        grade8 = 3.33
    }
    else if (grade8 === 'B') {
        grade8 = 3.0
    }
    else if (grade8 === 'B-') {
        grade8 = 2.7
    }
    else if (grade8 === 'C+') {
        grade8 = 2.3
    }
    else if (grade8 === 'C') {
        grade8 = 2
    }
    else if (grade8 === 'C-') {
        grade8 = 1.7
    }
    else if (grade8 === 'D+') {
        grade8 = 1.3
    }
    else if (grade8 === 'D') {
        grade8 = 1
    }
    else if (grade8 === 'D-') {
        grade8 = 0.7
    }
    else if (grade8 === "Select" || grade8 === "F") {
        grade8 = 0
    }

    // grade 9 conversions
    if (grade9 === 'A') {
        grade9 = 4
    }
    else if (grade9 === 'A-') {
        grade9 = 3.7
    }
    else if (grade9 === 'B+') {
        grade9 = 3.33
    }
    else if (grade9 === 'B') {
        grade9 = 3.0
    }
    else if (grade9 === 'B-') {
        grade9 = 2.7
    }
    else if (grade9 === 'C+') {
        grade9 = 2.3
    }
    else if (grade9 === 'C') {
        grade9 = 2
    }
    else if (grade9 === 'C-') {
        grade9 = 1.7
    }
    else if (grade9 === 'D+') {
        grade9 = 1.3
    }
    else if (grade9 === 'D') {
        grade9 = 1
    }
    else if (grade9 === 'D-') {
        grade9 = 0.7
    }
    else if (grade9 === 'A') {
        grade9 = 4
    }
    else if (grade9 === 'Select' || grade9 === "F") {
        grade9 = 0
    }

    //find the grade points 
   
    // ommit empty 
    if (credit1 === '') {

        credit1 = 0;
    }
    if (credit2 === ''){

        credit2 = 0 
    }
    if (credit3 === ''){

        credit3 = 0
    }
    if (credit4 === ''){

        credit4 = 0 
    }
    if (credit5 === ''){

        credit5 = 0
    }
    if (credit6 === ''){
        credit6 = 0
    }
    if (credit7 === ''){
        credit7 = 0
    }
    if (credit8 === ''){
        credit8 = 0
    }
    if (credit9 === ''){

        credit9 = 0
    }

    // if result= = select 

    if (grade1==="Select"){
        grade1 = 0;
    }
    if (grade2==="Select"){
        grade2 = 0;
    }
    if (grade3==="Select"){
        grade3 = 0;
    }
    if (grade4==="Select"){
        grade4 = 0;
    }
    if (grade5==="Select"){
        grade5 = 0;
    }
    if (grade6==="Select"){
        grade6 = 0;
    }
    if (grade7==="Select"){
        grade7 = 0;
    }
    if (grade8==="Select"){
        grade8 = 0;
    }
    if (grade9==="Select"){
        grade9 = 0;
    }



    const course1Total = credit1 * grade1
    const course2Total = credit2 * grade2
    const course3Total = credit3 * grade3
    const course4Total = credit4 * grade4
    const course5Total = credit5 * grade5
    const course6Total = credit6 * grade6
    const course7Total = credit7 * grade7
    const course8Total = credit8 * grade8
    const course9Total = credit9 * grade9


    const totalCredits = parseFloat(credit1) + parseFloat(credit2) + parseFloat(credit3) + parseFloat(credit4) + parseFloat(credit5) + parseFloat(credit6) + parseFloat(credit7) + parseFloat(credit8) + parseFloat(credit9);
    
    const totalLetterGrade = grade1 + grade2 + grade3 + grade4 + grade5 + grade6 + grade7 + grade8 + grade9;


    const totalGradePoint= totalCredits * totalLetterGrade;

    const gpaTotal = (course1Total + course2Total + course3Total + course4Total + course5Total + course6Total + course7Total + course8Total + course9Total) / totalCredits
    result.value = gpaTotal.toFixed(2);

    console.log(course1Total)
    console.log(course2Total)
    console.log(course3Total)
    console.log(course4Total)
    console.log(course5Total)
    console.log(course6Total)
    console.log(course7Total)
    console.log(course8Total)
    console.log(course9Total)
    
    
    

})

// function for the values of the grades & calculations

