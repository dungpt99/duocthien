var log = document.querySelector(".login");
var  username = document.getElementById("username");
var  password = document.getElementById("password");
var button = document.getElementById("login");
var warningusr = document.querySelector(".warningusr");
var warningpass = document.querySelector(".warningpass");
var login = document.getElementById("click");
var formlogin = document.getElementById("form__login");

var forgotpass = document.querySelector(".cl");
var forgot = document.querySelector(".forgot");
var  oldpass = document.getElementById("oldpass");
var  newpass = document.getElementById("newpass");
var save = document.getElementById("save");
var warningopass = document.querySelector(".warningopass");
var warningnpass = document.querySelector(".warningnpass");

var passcu = "admin";
login.addEventListener("click",function(){
    lammoi();
   formlogin.classList.remove("hidden");
   forgot.classList.add("hidden");
})

function ochange(){
      save.addEventListener("click",function(){
            if(oldpass.value ==""){
                warningopass.innerHTML = "Bắt buộc nhập";
            }
            else if(newpass.value == ""){
                warningnpass.innerHTML="Bắt buộc nhập";
            }
            else if(oldpass.value != passcu){
                warningopass.innerHTML = "Mật khẩu không đúng";
            }
            else if(oldpass.value == passcu){
                warningnpass.innerHTML="";
                warningopass.innerHTML = "";
                forgot.classList.add("hidden");
                log.classList.remove("hidden");
                passcu = newpass.value;
            }
      })
}
ochange();
function change(){
    button.addEventListener("click",function(){
        if(username.value ==""){
            warningusr.innerHTML = "Bắt buộc nhập";
        }
        else if(password.value ==""){
            warningpass.innerHTML="Bắt buộc nhập";
        }
        
        else if(username.value == "admin" && password.value != passcu){
            warningpass.innerHTML = "Sai mật khẩu";
        }
        else if(username.value != "admin" && password.value == passcu){
            warningusr.innerHTML = "Sai tài khoản";
        }
        else if(username.value != "admin" && password.value != passcu){
            warningusr.innerHTML = "";
            warningpass.innerHTML = "Tài khoản hoặc mật khẩu không đúng.";
        }
        else if(username.value == "admin" && password.value == passcu ){
            warningpass.innerHTML = "";
            warningusr.innerHTML = "";
            button.innerHTML = "Loading...";
            formlogin.classList.add("hidden");
            login.innerHTML ="Đăng nhập thành công";
        }
     })
}

forgotpass.addEventListener("click",function(){
    lammoi();
    forgot.classList.remove("hidden");
    log.classList.add("hidden");
})

function lammoi(){
    button.innerHTML="Login";
    username.innerHTML = "";
    password.innerHTML ="";
    oldpass.innerHTML="";
    newpass.innerHTML="";
    warningnpass.innerHTML="";
    warningopass.innerHTML="";
    warningusr.innerHTML="";
    warningpass.innerHTML="";
}