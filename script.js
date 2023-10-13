const days=document.querySelector('.days');
const hours=document.querySelector('.hour');
const minutes=document.querySelector('.minute');
const seconds=document.querySelector('.seconds');


function countDown(){
    const newYear_year=(new Date().getFullYear())+1
    const newYear=new Date(`January 1 ${newYear_year} 00:00:00`)
    const currentYear=new Date();
    const deff=newYear-currentYear;
    /*
    1000ms=1s
    60s=1min
    60min=1hr
    24hr=1day 
    */
    const d=Math.floor(deff/1000/60/60/24);
    const h=Math.floor((deff/1000/60/60)%24);
    const m=Math.floor((deff/1000/60)%60);
    const s=Math.floor((deff/1000)%60);

    days.innerHTML=d<10?'0'+d:d;
    hours.innerHTML=h<10?'0'+h:h;
    minutes.innerHTML=m<10?'0'+m:m;
    seconds.innerHTML=s<10?'0'+s:s; 
}

setInterval(countDown,1000);