//! questa è la soluzione di #CodingNepal
const input = document.getElementById("input");
const image = document.querySelector("img.preview");

//ascolto quando cambia l'input
input.addEventListener("change", function(){
    //recupero il file inserito dentro l'input
    const file = this.files[0];    

    if(file){

        //creo una nuova istanza del file reader
        const reader = new FileReader();
        
        //
        reader.onload = function(){
            const result = reader.result;
            image.src = result;        
        }
        reader.readAsDataURL(file);
    }

    
})
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
        reader.addEventListener('loadstart', handleEvent);
        reader.addEventListener('load', handleEvent);
        reader.addEventListener('loadend', handleEvent);
        reader.addEventListener('progress', handleEvent);
        reader.addEventListener('error', handleEvent);
        reader.addEventListener('abort', handleEvent);
    }

    function handleSelected(e) {
        eventLog.textContent = '';
        const selectedFile = fileInput.files[0];
        if (selectedFile) {
            addListeners(reader);
            reader.readAsDataURL(selectedFile);
        }
    }

    fileInput.addEventListener('change', handleSelected);
 */