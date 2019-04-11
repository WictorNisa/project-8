const imgHolder = document.querySelectorAll('.img-holder');
const textHolder = document.querySelectorAll('.text-holder');
const modalViewer = document.querySelectorAll('.modal-view');
const gridSelect = document.getElementById('grid-select');
const closeX = document.querySelector('#modal-text-container #close');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('#modal-text-container');

let people = [];
fetch('https://randomuser.me/api/?inc=name,picture,email,location,phone,dob&results=12')
  .then(response => response.json())
  .then (data => people = data.results)
  .then(data => generateCard(data))
  .then(data => generateModalInfo(data));

  function generateCard(people) {
    people.forEach((person, index) => {
   const avatarImg = person.picture.large;
   const firstName = person.name.first;
   const lastName = person.name.last;
   const email = person.email;
   const city = person.location.city;
   let nameHtml = `
   <div class="grid-contain" data-index="${index}" class="match">
     <div class="img-holder">
       <img src="${avatarImg}">
     </div>
     <div class="text-holder">
      <p class="avatar-name">${firstName} ${lastName}</p>
       <p class="avatar-email"> ${email}</p>
       <p class="avatar-city"> ${city}</p>
     </div>
   </div>`;
   gridSelect.innerHTML += nameHtml;
 });
 return people;
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
      <div class="modal-text">
        <img class="modal-avatar" src="${avatarImg}">
        <p>${firstName} ${lastName}</P>
        <p class="modal-border">${email}</p>
        <p>${cell}</p>
        <p>${street} ${state} ${city} ${postcode}</p>
        <p>Birthday: ${birthday}</p>
        <button class="close" id="close">Close!</button>
      </div>
      `;
        modalContainer.innerHTML += infoHtml;
  });
}

function openModal(e) {
  const modalText = modalContainer.querySelectorAll('.modal-text');
  const gridContain = e.target.closest('div.grid-contain');
  modalText.forEach(modal => {
   modal.style.display = 'none';
    });
  modal.style.display = 'flex';
  modalText[gridContain.getAttribute("data-index")].style.display = 'flex';
    return false;
}





function closeModal(e) {
  if(e.target.classList.contains('close')) {
    modal.style.display ='none';
  }
    return false;
}



gridSelect.addEventListener('click', openModal);

modal.addEventListener('click', closeModal);
