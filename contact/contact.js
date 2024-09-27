const first = document.getElementById("firstName");
const last = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phoneNumber");
const message = document.getElementById("message");

const submit = document.getElementById("submitBtn");

function submitData() {
    localStorage.setItem("first", first.value);
    localStorage.setItem("last", last.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("message", message.value);
   }
   function logout_fun(){
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    window.location.href = '../form.html'
  
  }