window.onload = () => {

    let keys = document.querySelectorAll('.key');
    let notesArray = ['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Si'];

    document.onkeydown = (key) => {
        if (key.key <= 7 && key.key >= 1) {
            let pressedKey = notesArray[key.key - 1]; //Almaceno la key
            playNote(pressedKey);
        }

        let div = Array.from(keys)[key.key - 1];
        div.classList.add('pressed');
    }

    document.onkeyup = () => {
        keys.forEach(function(key) {
            key.classList.remove('pressed');
        })
    }

    keys.forEach(function (key) {
        key.addEventListener('click', function () {
            let note = this.getAttribute('data-note');
            playNote(note);
        })
    })

    function playNote(note) {
        let audio = new Audio('notes/' + note + '.mp3');
        audio.play();
    }
}
