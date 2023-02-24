let a = prompt("enter any key you want to set")
let b = prompt("enter any value you want to set")

localStorage.setItem(a,b)
console.log(`the value at ${a} is ${localStorage.getItem(a)}`)

// if(a == "red" || a == "blue")
// localStorage.removeItem(a)

// if(a == 0)
// localStorage.clear(a)