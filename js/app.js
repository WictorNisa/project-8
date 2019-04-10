const imgHolder = document.querySelectorAll('.img-holder');
const textHolder = document.querySelectorAll('.text-holder');
// const modalView = document.querySelectorAll('.modal-view');
const modalViewer = document.querySelectorAll('.modal-view');
const gridSelect = document.getElementById('grid-select');
const closeX = document.getElementById('close');
// const modalBlock = document.querySelector('.modal-block');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('#modal-text-container');

let people = [];
fetch('https://randomuser.me/api/?inc=name,picture,email,location,phone,dob&results=12')
  .then(response => response.json())
  .then (data => people = data.results)
  .then(data => generateCard(data))
  .then(data => generateModalInfo(data));

  function generateModalInfo(data) {
  people.forEach((person, index)) => {
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
      <div class="modal-text">
        <img class="modal-avatar" src="${avatarImg}">
        <p>${firstName} ${lastName}</P>
        <p>${email}</p>
        <p>${cell}</p>
        <p>${street} ${state} ${city} ${postcode}</p>
        <p>Birthday: ${birthday}</p>
      </div>
      `;
        modalContainer.innerHTML += infoHtml;
  }
}

function generateModalInfo(data) {
  people.forEach((person, index)) => {
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
      <div class="modal-text">
        <img class="modal-avatar" src="${avatarImg}">
        <p>${firstName} ${lastName}</P>
        <p>${email}</p>
        <p>${cell}</p>
        <p>${street} ${state} ${city} ${postcode}</p>
        <p>Birthday: ${birthday}</p>
      </div>
      `;
        modalContainer.innerHTML += infoHtml;
  }
}

function openModal(e) {
  const modalText = modalContainer.querySelectorAll('.modal-text');
  const gridContain = e.target.closest('div.grid-contain');
  if(gridContain){
    modal.style.display = 'flex';
    console.log(gridContain.getAttribute('data-index'));
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
