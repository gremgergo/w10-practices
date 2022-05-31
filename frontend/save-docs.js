setInterval(save, 3000); 

async function save() {
    const textarea = document.querySelector('#doc-text');
    const docText = textarea.vaule;  

    const saveText = document.querySelector('#save-in-progress-text');
    saveText.classList.remove('hidden');

    /* fetch:('https://127.0.0.1:9000/',{
        method: 'POST',
        body: docText
    }).then(function() {
        saveText.classList.add('hidden')
    }) */

    await fetch('https://127.0.0.1:9000/',{
        method: 'POST',
        body: docText
    });
    saveText.classList.add('hidden');
}
