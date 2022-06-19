var form=document.querySelector("form");
    
form.addEventListener("submit", function(event){
event.preventDefault();

var data={
    email:form.email.value,
    fn:form.fn.value,
    ln:form.ln.value,
    password:form.password.value,
    date:form.password.value,
}
// dataArr.push(dataObj);
localStorage.setItem("ASOSdata",JSON.stringify(data));
alert("Sign up Successful");
window.location.href = "./signin.html";

})