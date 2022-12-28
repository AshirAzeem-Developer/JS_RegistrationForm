// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
    getDatabase,
    ref,
    set,
    onChildAdded,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChYKbnss3HEjlUuNW_Sd-AtIQDzuPGxgU",
    authDomain: "js-form-9fde7.firebaseapp.com",
    databaseURL: "https://js-form-9fde7-default-rtdb.firebaseio.com",
    projectId: "js-form-9fde7",
    storageBucket: "js-form-9fde7.appspot.com",
    messagingSenderId: "611843305900",
    appId: "1:611843305900:web:1a13c4c967fbf58f950a09",
    measurementId: "G-EX2PEM23SY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();



var FirstName = document.getElementById("FirstName");
var LastName = document.getElementById("LastName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var NIC = document.getElementById("NIC");
var PhoneNum = document.getElementById("PhoneNo");
var lastqualif = document.getElementById("LastQualification");
var AdmissionRequired = document.getElementById("AdmissionRequiredIn");
var parent = document.getElementById('parent');





if (FirstName == "" && LastQal == "" && AdmissionRequired == "" && password == "" && NIC == "" || PhoneNum == "") {
    alert("Field Data Missing");
} else {



}


window.saveTask = function () {
    var obj = {
        Fname: FirstName.value,
        LName: LastName.value,
        Email: email.value,
        Pass: password.value,
        NICNum: NIC.value,
        PNo: PhoneNum.value,
        LastQal: lastqualif.value,
        AdmissionReq: AdmissionRequired.value
    };
    obj.id = Math.random().toString().slice(2);
    let reference = ref(database, `Data/${obj.id}/`);
    set(reference, obj);
    console.log(obj);
}

function getData() {
    let reference = ref(database, 'Data/')
    let arr = [];
    onChildAdded(reference, function (data) {
        arr.push(data.val());
        console.log(arr);
        parent.innerHTML = "";
        for (var i = 0; i < arr.length; i++) {
            parent.innerHTML += `<li>${arr[i].Data} </li>`;
        }
    })
}
getData();