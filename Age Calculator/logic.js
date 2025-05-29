function calculateAge() {

    const birthYear = parseInt(document.getElementById("birthYear").value);
    const birthMonth = parseInt(document.getElementById("birthMonth").value) - 1; 
    const birthDay = parseInt(document.getElementById("birthDay").value);

    
    
    if (isNaN(birthYear) || isNaN(birthMonth) || isNaN(birthDay)) {
        alert("Please fill in all fields with valid numbers.");
        return;
    }

    const birthDate = new Date(birthYear, birthMonth, birthDay);
    const currentDate = new Date();

    if (birthDate > currentDate) {
        alert("Birth date cannot be in the future.");
        return;
    }

    let years = currentDate.getFullYear() - birthYear;
    let months = currentDate.getMonth() - birthMonth;
    let days = currentDate.getDate() - birthDay;
    

    if (days < 0) {
    months--;
    const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    alert(`You are ${years} years, ${months} months, and ${days} days old.`);
}
