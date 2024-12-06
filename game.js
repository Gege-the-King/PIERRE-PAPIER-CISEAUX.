const contenantChoixOrdinateur = document.getElementById('choix-ordinateur')
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur')
const contenantResultat = document.getElementById('resultat')

const choixPossibles = document.querySelectorAll('button')
let choixUtilisateur
let choixOrdinateur
let resultat

// Evenement "click sur les bouttons"

choixPossibles.forEach(choixPossible => choixPossible.addEventListener ('click', (e) =>{
    // Récupération de l'ID du boutton cliqué
    choixUtilisateur = e.target.id ;
    // On ajoute l'image qui correspond au choix
    contenantChoixUtilisateur.innerHTML =`<img src ="${choixUtilisateur}.png">`
    generer_choix_ordinateur ()
    verification ()
})
);


//fonction pour génerer les choix de l'ordinateur
function generer_choix_ordinateur() {
    random = Math.floor(Math.random() *3) +1 // Génère des nombres compris entre 1 et 3
    if (random === 1) { // random = à 1
        choixOrdinateur = "pierre"

    }
    if (random === 2) { // random = à 2
        choixOrdinateur = "papier"

    }
    if (random ===3) { // random = à 3
       choixOrdinateur = "ciseaux"
    }
    // On ajoute l'image qui correspond au choix
    contenantChoixOrdinateur.innerHTML =`<img src ="${choixOrdinateur}.png">`
}

//fonction pour vérifier si  l'utilisateur a gagné ou perdu
function verification (){
    if(choixUtilisateur == choixOrdinateur){
        resultat = "Egalité"
    }
    // Quand le joueur perd
    if(choixUtilisateur== "pierre" && choixOrdinateur == "papier" ){
        resultat = "Vous avez Perdu"
    }
    if(choixUtilisateur== "papier" && choixOrdinateur == "ciseaux" ){
        resultat = "Vous avez Perdu"
    }
    if(choixUtilisateur== "ciseaux" && choixOrdinateur == "pierre" ){
        resultat = "Vous avez Perdu"
    }
    // Quand le joueur gagne
    if(choixUtilisateur== "papier" && choixOrdinateur == "pierre" ){
        resultat = "Vous avez Gagné"
    }
    if(choixUtilisateur== "ciseaux" && choixOrdinateur == "papier" ){
        resultat = "Vous avez Gagné"
    }
    if(choixUtilisateur== "pierre" && choixOrdinateur == "ciseaux" ){
        resultat = "Vous avez Gagné"
    }
    contenantResultat.innerHTML = resultat
}