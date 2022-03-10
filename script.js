let input = document.getElementById("input");

input.addEventListener("change", function(){
    const file = this.files[0];    
    
    const reader = new FileReader();

    console.log(reader.result);

    // reader.onload = function(){
        
    // }
})
//qui dentro c'è la soluzione di developer mozzilla
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