class SuperHeros {
    constructor(Logo,Heros,Photo,Lieu, SuperPouvoir, Identité, Equipe) {
        this.Logo = Logo;
        this.Heros = Heros;
        this.Photo = Photo;
        this.Lieu = Lieu;
        this.SuperPouvoir = SuperPouvoir;
        this.Identité = Identité;
        this.Equipe = Equipe;
        

    }
}




let ironMan = new SuperHeros("marvel.jpg","Iron Man","ironman.jpg","New-York", "Armure surpuissante", "Tony Stark", "Avengers",)
let SuperGirl = new SuperHeros("dc.jpg","Supergirl","supergirl.jpg","New-York", "Super forte", "Linda Lang", "Inconnu")
let spiderMan = new SuperHeros("marvel.jpg","SpiderMan","spiderman.jpg","New-York", "Araignée humaine", "Peter Parker", "Avengers")
let Batman = new SuperHeros("dc.jpg","Batman","batman.jpg","Gotham", "Super Gadgets", "Bruce Wayne", "League des justiciers")
let Cyclope = new SuperHeros("marvel.jpg","Cyclope","cyclope.jpg","New-York", "Super rayon", "Scott Summers", "X-Men")
let GreenLantern = new SuperHeros("dc.jpg","Green Lantern","greenlantern.jpg","New-York", "Aura vertes", "Jordan Hal", "League des justiciers")
let Hulk = new SuperHeros("marvel.jpg","Hulk","hulk.jpg","New-York", "Géant", "Robert Bruce Banner", "Avengers")

const heroes = [ironMan, SuperGirl, spiderMan, Batman, Cyclope, GreenLantern, Hulk]

let createElement = {
    createCard() {
        for (let i = 0; i < heroes.length; i++) {
            let card = document.createElement("div")
            card.classList.add("card")
            card.innerHTML = 
            `
             <img id="logo" src="images/${heroes[i].Logo}"  alt="Logo">
             <h2>${heroes[i].Heros}</h2>
             <img src="images/${heroes[i].Photo}"  alt="Photo Héros">
             <ul>
             <li>${heroes[i].Lieu}</li>
             <li>${heroes[i].SuperPouvoir}</li>
             <li>${heroes[i].Identité}</li>
             <li>${heroes[i].Equipe}</li>
             </ul>


            `

           infos.appendChild(card)
    }
}}

infos.appendChild(createElement.createCard())