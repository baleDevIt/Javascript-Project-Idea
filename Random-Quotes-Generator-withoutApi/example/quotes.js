const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn")
let citationOld;
const db = [
    {
        author: 'Lorem',
        quote:  'Aute tempor sint in est incididunt velit incididunt.'
    },
    {
        author: 'Ipsum',
        quote: 'Nostrud irure sint aliquip duis pariatur reprehenderit officia amet eiusmod.'
    },
    {
        author: 'Dolor',
        quote: 'Eiusmod aliquip deserunt minim labore eu sunt cupidatat.'
    },
    {
        author: 'Minim',
        quote:  'Cillum qui qui minim et nisi culpa nulla eu dolor reprehenderit proident ut consectetur.'
    },
    {
        author: 'Cupidatat',
        quote: 'Adipisicing pariatur amet ullamco exercitation exercitation pariatur non aliquip duis.'
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