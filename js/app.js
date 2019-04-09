const imgHolder = document.querySelectorAll('.img-holder');
const textHolder = document.querySelectorAll('.text-holder');
const modalView = document.querySelectorAll('.modal-view');
const gridSelect = document.getElementById('grid-select');
const closeX = document.getElementById('close');
const modalBlock = document.querySelector('.modal-block');
const modal = document.querySelector('.modal');
const index = document.querySelectorAll('[data-index]');


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
    textHolder[index].innerHTML = nameHtml;
  });
}

function generateModalInfo(data) {
  people.forEach((person, index) => {
    const avatarImg = person.picture.large;
    const firstName = person.name.first;
    const lastName = person.name.last;
    const email = person.email;
    const cell = person.phone;
    const street = person.location.street;
    const city = person.location.city;
    const state = person.location.state;
    const postcode = person.location.postcode;
    const birthday = person.dob.date;
    let infoHtml = `
      <img class="modal-avatar" src="${avatarImg}">
      <p>${firstName} ${lastName}</P>
      <p>${email}</p>
      <p>${cell}</p>
      <p>${street} ${state} ${city} ${postcode}</p>
      <p>Birthday: ${birthday}</p>
    `;
      modalView[index].innerHTML = infoHtml;
  });
}

function openModal(e) {
  let gridContain = e.target.closest('div.grid-contain');
  if(gridContain) {
    modalBlock.style.display = 'flex';
    modal.style.display = 'flex';
    console.log(e.target);
    return;
      }
    }



function closeModal(e) {
  if(e.target.classList.contains('close')) {
    modal.style.display ='none';
    modalBlock.style.display ='none';
  }
    return false;
}


gridSelect.addEventListener('click', openModal);

closeX.addEventListener('click', closeModal);
