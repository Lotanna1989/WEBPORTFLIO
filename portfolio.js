

function changeImage() {
    document.querySelector('#image1').src="./images/20210601_080544.jpg"
    
}


let sendBtn = document.getElementById("send");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
     e.preventDefault();
});

sendBtn.addEventListener("click", (e) => {
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let address = document.getElementById("address");
    let password = document.getElementById("password");
    
    //getvalues
     fname = fname.value


     //localstorage setvalue
     localStorage.setItem("fname", fname);


     lname = lname.value;
     localStorage.setItem("lname", lname);

     email = email.value;
     localStorage.setItem("email", email);

     phone = phone.value;
     localStorage.setItem("phone", phone);

     address.value;
     localStorage.setItem("address", address);

     password.value;
     localStorage.setItem("password", password);

     document.getElementById("form").reset();


})
