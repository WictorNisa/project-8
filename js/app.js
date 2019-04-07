const imgHolder = document.querySelectorAll('.img-holder');
const textHolder = document.querySelectorAll('.text-holder');
const modalView = document.querySelectorAll('.modal-view');

let people = [];
fetch('https://randomuser.me/api/?inc=name,picture,email,location,phone,dob&results=12')
  .then(response => response.json())
  .then (data => people = data.results)
  .then(data => generateImg(data))
  .then(data => generateName(data))
  .then(data => generateModalInfo(data));


function generateImg(data){
  people.forEach((person, index) => {
    const avatarImg = person.picture.large;
    let html = `
      <img src="${avatarImg}">
    `;
    imgHolder[index].innerHTML = html;
  });
}

function generateName(data) {
  people.forEach((person, index) => {
    const firstName = person.name.first;
    const lastName = person.name.last;
    const email = person.email;
    const city = person.location.city;
    let nameHtml = `
      <p class="avatar-name">${firstName} ${lastName}</p>
      <p class="avatar-email"> ${email}</p>
      <p class="avatar-city"> ${city}</p>
    `;
    console.log(people);
    textHolder[index].innerHTML = nameHtml;
  });
}

function generateModalInfo(data) {
  people.forEach((person, index) => {
    const cell = person.phone;
    const street = person.location.street;
    const city = person.location.city;
    const state = person.location.state;
    const postcode = person.location.postcode;
    const bithday = person.dob.date;

  });
}
