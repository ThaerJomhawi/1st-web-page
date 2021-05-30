//here i will use the if 
var userName=prompt('What can we call you?  ');
alert('Welcome ' + userName+' to MCU');

var superpower=prompt('Whats your super power?  ');
alert('Thats amazing ');

var mrthaer=prompt('choose a number from 1 to 3')
if (mrthaer == 1) {
  alert('You are with the avengers ');
} else if (mrthaer == 2 ) {
  alert('you are with Thanos');
} else {
  alert('you are with the gardians of the galaxy ');
}


// here I will use the loops 

var os = prompt('Are  you using android or ios');

while (os!="android" && os!="ios")
{os = prompt('please chose (android or ios) only ')}

while (os!="android" || os!="ios")
{if (os == 'android')
 {
  alert ( "you are free to go");
  break;}

 else if(os =='ios')
  {
  alert("change it to android as soon as posible");
  break;}

 }
 

var countries =prompt ('how many countries you have been to (please write numbers only)?');

for(var i=0;i<countries;i++)
{ document.write('<img src="https://image.flaticon.com/icons/png/512/183/183595.png" width="25" height="25"/>')}

