function addOne(valor){
    return new Promise(resolve => {
        setTimeout(() => resolve(valor + 1), 500)
    })
}

addOne(1)
 .then(result => {
    console.log(result) //2
    return addOne(result)
 })
 .then(result => {
    console.log(result) //3
    return addOne(result)
 })
 .then(result => {
    console.log(result) //4
    return Promise.reject("Opps")
 })
 .then(result => console.log("Holaaaaaaa"))
 .catch(error => {
    console.log(error)
 })