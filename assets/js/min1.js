function formvalidation() {
    let n= document.getElementById("nmessageError");
    let a= document.getElementById("amessageError");
    let p= document.getElementById("pmessageError");
    let e= document.getElementById("emessageError");
    let pass= document.getElementById("passmessageError");
    let cp= document.getElementById("cpmessageError");

  if (document.myform.name.value == "") {
    document.getElementById("nmessageError").innerHTML = "Name is required";
    return false;
  }
  else{
    n.style.display="none";
  }
  if (document.myform.address.value == "") {
    document.getElementById("amessageError").innerHTML = "Address is required";
    return false;
  }
  else{
    a.style.display="none";
  }
  if (document.myform.phone.value == "") {
    document.getElementById("pmessageError").innerHTML =
      "Phone Number is required";
    return false;
  }
  else if(isNaN( document.myform.phone.value)){
   document.getElementById("pmessageError").innerHTML="Phone Number must be Numeric";
   return false;
  }
  else if(document.myform.phone.value.length != 10){
    document.getElementById("pmessageError").innerHTML="Phone Number must be 10 digit";
return false;
  }
  else{
    p.style.display="none";
  }

  if (document.myform.email.value == "") {
    document.getElementById("emessageError").innerHTML = "Email is required";
    return false;
  }
  else{
    e.style.display="none";
    
  }

  if (document.myform.password.value == "") {
    document.getElementById("passmessageError").innerHTML ="Password is required";
    return false;
  }
  else if(document.myform.password.value.lenght<5){
  document.getElementById("passmessageError").innerHTML ="weak password";
  pass.style.color="red";
return false;
}
  else if(document.myform.password.value.lenght<8){
  document.getElementById("passmessageError").innerHTML ="medium password";
  pass.style.color="yellow";
return false;
}
  else if(document.myform.password.value.lenght>8){
  document.getElementById("passmessageError").innerHTML ="strong password";
  pass.style.color="green";
return false;
}

  else{
    pass.style.display="none";
  }

  if (document.myform.confirmpassword.value == "") {
    document.getElementById("cpmessageError").innerHTML ="Confirm Password is required";
    return false;
  }
  else{
    cp.style.display="none";
  }

  return true;
}
