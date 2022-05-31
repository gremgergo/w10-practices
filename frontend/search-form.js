const googleSearchButton = document.querySelector('#btn-google-search');

googleSearchButton.addEventListener('click', function(event){
    event.preventDefault();

    const form = document.querySelector('#form-google-search');
    const searchTerm = form.querySelector('input[name="q"]').value;

    if(searchTerm === '') {
        alert('Irj mar be valamit!!');
    } else {
        form.submit();
    }
});
