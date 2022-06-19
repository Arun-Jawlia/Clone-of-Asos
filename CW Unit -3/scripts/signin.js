
    var form=document.querySelector("form");
    var ASOSdata= JSON.parse(localStorage.getItem("ASOSdata"));
  //   console.log(loginData)
  
    form.addEventListener("submit",function(event){
      event.preventDefault();
  
      var data={
          email:form.email.value,
          password:form.password.value,
      }
  
      if(ASOSdata===null)
      {
          alert("Please create an account First");
      }
      else if(ASOSdata.email == data.email && ASOSdata.password == data.password){
          alert("login Successful");
          localStorage.setItem("signin",JSON.stringify(ASOSdata));
          window.location.href='../Construct Week 2/index.html'
      }
      else{
          alert("User data does not exist please check before you Enter ");
      }
    })