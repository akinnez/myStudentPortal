getGenderOption = ["Select your gender", "Male", "Female"];
getStatusOption = ["Select your status", "Single", "Married", "Divorced"];
var profile = [];
loop();
function loop() {
  for (let index = 0; index < 32; index++) {
    box.innerHTML += `<div class="tiny"></div>`;
    box1.innerHTML += `<div class="tiny"></div>`;
  }
}
function textarea(params) {
  p = dec.innerHTML;
  inc.innerHTML = pad.value.length;
  if (pad.value.length == 100) {
    document.getElementById("pad").setAttribute("disabled", "disabled");
  }
}

function mPage(params) {
  location.href = "https://akinnez.github.io/myStudentPortal/student.html";
}
function login() {
  if (Fname.value.length == 0) {
    fname.innerHTML = `Enter your first name`;
  } else {
    fname.innerHTML = " ";
  }
}
function clr() {
  fname.innerHTML = " ";
}
function clr1(params) {
  Pin.innerHTML = " ";
}
function logPin() {
  if (pin.value.length == 0) {
    Pin.innerHTML = `Enter your pin`;
    document.getElementById("btn1").setAttribute("disabled", "disabled");
  } else {
    document.getElementById("btn1").removeAttribute("disabled");
    Pin.innerHTML = " ";
  }
}
function fcs() {
  if (ttx.value.length === 0) {
    noInput.innerHTML = `Enter your first name`;
    res();
  } else {
    document.getElementById("btn").removeAttribute("disabled");
    noInput.innerHTML = " ";
  }
}
function res() {
  document.getElementById("btn").setAttribute("disabled", "disabled");
}
function generate(e) {
  var pin = Math.floor(Math.random() * 1000000000000000);
  clrAll.innerHTML = " ";
  t_res.innerHTML += `
 <form class="mx-auto" style="width:75%">
 <div class="mx-auto bg-success" style="width:37px;height:37px;border-radius:100%;border:2px solid green">
  <span class="text-center text-white" style="font-size:25px;margin-left:0.3rem">✔</span></div>
 <h5 class="text-center mt-4">Your Pin is generated successfully</h5>
 <div class="text-center mt-4">Your pin is ${pin}</div>        
</form>
<div class="mx-auto mb-4 mt-1" style="width:75%">
<div class="w-100 mx-auto mt-3">
            <button class="btn btn-md w-100 btn-primary"style=" color:#fff; background:rgb(13, 17, 50)" onclick="regPage()">
              PROCEED TO REGISTRATON
              </button>
              </div>
              <hr>
<div class="w-100 mt-3">
            <button class="btn btn-md w-100 btn-primary"style=" color:#fff; background:rgb(13, 17, 50)" onclick="mPage()">
              ← BACK TO MAIN PAGE
              </button>
              </div>
      </div>
 `;
  obj = { fname: e, pin: pin };
  profile.push(obj);
  console.log(profile);
  localStorage.setItem(`${e}`, JSON.stringify(profile));
}
function showGen() {
  document.querySelector(".steel").className = "d-none";
  document.querySelector("#tr").className = "d-block";
  document.querySelector("h1").style.letterSpacing = "1rem";
  document.querySelector("h1").style.fontSize = "2.5rem";
  document.querySelector("h1").style.animation = "zoom 3s ease-in-out";
  document.querySelector(
    "h1"
  ).innerHTML = `GENERATE YOUR PIN<br><br> JUST ONE CLICK`;

  document.getElementById("tr").innerHTML += ` <div class="card shadow gen">
            <form class="w_80 mx-auto mt-3 mb-4">
              <div id="t_res" class="mt-4">
                  </div>
              <div id="clrAll">
                    <h3 class="text-center mt-3">GENERATE PIN</h3>
            <div class="mx-auto form-group mt-4 mb-2">
              <label class="ms-4" style="font-weight:600;color:rgb(13, 17, 50)">Enter your First Name</label>
              <input type="text" id="ttx" class="form-control w-75 mx-auto" onkeyup="fcs()">
              <small id="noInput" class="text-danger ms-4" style="font-size:13px"></small>
            </div>
            <div class="w-75 mx-auto mb-3">
            <button id="btn" class="btn btn-md w-100 btn-primary"style=" color:#fff; background:rgb(13, 17, 50)" onclick="generate(ttx.value)">
              GENERATE
              </button>
                  </div>
            </form>
          </div>
            `;
  res();
}

function regPage1(firstname, n) {
  if (localStorage.getItem(`${firstname}`)) {
    profile = JSON.parse(localStorage.getItem(firstname));
  } else {
    fname.innerHTML = `Incorrect First Name`;
    Fname.value = " ";
    pin.value = " ";
  }

  if (firstname == profile[0].fname && parseInt(n) == profile[0].pin) {
    document.querySelector("body").innerHTML = "";
    document.querySelector(
      "body"
    ).innerHTML += `<div id="reg2" class="container-fluid m-0 p-0 d-flex justify-content-center">
    <div class="card gen2">
        <form class="w-75 mt-4 mx-auto">
          <h3 class="text-center mt-3">CREATE YOUR ACCOUNT</h3>
          <p class="text-center"></p>
          <div class="form-group mt-5">
            <label for="UserName">User Name</label>
            <input type="text" id="username" class="form-control " style="height: 40px;" required>
            <small id="noInput1" class="text-danger ms-4" style="font-size:13px"></small>
          </div>
          <div class="form-group mt-3">
            <label for="email">E-Mail</label>
            <input type="email" id="email" class="form-control " style="height: 40px;" required>
            <small id="noInput2" class="text-danger ms-4" style="font-size:13px"></small>
          </div>
          <div class="form-group mt-3">
            <label for="password">Password</label>
          <input type="password" id="password" class="form-control " style="height: 40px;" required>
          <small id="noInput3" class="text-danger ms-4" style="font-size:13px"></small>
          </div>
        </form>
        <button class="form-control btn-lg mt-3 mb-5 w-50 mx-auto text-white" style="background:rgb(13, 17, 50) ;" onclick="regPage2(username.value,email.value,password.value,profile[0].fname)">Next</button>
    </div> 
    </div> 
`;
  } else {
    Pin.innerHTML = `Incorrect Pin`;
    pin.value = " ";
  }
}
function regPage() {
  document.querySelector("body").innerHTML = "";
  document.querySelector(
    "body"
  ).innerHTML += `<div id="reg1" class="container-fluid" style="margin-top:6rem" >
<div class="card mx-auto gen1">
  <form class="w-75 mt-2 mx-auto" style="color:rgb(13, 17, 50) ;">
    <h3 class="text-center mt-3" style="font-weight: 700;letter-spacing:5px">LOGIN</h3>
    <p class="text-center" style="font-weight: 600;"> Log In to start your registration</p>
    <div class="form-group mt-2">
      <label style="font-weight: 600;" for="First Name">First Name</label>
      <input type="text" id="Fname" class="form-control " style="height: 40px;" onkeyup="login()" onblur="clr()" required>
      <small id="fname" class="text-danger ms-4" style="font-size:13px"></small>
    </div>
    <div class="form-group mt-3">
      <label style="font-weight: 600;" for="pin">PIN</label>
      <input type="text" id="pin" class="form-control" style="height: 40px;" onkeyup="logPin()" onblur="clr1()" required>
      <small id="Pin" class="text-danger ms-4" style="font-size:13px"></small>
    </div>
  </form>
  <button id="btn1" class="form-control btn-lg mt-4 mb-1 w-50 mx-auto text-white" style="background:rgb(13, 17, 50) ;" onclick="regPage1(Fname.value,pin.value)">Next</button>
  <hr>
  <button class="form-control btn-lg mt-1 mb-1 w-100 mx-auto text-white" style="background:rgb(13, 17, 50) ;" onclick="mPage()"> ← BACK TO HOMEPAGE</button>
</div>
</div>`;

  document.getElementById("btn1").setAttribute("disabled", "disabled");
}

function regPage2(a, b, c, d) {
  profile[0].username = a;
  profile[0].email = b;
  profile[0].password = c;
  localStorage.setItem(`${d}`, JSON.stringify(profile));
  document.querySelector("body").innerHTML = "";
  document.querySelector(
    "body"
  ).innerHTML += `    <div id="personal" class="container-fluid font-monospace d-flex justify-content-center mt-5">
    <div class="personal card">
        <form class="fit1 mt-4 mx-auto">
          <h2 class="text-center">PERSONAL INFORMATION</h2>
          <!-- <p class="text-center">Join our community. Let's set up your account</p> -->
          <div id="" class="fit2 d-flex" style="flex-wrap: wrap;justify-content: space-between;">
          <div class="form-group">
            <label for="First Name">First Name</label>
            <input type="text" id="firstName" class="form-control" placeholder="First Name" disabled>
          </div>
          <div class="form-group">
            <label for="Middle Name">Middle Name</label>
            <input type="text" id="" class="form-control" placeholder="Middle Name">
          </div>
          <div class="form-group">
            <label for="Last Name"> Last Name</label>
          <input type="text" id="" class="form-control" placeholder="Last Name">
          </div>
          <div class="form-group">
            <label for="Email">Email </label>
            <input type="email" id="email" class="form-control" placeholder="Email" disabled>
          </div>
          <div class="form-group">
            <label for="Phone Number">Phone Number</label>
            <input type="text" id="" class="form-control" placeholder="Phone Number">
          </div>
          <div class="form-group">
            <label for="DOB">Date of Birth</label>
            <input type="date" id="val2" class="fit w-100 form-control" required>
          </div>
          <div class="form-group">
            <label for="Gender">Gender</label>
            <select name="" id="lop" class="fit form-control"></select>
          </div>
          <div class="form-group">
            <label for="Marital Status">Marital Status</label>
            <select name="" id="lop1" class="fit form-control"></select>
          </div>
          <div class="form-group">
            <label for="country">Country</label>
            <input type="text" id="" class="form-control" placeholder="Country">
          </div>
          <div class="form-group">
            <label for="state">State</label>
            <input type="text" id="" class="form-control" placeholder="State">
          </div>
        </div>
        </form>
        <div class="fit1 mx-auto form-group">
            <label for="Phone Number">Permanent Address</label>
            <textarea name="" id="pad" cols="30" rows="3" class="form-control" onkeyup="textarea()"></textarea>
            <small id="inc">0</small><small>/</small><small id="dec">100</small>
          </div>
        <button  id="btn-1" class="form-control btn-lg btn-info mt-3 mb-5 mx-auto text-white" onclick="regPage3()">Next</button>
    </div>
    </div>`;
  firstName.value = `${d}`;
  email.value = `${b}`;

  for (let s of getGenderOption) {
    lop.innerHTML += `<option>${s}</option>`;
  }
  for (let s of getStatusOption) {
    lop1.innerHTML += `<option>${s}</option>`;
  }
}
function regPage3(params) {
  document.querySelector("body").innerHTML = "";
  document.querySelector(
    "body"
  ).innerHTML += ` <div class="container-fluid font-monospace d-flex justify-content-center mt-5">
  <div class="personal card">
      <form class="fit1 mt-4 mx-auto">
        <h2 class="text-center">SPONSORS INFORMATION</h2>
        
        <div id="" class="fit2">
        <div class="form-group">
          <label for="First Name">Name of Sponsor</label>
          <input type="text" id="" class="form-control" placeholder="Sponsor's Name">
        </div>
        <div class="form-group">
          <label for="Middle Name">Relationship</label>
          <input type="text" id="" class="form-control" placeholder="Relationship">
        </div>
        <div class="form-group">
          <label for="Email">Email</label>
          <input type="email" id="" class="form-control" placeholder="Email">
        </div>
        <div class="form-group">
          <label for="Phone Number">Phone Number</label>
          <input type="text" id="" class="form-control" placeholder="Phone Number">
        </div>
      <div class="fit1 w-100 form-group">
          <label for="Phone Number">Permanent Address</label>
          <textarea name="" id="pad" cols="30" rows="3" class="form-control" onkeyup="textarea()"></textarea>
          <small id="inc">0</small><small>/</small><small id="dec">100</small>
        </div>
      <button  id="btn-1" class="form-control btn-lg btn-info mt-3 mb-5 mx-auto text-white" onclick="regPage4()">Next</button>
</div>
`;
}

function regPage4() {
  document.querySelector("body").innerHTML = "";
  document.querySelector("body").innerHTML += `
  
  <div class="container-fluid font-monospace d-flex justify-content-center mt-5">
  <div class="personal card">
      <form class="fit1 mt-4 mx-auto">
        <h2 class="text-center">EDUCATIONAL INFORMATION</h2>
        <p class="text-center">Choose the course admitted for</p>
        <div id="" class="fit2">
        <div class="form-group">
          <label for="First Name">Faculty</label>
          <select name="" id="fac" class="form-control"></select>
        </div>
        <div class="form-group">
          <label for="Middle Name">Department</label>
          <select name="" id="department"class="form-control"></select>
        </div>
        <div class="form-group">
          <label for="Middle Name">Highest Level of Education</label>
          <select name="" id="level"class="form-control"></select>
        </div>

      <button  id="btn-1" class="form-control btn-lg mt-3 mb-5 mx-auto text-white" onclick="summary()">Summary</button>
</div>

  `;
}
