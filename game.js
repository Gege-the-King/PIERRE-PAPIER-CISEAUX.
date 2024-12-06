const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultat = document.getElementById('resultat');

const scoreUtilisateurSpan = document.getElementById('score-utilisateur');
const scoreOrdinateurSpan = document.getElementById('score-ordinateur');
const scoreEgaliteSpan = document.getElementById('score-egalite');

const choixPossibles = document.querySelectorAll('.choix.jeu button'); // Boutons Pierre, Papier, Ciseaux
const boutonRejouer = document.getElementById('rejouer'); // Bouton Rejouer

let choixUtilisateur;
let choixOrdinateur;
let resultat;

// Variables de score
let scoreUtilisateur = 0;
let scoreOrdinateur = 0;
let scoreEgalite = 0;

// Événement "click sur les boutons Pierre, Papier, Ciseaux"
choixPossibles.forEach(choixPossible => 
    choixPossible.addEventListener('click', (e) => {
        // Récupération de l'ID du bouton cliqué
        choixUtilisateur = e.target.id;
        // Ajout de l'image correspondant au choix
        contenantChoixUtilisateur.innerHTML = `<img src="${choixUtilisateur}.png">`;
        generer_choix_ordinateur();
        verification();
        mettreAJourScores();
    })
);

// Fonction pour générer le choix de l'ordinateur
function generer_choix_ordinateur() {
    const random = Math.floor(Math.random() * 3) + 1; // Génère un nombre entre 1 et 3
    if (random === 1) choixOrdinateur = "pierre";
    if (random === 2) choixOrdinateur = "papier";
    if (random === 3) choixOrdinateur = "ciseaux";

    // Ajout de l'image correspondant au choix
    contenantChoixOrdinateur.innerHTML = `<img src="${choixOrdinateur}.png">`;
}

// Fonction pour vérifier si l'utilisateur a gagné ou perdu
function verification() {
    if (choixUtilisateur === choixOrdinateur) {
        resultat = "Égalité";
        // En cas d'égalité, les scores ne changent pas
    } else if (
        (choixUtilisateur === "pierre" && choixOrdinateur === "ciseaux") ||
        (choixUtilisateur === "papier" && choixOrdinateur === "pierre") ||
        (choixUtilisateur === "ciseaux" && choixOrdinateur === "papier")
    ) {
        resultat = "Vous avez Gagné";
        scoreUtilisateur += 1; // Le score de l'utilisateur augmente de 1
    } else {
        resultat = "Vous avez Perdu";
        scoreOrdinateur += 1; // Le score de l'ordinateur augmente de 1
    }

    contenantResultat.innerHTML = resultat;
    mettreAJourScores(); // Mettre à jour les scores affichés
}


// Mettre à jour les scores affichés
function mettreAJourScores() {
    scoreUtilisateurSpan.textContent = scoreUtilisateur;
    scoreOrdinateurSpan.textContent = scoreOrdinateur;
    scoreEgaliteSpan.textContent = scoreEgalite;
}

// Réinitialiser le jeu avec le bouton rejouer
boutonRejouer.addEventListener('click', () => {
    choixUtilisateur = "";
    choixOrdinateur = "";
    resultat = "";

    // Réinitialisation des scores
    scoreUtilisateur = 0;
    scoreOrdinateur = 0;
    scoreEgalite = 0;

    // Réinitialisation des contenus
    contenantChoixUtilisateur.innerHTML = "";
    contenantChoixOrdinateur.innerHTML = "";

    // Mise à jour des scores affichés
    mettreAJourScores();
});

