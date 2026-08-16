let userName;
let age;
let clgName;
let rolnum;

document.getElementById("mySubmit").onclick = function(){
   clgName = document.getElementById("clgName").value;
   userName= document.getElementById("uName").value;
   age = document.getElementById('age').value;
   rolnum = document.getElementById("rollNumber").value;

   document.getElementById("clgname").textContent = `${clgName} College`;
   document.getElementById("name").textContent = `Student Name : ${userName}`;
   document.getElementById("ege").textContent = `Student Age : ${age}`;
   document.getElementById("idnumber").textContent = `Student ID Number : ${rolnum}`;

}
