/*
1. Дана форма с двумя числовыми инпутами.
   Посчитать сумму чисел в промежутке между введеными пользователем (например от -100 до 100),
суммируя только числа которые заканчиваются на 2,3, и 7*/

document.getElementById("btn1").addEventListener('click',()=>{
    let startNumb = parseInt(document.getElementById('elem1').value);
    let endNumb = parseInt(document.getElementById('elem2').value);
    /* result*/
    let result = 0;

    const multipleOfTwo = intNumb => ( Math.abs(intNumb) % 10 === 2 ||
        Math.abs(intNumb) % 10 === 3 ||  Math.abs(intNumb) % 10 === 7 );

    if(startNumb > endNumb)  [startNumb,endNumb] = [endNumb, startNumb];

    for (let i = startNumb; i <= endNumb; i++) {
        if(multipleOfTwo(i)) result+=i;

    }

    document.getElementById('result1').innerText = result.toString();
}  );

/*2. User put time in sec result output in hh:ss.*/

document.getElementById("btn2_1").addEventListener('click',()=>{
    let timeInSecond = parseInt(document.getElementById('seconds').value);
    let arrHours = [];

    arrHours.push(Math.round(timeInSecond / SECOND_IN_HOUR));
        //3661 % 3600 = 61
  timeInSecond = timeInSecond % SECOND_IN_HOUR;
        // 61 / 60 = 1
    arrHours.push (Math.round(timeInSecond / SECOND_IN_MINUTE));
    // push last element
    arrHours.push( timeInSecond % SECOND_IN_MINUTE);
    //
    for (let i = 0; i <arrHours.length; i++)  arrHours[i] =  arrHours[i] || "--";


    const prepeareResult = oneNumber =>  oneNumber.toString().length > 1  ? `${oneNumber}` : `0${oneNumber}`;
    let result =prepeareResult(arrHours[0])+':'+ prepeareResult(arrHours[1])+':'+prepeareResult(arrHours[2])


    document.getElementById('hh:mm:ss').innerText = result;
    } );

document.getElementById("btn2_2").addEventListener('click',()=>{
    let timeInHHMMSS = document.getElementById('timeHhMmSS').value;
        const parsTime = timeInHHMMSS.split(':');
    const hhMmSs = parsTime => parseInt(parsTime[0]*SECOND_IN_HOUR) +
        parseInt(parsTime[1]*SECOND_IN_MINUTE)+ parseInt(parsTime[2]);

    return document.getElementById('result2_2').innerText = hhMmSs(parsTime);
    }  );

/*3. User put time in input[type=datetime-local] output instring  2 year(s), 1 month(s),
3 day(s), 5 hour(s), 10 minute(s), 15 second(s).*/
document.getElementById("btn3").addEventListener('click',()=>{
    let arrHours = [];
    let result;
    arrHours[0] = document.getElementById('datetimeStart').value;
    arrHours[1] = document.getElementById('datetimeEnd').value;

    if(!arrHours[0] || !arrHours[1] ) alert('Empty datetime Start or End');
    if(arrHours[0] > arrHours[1]) arrHours.reverse();

    const dateStart = new Date(arrHours[0]);
    const dateEnd = new Date(arrHours[1]);

    let year = dateEnd.getFullYear()-dateStart.getFullYear();

    let endMount = dateEnd.getMonth();
    let startMount = dateStart.getMonth();
    if (endMount  < startMount){
        year--;
        endMount+=12;
    }
    let month = endMount - startMount;

    //calculate difference how many days
    let endDays = dateEnd.getDate();
    let startDays = dateStart.getDate();
    let days;
    if (endDays  < startDays){
        month--;
        days  = Math.round((dateEnd - dateStart) / 1000 / 60*60 / 24);
         } else days= endDays-startDays;

    //calculate difference how many hours
    let endHour =  dateEnd.getHours();
    let startHour =  dateStart.getHours();
    let hours;
    if (endHour  < startHour){
        days--;
        endHour += 24;
    }
    hours= endHour-startHour;
    //calculate difference how many minutes
    let endMinute =  dateEnd.getMinutes();
    let startMinute =  dateStart.getMinutes();
    let minutes;
    if (endMinute <startMinute){
        hours--;
        endMinute += 60;
    }
     minutes = endMinute-startMinute;

    const second = dateEnd.getSeconds()-dateStart.getSeconds();

result = `${year} year(s), ${month} month(s), ${days} day(s), ${hours} hour(s), ${minutes} minute(s), ${second} second(s)`
    document.getElementById('yearMonth').innerText = result;
});


const SECOND_IN_HOUR =3600;
const SECOND_IN_MINUTE =60;