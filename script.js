
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


