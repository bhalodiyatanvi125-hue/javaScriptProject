//string methods 
//length()
//trim()
//toUpperCase()
//toLowerCase()
//includes()
//indexof()
//slice()                 minus value allow kare
//substring()
//replace()
//concat()
//spilit()




let str="Hello Javascript World"
console.log(str)
console.log("length() :-",str.length)

let trimText=str.trim();
console.log("trim() :-", trimText)


console.log("toUpperCase():-",str.toUpperCase())
console.log("toLowerCase():-",str.toLowerCase())

console.log("include() :-",str.includes("Javascript"))

console.log("indexOf():-", str.indexOf("Hello"))

console.log("Slice():-",str.slice(0,7))

console.log("substring():-",str.substring(0,7))

console.log("replace():-",str.replace("Javascript","Pvm"))

let extraRext =" - hello js";
console.log("Concat():-",str.concat(extraRext))

console.log("Split():-",str.split(" "));