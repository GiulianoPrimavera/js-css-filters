
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
    location.reload();
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

//recupero tutti gli input
const filterControls = document.querySelectorAll("input[type=range]");
function applyFilter(){
    //creo una variabile per i filtri aggiunti
    let computedFilters = "";

    //per ogni filtro aggiunto (al cambiamento di un singolo), lo aggiungo ai coomputed filters
    filterControls.forEach(element => {
        computedFilters += element.getAttribute("data-filter") + "(" + element.value + element.getAttribute("data-scale") + ") ";
        //aggiungo tutti i computed filters allo stile della immagine
        image.style.filter = computedFilters;
    })
}

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


