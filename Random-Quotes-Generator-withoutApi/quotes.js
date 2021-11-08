const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn")
let citationOld;
const db = [
    {
        author: 'Anna Frank',
        quote:  'Come è meraviglioso che non vi sia nessun bisogno di aspettare un singolo attimo prima di iniziare a migliorare il mondo.'
    },
    {
        author: 'Tarun Tejpal',
        quote: 'Due cose ci salvano nella vita: amare e ridere. Se ne avete una va bene. Se le avete tutte e due siete invincibili.'
    },
    {
        author: 'Henri Ford',
        quote: 'Quando tutto sembra andarti contro, ricorda che l’aereo decolla controvento, non col vento a favore.'
    },
    {
        author: 'Dal film Into the wild',
        quote:  'La felicità è reale solo quand’è condivisa.'
    },
    {
        author: 'Charles Bukowski',
        quote: 'La gente è il più grande spettacolo del mondo. E non si paga il biglietto.'
    }
]

function getRandomIndex(){
    return Math.round(Math.random() * (db.length-1))
}

btn.addEventListener('click', () => {
    citationIndex = getRandomIndex();
    while(citationIndex === citationOld){
        citationIndex = getRandomIndex()
    }

    author.innerText = db[citationIndex].author;
    quote.innerText = db[citationIndex].quote;
    citationOld = citationIndex;
})