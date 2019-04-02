const img = document.getElementById('img-holder');
const text = document.querySelector('#text-holder');

fetch('https://randomuser.me/api/?inc=name,picture,email,location,phone,dob&results=12')
.then(response => response.json())
.then(data => console.log(data))
