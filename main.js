if (localStorage.warna1){
    document.getElementsByTagName('body')[0].style.background = "linear-gradient(130deg, "+localStorage.warna1+", "+localStorage.warna2+")"
    console.log(" Warna Background = "+ localStorage.warna1);
    console.log(document.getElementsByTagName('body')[0].style.background);
}

function tes(){
    warna1 = document.getElementById('warna1').value;
    warna2 = document.getElementById('warna2').value;
    localStorage.setItem('warna1', warna1);
    localStorage.setItem('warna2', warna2);
    // localStorage.setItem('hewan', 'kambng');
    document.getElementsByTagName('body')[0].style.background = "linear-gradient(130deg, "+localStorage.warna1+", "+localStorage.warna2+")"
    // localStorage.removeItem('hewan');
    // localStorage.clear();
    console.log(localStorage.getItem('hewan') + " Warna = "+ localStorage.warna1);
}

function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  var username1 = localStorage.getItem('username');
  var password1 = localStorage.getItem('password');
  
    if (username == username1 && password == password1) {
      alert('berhasil')
      window.location.href = 'luas.html';
    } else {
      alert('Invalid username or password');
      return false;
    }
    
  }

function save() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;

    if (!username || !password || !email) {
      alert("Tolong isi dengan benar!");
      return;
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    alert("Masukan alamat Email yang benar!");
    return;
}

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('email', email);


    alert('Berhasi Buat Akun.');
    window.location.href = 'login register.html';
  }

// Import the crypto-js library
import { SHA256 } from 'crypto-js';

// Function to encrypt password
function encryptPassword(password) {
  return SHA256(password).toString();
}

// Store encrypted password in local storage
localStorage.setItem('encryptedPassword', encryptPassword('myPassword'));

