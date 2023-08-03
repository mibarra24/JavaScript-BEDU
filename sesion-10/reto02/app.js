const modal = document.getElementById("modal");

const button = document.getElementsByTagName('button')[0];
const modalImage = document.getElementById("modal-image");
const close = document.getElementsByClassName("close")[0];

button.addEventListener('click', function() {
  modal.style.display = "block";
  modalImage.src = 'https://picsum.photos/300/200';
})

close.addEventListener('click', function() {
  modal.style.display = "none";
})