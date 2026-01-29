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





// let str="Hello Javascript World"
// console.log(str)
// console.log("length() :-",str.length)

// let trimText=str.trim();
// console.log("trim() :-", trimText)


// console.log("toUpperCase():-",str.toUpperCase())
// console.log("toLowerCase():-",str.toLowerCase())

// console.log("include() :-",str.includes("Javascript"))

// console.log("indexOf():-", str.indexOf("Hello"))

// console.log("Slice():-",str.slice(0,7))

// console.log("substring():-",str.substring(0,7))

// console.log("replace():-",str.replace("Javascript","Pvm"))

// let extraRext =" - hello js";
// console.log("Concat():-",str.concat(extraRext))

// console.log("Split():-",str.split(" "));

//length()
//push()    add into end
//pop()   
//unshift()  add into beggining
//shift()
//concat()
//include()
//indexOf()
//Splice()
//Slice()
//join()
//delete()
//map()
//filter()
//find()
//forEach()
//sort()
// reverse()
// flat()

// let arr=['one','two','three']
// console.log("Default Array :-",arr)

// console.log("length():-",arr.length)

// arr.push("new Element")

// console.log("Array After Push:-",arr)

// arr.pop();
// console.log("Array After Pop:-",arr)

// arr.unshift("First Element")
// console.log("array after unshift :-",arr)

// arr.shift();
// console.log("Array After Shift :-",arr)

// let newArr=["str 1","str 2"];
// let mixedArr=arr.concat(newArr);
// console.log("Default Array  :-",arr)
// console.log("Array after Concat:- ", mixedArr)


// console.log("include():-",arr.includes("three"))
// console.log("indexOf():-",arr.indexOf("three"))

// console.log("Slice():-",arr.slice(1,3))
// console.log("Splice():-",arr.splice(1,3))
// console.log("Old Array",arr)

// console.log("Join():-",arr.join(", "))
// delete arr[4]
// console.log(arr)


// console.log("Array iteration method :-")
// let number =[1,2,3,4,5]

// console.log("map() :-", number.map(num => num*2))
// console.log("after map old array:-",number)

// console.log("filter():-",number.filter(num =>num >2))
// console.log("After filter old array :-",number)

// console.log("ForEach():-")
// number.forEach(num => console.log(num))

// let num =[3,2,5,4,1]
// console.log("Sort():-",num.sort())
// console.log("Reverse():-",num.reverse())

// let nestedArray = [1,2,[3,4],[5,6]]
// console.log("Default nested array :-", nestedArray)
// let flatArray= nestedArray.flat()
// console.log("flatArray :-",flatArray)

//Array Destructuring 

// let array = [1,2,3,4,5]
// const [first,second,third]= array
// console.log(first)
// console.log(second)
// console.log(third)


//skipping Values 


// let array1 = [1,2,3,4]
// const [first, ,third] = array1
// console.log(first)
// console.log(third)

//rest operator//spread

const num1 =[1,2,3,4,5]
const [firt,second,...rest] =num1 
console.log(firt)
console.log(second)
console.log(rest)