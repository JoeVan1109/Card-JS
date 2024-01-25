let button = document.querySelector('.button');
let submit = document.querySelector('.submit');
let blocBouton = document.querySelector('.bloc-button');
let card2 = document.querySelector('.card-2');

let resultat = ""
let buttonClicked = false;


//--------------------------------------------------------------------------



blocBouton.addEventListener('click', (e) => {

    // Vérifier si l'élément cliqué est un bouton avec la classe 'button'
    if (e.target.classList.contains('button')) {
        // Le bouton 'button' est cliqué
        buttonClicked = true;
        resultat = e.target.value;
        
    }

    if (e.target.classList.contains('submit') && buttonClicked) {
        // Les deux boutons 'button' et 'submit' sont cliqués l'un à la suite de l'autre
        card2.style.visibility = "visible";

        
        let reponseContainer = document.getElementById('result');
        // Utilisez la valeur du bouton dans votre message
        reponseContainer.innerHTML = `
            <p>You selected ${resultat} out of 5</p>
        `;
        reponseContainer.classList.add('reponse');
    }
});

