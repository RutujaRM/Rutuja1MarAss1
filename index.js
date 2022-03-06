function compare()
{
   var pw=document.getElementById("password").value;  //get the value of password by using ID

   var conpw=document.getElementById("password1").value; //get the value of confirm password by using confirm password

   
   if(pw == "")   //so to check users enters the password
      {  
        document.getElementById("message")
        alert("**Fill the password please!!"); 
        return false;  
     }  
  

   if(pw.length < 6)    //minimum password length validation  
    {  
      document.getElementById("message")    //.innerHTML = "**Password length must be atleast 8 characters"; 
      alert("**Password length must be atleast 6 characters"); 
      return false;  
    }  
 

   if(pw.length > 10)  //maximum length of password validation  
    {  
      document.getElementById("message")  //.innerHTML = "**Password length must not exceed 15 characters"; 
      alert("**Password length must not exceed 10 characters") ;
      return false;  
    } 
 
 

   if(pw!=conpw)  //to check both passwords same or not,equal or not 
   {
       alert("password did not match!!!!!😟😟😟"); 
   }
   else
   {
       alert("password created successfully😄😆😄");
   }

}


  
  



