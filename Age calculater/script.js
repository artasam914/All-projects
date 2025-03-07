let result = document.querySelector("#result")
let birthday = document.querySelector("#birthday")
let btn = document.querySelector("#btn")

function calculateAge() {
    let birthdayValue = birthday.value;

    if (birthdayValue === "") {
        alert("please enter your birthday")
    } else {

        let age = getAge(birthdayValue)

        result.innerHTML = `Your age is ${age} ${age > 1 ? "years" : "year"} old`
    }
}


function getAge(birthdayValue) {
    let currentDate = new Date();

    let birthdayDate = new Date(birthdayValue)

    let age = currentDate.getFullYear().getMonth - birthdayDate.getFullYear().getMonth;
    // let month = currentDate.getMonth() - birthdayDate.getMonth();
    // let day = currentDate.getDay() - birthdayDate.getDay();

    // if (
    //     month < 0 ||
    //     (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    //   ) {
    //     age--;
    //   }
    
      return age;
    }
btn.addEventListener("click", calculateAge)
