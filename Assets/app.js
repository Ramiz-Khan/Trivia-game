
var count=30;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     $("#main-window").innerHTML='THANK YOU!';

     return;
  }

  document.getElementById("timer").innerHTML=count + " secs";

}



