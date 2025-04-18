const fs = require("fs")
// console.log(fs)

console.log("starting")
// fs.writeFileSync("sakshi.txt", "Sakshi is a good girl")

fs.writeFile("sakshi2.txt", "sakshi is mad", ()=>{
    console.log("done")
    fs.readFile("sakshi2.txt", (error, data) => {
        console.log(error, data.toString())
    })
})

fs.appendFile("sakshi.txt", "sakshirobo", (e,d) =>{
    console.log(d)
})
console.log("ënding")
