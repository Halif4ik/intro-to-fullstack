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

  let hour = Math.round(timeInSecond / SECOND_IN_HOUR);
  timeInSecond = timeInSecond % SECOND_IN_HOUR;
  let min = Math.round(timeInSecond / SECOND_IN_MINUTE);
  let second = timeInSecond % SECOND_IN_MINUTE;

  const prepeareResult = oneNumber =>  oneNumber.toString().length >1  ? `${oneNumber}` : `0${oneNumber}`;

    document.getElementById('hh:mm:ss').innerText = prepeareResult(hour)+':'+ prepeareResult(min)+':'+prepeareResult(second);
    }  );

document.getElementById("btn2_2").addEventListener('click',()=>{
    let timeInHHMMSS = document.getElementById('timeHhMmSS').value;
        const parsTime = timeInHHMMSS.split(':');
    const hhMmSs = parsTime => parseInt(parsTime[0]*SECOND_IN_HOUR) +
        parseInt(parsTime[1]*SECOND_IN_MINUTE)+ parseInt(parsTime[2]);

    return document.getElementById('result2_2').innerText = hhMmSs(parsTime);
    }  );

const SECOND_IN_HOUR =3600;
const SECOND_IN_MINUTE =60;