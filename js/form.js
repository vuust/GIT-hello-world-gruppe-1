
let namefield; 
let lastnamefield; 
let numberfield; 
let commentfield;
let emailfield; 

namefield = document.getElementById("namefield");
lastnamefield = document.getElementById("lastnamefield");
numberfield = document.getElementById("numberfield");
commentfield = document.getElementById("commentfield");
emailfield = document.getElementById("emailfield");


function validate() {
    let radiocheck = document.getElementById("accept").checked;
    let namevalue = namefield.value;
    let lastnamevalue = lastnamefield.value;
    let numbervalue = numberfield.value;
    let commentvalue = commentfield.value;
    let emailvalue = emailfield.value;
    
    if (namevalue == "") {
        alert("Name must be filled out");
        namefield.focus();
        return false;
    }
    
    if (lastnamevalue == "") {
        alert("Last name must be filled out");
        lastnamefield.focus()
        return false;
    }
    
    if (numbervalue == "") {
        alert("Number must be filled out");
        numberfield.focus()
        return false;
    }
    if (numbervalue.length < 8){
        numbervalue.focus()
        alert("Number must be atleast 8 characters")
        return false;
    }
    
    if (emailvalue == "") {
        emailfield.focus()
        alert("Email must be filled out")
        return false;
    }
    
    if (isEmailKey() == false){
        alert("You need to enter a valid email")
        return false;
    }
    
    if (!radiocheck){
        alert("You need to accept");
        return false;
    }
    
    else {
        alert("Name: " + namevalue + "\n" + "Last name: " + lastnamevalue + "\n" + "Phone: " + numbervalue + "\n" + "Email: " + emailvalue + "\n" + "Comment: " + commentvalue + "\n" + "Your information has been submitted");
        location.href="about.html";
    }
    
}
function isNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
    return false;
    
	return true;
}

function isLetterKey(evt)
{
    var charCode2 = (evt.which) ? evt.which : event.keyCode
    if (charCode2 < 60)
    return false;
    
	return true;
}

function isEmailKey() 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailfield.value))
    {
        return (true)
    }
    else
    return (false)
}