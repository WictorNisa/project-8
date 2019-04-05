const imgHolder = document.querySelectorAll('.img-holder');
const text = document.querySelector('#text-holder');

let people = [];
fetch('https://randomuser.me/api/?inc=name,picture,email,location,phone,dob&results=12')
  .then(response => response.json())
  .then (data => people = data.results)
  .then(data => generateImg(data));


function generateImg(data){
  people.forEach((person) => {
    const avatarImg = person.picture.large;
    let avatar = document.createElement('img');
    avatar.setAttribute('src', avatarImg);
    let html = `
      <img src="${avatar}">
    `;

    imgHolder.innerHTML = html;
  });
}
