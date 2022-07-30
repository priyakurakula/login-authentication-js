let email=document.getElementById('email');
let password=document.getElementById('password');
let button=document.getElementById('validate');
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
if(inputText.match(mailformat))
{
console.log("Valid email address!");
return true;
}
else
{
alert("You have entered an invalid email address!");
return false;
}
}
function ValidatePassword(inputText)
{
var passwordformat = /^.(?=.{8,})(?=.[a-zA-Z])(?=.\d)(?=.[!#$%&? "]).*$/;

//^.*              : Start
// (?=.{8,})        : Length
// (?=.*[a-zA-Z])   : Letters
// (?=.*\d)         : Digits
// (?=.*[!#$%&? "]) : Special characters
// .*$              : End

if(inputText.match(passwordformat))
{
console.log("Valid password address!");
return true;
}
else
{
alert("You have entered an invalid password!");
return false;
}
}
button.addEventListener('click',(e)=>{
	e.preventDefault()
	ValidateEmail(email.value)
	ValidatePassword(password.value)
	
})