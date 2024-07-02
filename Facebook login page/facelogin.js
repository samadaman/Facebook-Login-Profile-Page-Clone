function toggleSubmit() {
  let email, psw;
  email = document.getElementById("email").value;
  psw = document.getElementById("psw").value;

  let logValue = {
    email: email,
    psw: psw,
  };
  logValue = JSON.stringify(logValue);
  localStorage.setItem("LogIn-Data", logValue);

  body.innerHTML = `<h1>Welcome, ${email}.</h1>`;


}

// function toggleBlue() {
//   let email, psw;
//   email = document.getElementById("email");
//   psw = docu
// ment.getElementById("psw");

//   if (email && psw.style.border != "1px solid #1877f2") {
//     email && psw.style.border == "1px solid #1877f2";
//   } else {
//     email && psw.style.border == "1px solid #dddfe2";
//   }
// }

// const btn = document.createElement('a')
// if(email == 'amansamad@gmail.com'){
//     btn.href ="https://www.facebook.com/samad.aman.336"
// } else{
//     localStorage.setItem("LogIn-Data", logValue);
// }

function toggleDark() {
  let btnDark = document.getElementById('btnDark');
  let body = document.getElementById('body');
  let form = document.getElementById('form');
  let box = document.getElementById('box');
  let link = document.getElementById('link');

  body.classList.toggle('dark');
  form.classList.toggle('formDark');
  box.classList.toggle('boxDark');
  link.classList.toggle('linkDark');

  const saveLocal =  localStorage.setItem('dark', 'on')
  const saveDark = localStorage.getItem('dark')
  // if(saveLocal==)
}