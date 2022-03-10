
//******************************************************************
//*qui metto la gestione dell'inserimento del file e della visualizzazione della foto in anteprima
//! questa è la soluzione di #CodingNepal
const defaultInput = document.getElementById("default_input");
const customInput = document.getElementById("custom_input");
const image = document.querySelector("img.preview");

function correctButton(){
    defaultInput.click();
}

function removeImage(){
    image.src = "";
}

//ascolto quando cambia l'input
defaultInput.addEventListener("change", function(){
    //recupero il file inserito dentro l'input
    const file = this.files[0];    

    if(file){

        //creo una nuova istanza del file reader
        const reader = new FileReader();
        
        //"the load event is fired when a file has benn read succesfully"
        reader.onload = function(){
            //recupero il risultato della lettura 
            const result = reader.result;
            //associo all'"src" dell'immagine il risultato
            image.src = result;        
        }
        //questo permette al browser di leggere l'immagine come URL,
        //è solo questo che fa vedere l'immagine come anteprima
        reader.readAsDataURL(file);
    }
})

//******************************************************************
//*qui metto i controlli per gli input range
const grayscaleInput = document.querySelector("#grayscale");
grayscaleInput.addEventListener("change", function(){    
    image.style.filter += `grayscale(${grayscaleInput.value}%)`;
});

const saturateInput = document.querySelector("#saturate");
saturateInput.addEventListener("change", function(){
    image.style.filter += `saturate(${saturateInput.value}%)`;
});

const sepiaInput = document.querySelector("#sepia");
sepiaInput.addEventListener("change", function(){
    image.style.filter += `sepia(${sepiaInput.value}%)`;
});

const invertInput = document.querySelector("#invert");
invertInput.addEventListener("change", function(){
    image.style.filter += `invert(${invertInput.value}%)`;
});

const contrastInput = document.querySelector("#contrast");
contrastInput.addEventListener("change", function(){
    image.style.filter += `contrast(${contrastInput.value}%)`;
});

const brightnessInput = document.querySelector("#brightness");
brightnessInput.addEventListener("change", function(){
    image.style.filter += `brightness(${brightnessInput.value}%)`;
});

const blurInput = document.querySelector("#blur");
blurInput.addEventListener("change", function(){
    image.style.filter += `blur(${blurInput.value}px)`;
});

const hueRotateInput = document.querySelector("#hue_rotate");
hueRotateInput.addEventListener("change", function(){
    image.style.filter += `hue-rotate(${hueRotateInput.value}deg)`;
});
//! qui dentro c'è la soluzione di developer mozzilla
/* 
    const fileInput = document.querySelector('input[type="file"]');
    const preview = document.querySelector('img.preview');
    const reader = new FileReader();

    function handleEvent(event) {
        if (event.type === "load") {
            preview.src = reader.result;
        }
    }

    function addListeners(reader) {
        reader.addEventListener('load', handleEvent);
    }

    function handleSelected(e) {
        const selectedFile = fileInput.files[0];
        if (selectedFile) {
            addListeners(reader);
            reader.readAsDataURL(selectedFile);
        }
    }

    fileInput.addEventListener('change', handleSelected);
*/


