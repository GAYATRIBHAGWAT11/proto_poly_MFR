let arrayOfObjects=[{name:'ekta', age:20},{name:'gayatri', age:19},{name:'aishwarya', age:11}];
let filterdArrayOFObjects=arrayOfObjects.filter((a)=>{
    return a.age>18  
})
console.log(filterdArrayOFObjects);