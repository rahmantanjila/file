function validate(){
    if (document.myForm.name.value==""){
       alert("Name field is Emty");
        document.myForm.name.focus();
        return false;
    }
    if (document.myForm.name.value==""){
        alert("Email field is Emty");
         document.myForm.email.focus();
         return false;
     }
     if (document.myForm.name.value==""){
        alert("Mobile field is Emty");
         document.myForm.mobile.focus();
         return false;
     }
}


