
let user = document.getElementById("user12")
let pass = document.getElementById("pass12")
let button = document.getElementById("login");






function Login (){
if(user.value == "utku" && pass.value == "1234"){
alert("Giriş Başarılı");
window.location = "index.html"
}
else{
    alert("Kullanıcı Adı Veya Şifre Hatalı");
}
}