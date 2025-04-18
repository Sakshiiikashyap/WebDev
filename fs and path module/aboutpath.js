import path from "path"
// console.log(path)

let myPath = "C:\\Users\\PWD EDU\\Desktop\\sakshi kashyap\\nodejs>"
console.log(path.extname(myPath)) //---> to get the extension name

console.log(path.dirname(myPath)) //---> to get directory name
console.log(path.basename(myPath)) //-->to get base name
console.log(path.join("c:/", "programs\\sakshi.txt")) //--> to join two paths