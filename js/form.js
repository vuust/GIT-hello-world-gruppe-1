
var x; 
var y; 
var h; 
var f;
var z; 

function validate() {
    x = document.getElementById("namefield").value;
    y = document.getElementById("lastnamefield").value;
    h = document.getElementById("numberfield").value;
    f = document.getElementById("commentfield").value;
    z = document.getElementById("emailfield").value;

    var radiocheck = document.getElementById("accept").checked;
    var infostring; 
    
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    
    if (y == "") {
        alert("Last name must be filled out");
        return false;
    }
      
    if (h == "") {
        alert("Number must be filled out");
        return false;
    }

    if (z == "") {
        alert("Email must be filled out")
        return false;
    }

    if (h.length < 8){
        alert("Number must be atleast 8 characters")
        return false;
    }

    if (!radiocheck){
        alert("You need to accept");
        return false;
    }

    if (radiocheck == true){
    }
    
    if (isEmailKey() == true){
    location.href = "landingpage.html";
        alert("Name: " + x + "\n" + "Last name: " + y + "\n" + "Phone: " + h + "\n" + "Email: " + z + "\n" + "Comment: " + f + "\n" + "Your information has been submitted");
    }
}

function onPageLoad() {
    document.getElementById("name").innerHTML = infostring-name;
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
    alert("You have entered an invalid email address!")
    return (false)
}