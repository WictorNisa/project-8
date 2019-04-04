const img = document.querySelector('.img-holder');
const text = document.querySelector('#text-holder');

let people = [];
fetch('https://randomuser.me/api/?inc=name,picture,email,location,phone,dob&results=12')
  .then(response => response.json())
  .then(data => {
    people = data.results;
    console.log(people);
  })
  .then(data => generateImg(data));


  function generateImg(data){
    people.forEach((person) => {
      const avatarImg = person.picture.large;
      const html = `
        <img src="${avatarImg}">
      `;
      img.innerHTML = html;
    });
}
