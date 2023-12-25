var students = [
  { name: "kushang tanawala", age: 18, email: "kushang@gmail.com", grade: "A", address: "Surat" },
  { name: "ketan chavda", age: 22, email: "ketan@gmail.com", grade: "B", address: "Surat" },
  { name: "abhishek khachar", age: 18, email: "abhishek@gmail.com", grade: "A", address: "Surat" },
];
for (var i = 0; i < students.length; i++) {
  document.getElementById('details').innerHTML += `
   <div class="card">
    <h2>${students[i].name}</h2>
    <p>Age: ${students[i].age}</p>
    <p>Email: ${students[i].email}</p>
    <p>Grade: ${students[i].grade}</p>
    <p>Address: ${students[i].address}</p>
  </div>
  `;
}