const _ = require('lodash')
// let person  = {
//     name : 'lulu',
//     age:20,
//     sayName:function(v){
//         let self = this;
        
//         console.log(self.name +'\t'+ self.age + '\t' + v )
//     }
// }

// let person1 = {
//     name : 'mike',
//     age: 19
// }


// person.sayName.call(person1,'really') //
// person.sayName.apply(person,['no'])//参数是数组
// person.sayName.bind(person1)('yes')//直接返回函数，再执行

// let array = [1,2,4,5,6,8,9,0,33]
// console.log(Math.max(array))
// console.log(Number(array))
// console.log(Math.max.apply(null,array))
// console.log(Math)

// let a = 1;
// let b = 2;
// let test = function(first,second){
//     return first === a && second === b 
// }
// console.log(test)
// function fakeCall(fun){
//     var args = [];
//     for(var i =1 ; i <arguments.length;i++){
//         args.push(arguments[i]);
//         console.log(args)
//     }
//     return fun.apply(null,args);
//     // return fun.apply(this.args)
// }
// fakeCall(test,a,b);
// (function(){
    
//     if(arguments.push) arguments.push('test')
//     console.log([] instanceof Array)
//     console.log(arguments instanceof Array)
// })()
// let obj1 = {
//     name : 'mike',
//     age : 28,
//     obj:{
//         a:1
//     },
//     func:function(){
//         console.log(1)
//     }
// }


// // let obj2 = JSON.parse(JSON.stringify(obj1));
// // obj2.age = 18
// // obj2.obj.a = 3
// // console.log(obj1);
// // console.log(obj2)


// let obj2 = Object.assign({},obj1);

// // obj2.obj.a = 1 ;
// // obj2.obj = {b:3} ;
// // obj2.obj.a = {b:3} ;
// obj2.func = function(){
//     console.log(2);
// }
// console.log(obj1);
// console.log(obj2);
// obj1.func()
// obj2.func()
// let obj1 = {
//     name : 'mike',
//     age : 28,
//     obj:{
//         a:1
//     },
//     func:function(){
//         console.log(1)
//     }
// }

// let obj2 = _.cloneDeep(obj1);

// obj2.age = 18
// obj2.obj.a = 3
// console.log(obj1)
// console.log(obj2)
// obj2.func = function(){
//     console.log(2);
// }
// obj1.func()
// obj2.func()

let a = 1;
let b = 2;
let test = function(i , j ){
    return i === 1  && j ===2 
}


function fakeCall(func){
    let array = [];
    for(let i = 1 ; i < arguments.length;i ++){
        array.push (arguments[i])
        console.log (array)
    }
    return func(null,array)
}
console.log(fakeCall(test,a,b))


