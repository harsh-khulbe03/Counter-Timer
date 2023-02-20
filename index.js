const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const heading = document.querySelector("h1");

const second = 1000,
 minute = 60 * second,
 hour = 60 * minute,
 day = 24 * hour;


const timerFunction = () => {


    let now = new Date();
    let dd = String(now.getDate()).padStart(2,"0");
    let mm = String(now.getMonth()+1).padStart(2,"0");
    let yyyy = now.getFullYear();

    const enteredDay = prompt("Enter Day:").padStart(2,"0");
    const enteredMonth = prompt("Enter Month:").padStart(2,"0");
    let targetDate =`${enteredMonth}/${enteredDay}/${yyyy}`;
    now = `${mm}/${dd}/${yyyy}`;
    if(now > targetDate) {
        targetDate = `${enteredMonth}/${enteredDay}/${yyyy + 1}`;
    }
    setInterval(() => {
    
    const timer = new Date(targetDate).getTime();
    const today = new Date().getTime();
    const difference = timer-today;
    const leftDay = Math.floor(difference/day);
    
    const leftHour = Math.floor((difference%day)/hour);
    
    const leftMinute = Math.floor((difference%hour)/minute);
    
    const leftSecond = Math.floor((difference%minute)/second);
    

    days.innerText = leftDay;
    hours.innerText = leftHour;
    minutes.innerText = leftMinute;
    seconds.innerText = leftSecond;
    },0);
}

timerFunction();