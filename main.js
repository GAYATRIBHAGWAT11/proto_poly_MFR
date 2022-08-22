var arr=[1,2,3,4,8,10];

arr.forEach((currentValue,index,arr)=>{
    // console.log(currentValue,index,arr);
})

Array.prototype.myForeach=function(callback){
    for(let index=0;index<this.length;index++){
        callback(this[index],index,this);
    }
}

arr.myForeach((currentValue)=>{
    console.log(currentValue+100);
})


// map function=>returning new array with modification

// Array.map(callback(currentValue,index,array))


Array.prototype.myMap=function(callback){
    let result=[];
    for(let index=0;index<this.length;index++){
        result.push(callback(this[index],index,this));
    }
}
let result=arr.map((item)=>{
    return item=item+1000;
})
console.log(result);

// filter function=>


// let result1=arr.filter((item)=>{
//     return item>8;
// })

// console.log(result1);

Array.prototype.myFilter=function(callback){
    let result=[];
    for(let index=0;index<this.length;index++){
        if(callback(this[index],index,this))
        {
            result.push(this[index]);
        }
    }
    return result
}
let resultFilter=arr.myFilter((item)=>{
    return item>5
})

console.log(resultFilter);


// reduce=>

// arr.reduce((acc,current,index,arr)=>{

// },initialValue)


// console.log(arr.reduce(curr,currentValue,index,arr)=>{
//     acc+current;
// },1);

Array.prototype.myReduce=function(callback,initialValue){
    let acc=initialValue;
    for(let index=0; index<this.length;index++){
       acc=callback(acc, this[index],index,this);
    }
    return acc;
}

console.log(arr.myReduce((acc,value,index,arr)=>acc+value,0))
