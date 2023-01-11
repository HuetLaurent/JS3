//exercice 1

/*let num = [54, -31, 14, -77, 0, -35, -58, 66, -55, -78, 155, -2];

let triage = (a) => {
    let result = a.filter(a => a >= 0);
    console.log(result);
}

triage(num);*/

//exercice 2

/*let num2 = [2, 175, 18, 147, 55, 65, 17, 98, 64, 69, 147, 210, 178, 900, 651];

let multiple = (a, b) => {
    let result = a.filter(a => a%b == 0);
    console.log(result);
}

multiple(num2, 2);*/

//exercice 3

//method à utiliser : .filter / .includes / .toLowerCase / .toUpperCase

/*let films = ["Star Wars", "Star Trek", "Iron Man", "Ant Man", "Captain America", "Captain Planète"]
let recherche = prompt("saisisez un film de votre choix.");
recherche = recherche.toLowerCase();

let film = (a, b) => {
    let result = a.filter(a => a.toLowerCase().includes(b) == true);
    console.log(result);
}

film(films, recherche);

//exercice 4

let functionLVL17 = (a) => {
    for(let i = 0 ; i < a.length ; i++) {
        let map1 = a.map(x => x = a[i].length);
        console.log(a[i] + ` contient ` + map1[i] + ` caractères`);
    }
}

functionLVL17(films);*/

//(skip à l'exo 20)
//exercice 7

let num = [2, 7, 18, 65, 124];

const circle = (a) => {
    const map1 = a.map(a => 2 * Math.PI.toFixed(2) * a);
    const map2 = a.map(a => Math.PI.toFixed(2) * a * a);
    for(let i = 0 ; i < a.length ; i++) {
        console.log(`Radius : ${a[i]}`);
        console.log(`Circumference : ${map1[i]}`);
        console.log(`Surface : ${map2[i]}`);
    }
}

circle(num);

//exercice 8

let starWars = [{name : "Yoda", side : "light"}, {name : "Count Dooku", side : "dark"}, {name : "Obiwan Kenobi", side : "light"}, {name : "Mace Windu", side : "light"}, {name : "Darth Sidious", side : "dark"}, {name : "Darth Maul", side : "dark"}];


//exemple Objet

/*class Personne{

    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
    }

    DireBonjour(){
        console.log("Bonjour, je m'appelle " + this.nom + " " + this.prenom);
    }

}

class Walk extends Personne{
    
    constructor(nom, prenom, walk){
        super(nom, prenom);
        this.walk = walk;
    }

    isWalk(){
        super.DireBonjour();
        if(this.walk === true){
            console.log("et je marche");
        }else{
            console.log("et je marche pas");
        }
    }
}

let monNom = new Walk("Zazz", "Jul", true);
monNom.isWalk();

//exercice object 1 et 2

class Velo{

    constructor(nom, poids, couleur){
        this.nom = nom;
        this.poids = poids;
        this.couleur = couleur;
    }

    move(start, end){
        console.log(`Je me déplace de ${start} à ${end} avec mon ${this.nom} ${this.couleur}.`);
    }
}

class VeloElectrique extends Velo{

    constructor(nom, poids, couleur, puissance, vitesse){
        super(nom, poids, couleur);
        this.puissance = puissance;
        this.vitesse = vitesse;
    }

    move(start, end){
        console.log(`Je me déplace de ${start} à ${end} avec mon ${this.nom} ${this.couleur} à ${this.vitesse} km/h. Mon vélo fait ${this.puissance} Watt, c'est une bombe !`);
    }

}

let monVelo = new VeloElectrique("VTT", "13,2 kg", "noir", 255, 50);
monVelo.move("Montpellier", "Jacou");*/