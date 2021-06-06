alert ('welcome to furniture design')
var email = prompt ("sign up your email for latest trends")
alert ('your email has been successfully signed' + email)
document.write(email)
var userInputRoom = prompt ('choose a room you want to design')

if (userInputRoom == "living room"){
 alert ('room is found')
}
else{
alert ('room is not found')
}

var confirmUser = prompt("are you ready to design")

while (confirmUser != "yes"){
  alert ('wrong answer!')
  var confirmUser = prompt("are you ready to design")
}
{
  alert ('great !')
}

var roomNumber = prompt ("how many rooms do you have")

for (var i = 0 ; i < roomNumber ; i++){
  document.write("<img src='roomOutline.jpg' alt='room' height='100 pixel' width='90 pixl'>")
}