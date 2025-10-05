const buttonToggle = document.getElementById('logo');

function TrocaArco() {
    const arcoColorido = document.getElementById('arco-externo');
    const cards = document.querySelectorAll('.cards-container');

    cards.forEach(card => {
        // alert(card.classList);
        card.classList.toggle('hidden');
        // alert(card.classList);
    })

    arcoColorido.classList.toggle('active-historia');
    arcoColorido.classList.toggle('active-respostas');

}
