var button1 = document.querySelector('button');
console.log(button1);

var titel = document.getElementById('notificatie');
console.log(titel);

function veranderFoto() {
    console.log('click');
    button1.classList.add("button");
    //hier ook de notificatie aanmaken
    titel.classList.add("doit");
}

button1.addEventListener('click', veranderFoto);


var saveButton = document.querySelectorAll('.save');
console.log(saveButton);

for (var opgeslagen of saveButton) {
    opgeslagen.addEventListener('click', saveFilm);
}

function saveFilm(e){
    var image = e.target;
    image.src = 'images/opgeslagen.png';
    console.log(image);
}
