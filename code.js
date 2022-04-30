"use strict";
// LOGIN SECTION START
function submit(){
let userName = document.getElementById("email").value; //login Section input te Email 
let userPassword = document.getElementById("pass").value;//login Section input text Email 

 if ( userName == "azim" && userPassword == "1149" ) {
    window.open("azim.html");
 } else if ( userName == "ansar" && userPassword == "219" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-219").style.display="block";
    document.getElementById("footerId").style.display="block";
 } else if ( userName == "sahjahan" && userPassword == "645" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-645").style.display="block";
    document.getElementById("footerId").style.display="block";
 } else if ( userName == "mobin" && userPassword == "429" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-429").style.display="block";
    document.getElementById("footerId").style.display="block";
 } else if ( userName == "forhad" && userPassword == "230" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-230").style.display="block";
    document.getElementById("footerId").style.display="block";
 } else if ( userName == "rian" && userPassword == "262" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-262").style.display="block";
    document.getElementById("footerId").style.display="block";
 }  else if ( userName == "rinel" && userPassword == "279" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-279").style.display="block";
    document.getElementById("footerId").style.display="block";
 } else if ( userName == "ahasan" && userPassword == "1126" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-1126").style.display="block";
    document.getElementById("footerId").style.display="block";
 }  else if ( userName == "noyon" && userPassword == "726" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-726").style.display="block";
    document.getElementById("footerId").style.display="block";
 }  else if ( userName == "sabbir" && userPassword == "950" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-950").style.display="block";
    document.getElementById("footerId").style.display="block";
 } else if ( userName == "opi" && userPassword == "1150" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-1150").style.display="block";
    document.getElementById("footerId").style.display="block";
 }  else if ( userName == "josim" && userPassword == "1141" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-1141").style.display="block";
    document.getElementById("footerId").style.display="block";
 } 
  else if ( userName == "musfiq" && userPassword == "259" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-259").style.display="block";
    document.getElementById("footerId").style.display="block";
 }  else if ( userName == "sar" && userPassword == "sarwar" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-sar").style.display="block";
    document.getElementById("footerId").style.display="block";
 } else if ( userName == "korshed" && userPassword == "811" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-811").style.display="block";
    document.getElementById("footerId").style.display="block";
 }  else if ( userName == "zia" && userPassword == "743" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-743").style.display="block";
    document.getElementById("footerId").style.display="block";
 }else if ( userName == "foyez" && userPassword == "263" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-263").style.display="block";
    document.getElementById("footerId").style.display="block";
 } else if ( userName == "kokon" && userPassword == "553" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-553").style.display="block";
    document.getElementById("footerId").style.display="block";
 }  else if ( userName == "sayed" && userPassword == "181" ) {
    loginSection.style.display="none";
    document.getElementById("account-section-181").style.display="block";
    document.getElementById("footerId").style.display="block";
 }else {
    modal.innerText="Incorrect username & password !";
    modal.style.display="block";
    userNameBlank.style.border="1px solid #e22424";
    userNameBlank.style.boxShadow="0 0 0 .2rem rgba(255, 0, 0, 0.25)";
    userPasswordBlank.style.border="1px solid #e22424";
    userPasswordBlank.style.boxShadow="0 0 0 .2rem rgba(255, 0, 0, 0.25)";
    userNameBlank.value="";
    userNameBlank.placeholder="example@gmail.com";
    userPasswordBlank.value="";
    userPasswordBlank.placeholder="Password must be 8 characters";
};
userNameBlank.onclick = function() {
    modal.style.display = "none";
  };
  userPasswordBlank.onclick = function() {
    modal.style.display = "none";
  };
};

// LOGIN SECTION END

