const colors = ["Blue", "Red", "Yellow"]
const colors2 = ["Black", "Green", "Orange"]
const newColors = [...colors,...colors2]

console.log(colors[0])
console.log(colors[1])
console.log(colors[2])
console.log(newColors)

const book = {
    author : "Marjin Haverbeke",
    title : "Eloquent Javascript",
    year: 2018
}

const book2 = {
    pages: 345,
    edition: "first",
    author: "beto"
}

const newBook = {...book,...book2}
console.log(newBook)