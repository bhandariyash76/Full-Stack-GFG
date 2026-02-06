// spread property

let arr = [1,2,3,4]
let arr1 = [...arr]

console.log(arr)
console.log(arr1)

arr.push(5)
console.log(arr)
console.log(arr1)

//for loop
let arr2 = []
for(let number of arr){
    arr2.push(number)
}

console.log(arr)
console.log(arr2)

arr.pop()

console.log(arr)
console.log(arr2)

// using array.from

let arr3 = Array.from(arr)

console.log(arr)
console.log(arr3)

arr.push(6)

console.log(arr)
console.log(arr3)

//using concat

let arr4 = arr.concat()

console.log(arr)
console.log(arr4)