import fs from "fs/promises"

let a = await fs.readFile("sakshi.txt")

let b = await fs.appendFile("sakshi.txt", "\n\n\n\nShe is amazing!")
console.log(a.toString(), b)

// .toString() --> covert binary data(buffer) into readable string!