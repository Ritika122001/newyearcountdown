const newYear= "1 Jan 2022";

function countdown()
{
    const newyeardate= new Date(newYear);
    const curdate= new Date();
    var time =newyeardate-curdate;
    //console.log(time);
    const totalsecond = (time/1000);
    const days=  Math.floor(totalsecond / 3600/24);
    const hours= Math.floor(totalsecond/3600 )%24;
    const minutes= Math.floor(totalsecond/60 )%60;
    const second = Math.floor(totalsecond)%60;
    document.getElementById("day").innerText= days;
    document.getElementById("hours").innerText= format(hours)  ;
    document.getElementById("minute").innerText=  format(minutes);
    document.getElementById("seconds").innerText=  format(second);
    
   
 
   

    

}



function format(Time)
{
  return Time <10 ? `0${Time}`:Time;
}
countdown();

setInterval(countdown,1000);


