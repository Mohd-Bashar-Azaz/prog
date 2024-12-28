// let n=prompt("enter a no");
// if (n%5===0){
//     console.log("n is multiple of 5:",n);
// }
// else{
//     console.log("n is not a multiple of 5:",n);
// }

// let score=prompt("enter your score:");
// if (score>=60 && score<=69){
//     console.log("C");
// }
// else if (score>=80 && score<=100){
//     console.log("A");
// }

//.....................FOR LOOP.....................................................
// for (let i=1;i<=5;i++){
//     console.log("bashar azaz");
// }
// let s=0;
// for(let i=1;i<=5;i++){
//     s+=i;
// }
// console.log("sum=",s);
//................WHILE LOOP...........................................
//  let i=20;
//  while(i<=20){
//     console.log(i);
//     i++;
//  }

//...........DO WHILE LOOP............................................
// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=5);

//...............FOR OF LOOP.....used in string and array......................................
// str="apna college";
// let s=0;
// for(let i of str){
//     console.log(i);
//     s++;


// }
// console.log(s);
//......FOR [IN]LOOP......................................
// let stu={
//     name:"bashar",
//     age:12,
//     cgpa:2.5,
//     isPass:true,

// };

// for(let key in stu ){
//     console.log(key,stu[key]);
// }
//.........EVEN NO PRINT..............................................
// for(let i=0;i<=100;i++){
// if (i%2===0){ 
//     console.log(i);  
// }
// }
//.................................game guess the number...........................
//  let gn=25;
//  let un=prompt("guess the number:");
//  while(un!=gn){
//     un=prompt("you entered wring no,gues again!!!");

       
//  }
//  console.log("CONGRATULATIONS you entered the right number!!!")

//................string in js............................................
// let str="bashar";
// console.log(str[]);
// let s=`this is a template literal`//use of backticks[str+varables]
// console.log(s);
// console.log(typeof s);
// let o={
//     item:"pen",
//     price:10,
// };

// let ou=`the cost of ${1+2+3} is ${o.price } rupees`;
// console.log(ou);
//....................................................................
// let o="Bashar";
// u=" azaz"

// console.log(o.replace("as","13"));
//............................................................
// u=prompt("enter username:");
// s="@"+u+u.length;
// console.log(s);
// ................................ARRAYS IN JS...............................
// let marks=["96","32","56",78,97];// iteration of arrays 
// for (let i=0;i<marks.length;i++){
//     console.log(marks[i]);

// }
//...........using for - of loop...........................
// let marks=["96","32","56",78,97];
// for (let i of marks){
//     console.log(i);
// }
//.....question.......................................
// m=[85,97,44,37,76,60];
// l=m.length;
// s=0;
// for(let i of m){
//     s+=i;
// }
// r=s/l;
// console.log(r);
//.......question2.........................................
// p=[250,645,300,900,50];

// let i=0;
// for( let a of p){
//     let o=a/10;
//     p[i]=p[i]-o;
//     console.log(`value after offer ${p[i]}`);
//     i++;
// }

//........same above q using for loop.................................................
// p=[250,645,300,900,50];
// for(let i=0;i<p.length;i++){
//     let offer=p[i]/10;
//     p[i]-=offer;
    
// }
// console.log(p);
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//Push()-add to end\\\\\\\\\\\\\\\\\\\\\\\\\
//Pop()-delete from end and return\\\\\\\\\\
//toString()-convers array to string\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// let a=["potato","ginger"];
// let k=a.unshift("nasar");
// // let a=["bashar","azaz"];
// // b=fItems.concat(a);
// console.log(a);
// console.log(k);
//.................................................
// comp=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

// console.log(comp);
// //.............................................................
// function x() {
//     console.log("welcome to tech bshar:");
//     console.log("we are learning");
    
// }
//.......................................................
// function k(m,n){
//     s=m+n;
//     return s;

// }
// console.log(k(2,5));
//.............arrow functions.........................
// const mul=(a,b)=>{
//     return a*b;
// } 
//function that return th no of vowels in a inputted string..
// function v(str1) {
//     let c=0;

    
//     for (let i=0;i<str1.length;i++){
//         if ( ['A','E','I','O','U','a','e','i','o','u'].includes(str1[i] )){
//             c++;
    
//         }
        
//     }
//     return c;
// }
//............................PERFORM ABOVE USING ARROW FUNCTION .....................................
// const vowels=(str)=>{
//     let c=0;

    
//     for (let i=0;i<str.length;i++){
//         if ( ['A','E','I','O','U','a','e','i','o','u'].includes(str[i] )){
//             c++;
    
//         }
        
//     }
//     return c;
// }

//..............arr.forEach(callback function).....................................
// let a=["bashar","azaz","nasar"];
// a.forEach(function printVal(val,i){
//     console.log(val.toUpperCase(),i);

// });
//...........same using..arrow function..................
// let a=["bashar","azaz","nasar"];
// a.forEach((val,i)=>{
//     console.log(val.toUpperCase(),i,a)
// })
//.....to print the square of each value using  the for each loop....................................................
// let b=[1,2,3,4,5,6,7,8,9,];
// b.forEach((k)=>{
//     console.log(k*k);
// });
// ...............OR.............................................
// let b=[1,2,3,4,5,6,7,8,9];
// calcsq=(k)=>{
//     console.log(k*k);
// }
// b.forEach(calcsq);
//.............using map function to print all values........................................
// let b=[1,2,3,4,5,6,7,8,9];
// b.map((val)=>{
//     console.log(val);
// });
// .. .to print a new arrray with val*2
// let b=[1,2,3,4,5,6,7,8,9];
// c=b.map((val)=>{
//     return val*2;
// });
// console.log(c);
//...........using filter function in array............................................
// let a=[1,2,3,4,5,6,7,8,9];
// even_a=a.filter((val)=>{
//     return val%2===0;
// });
// console.log(even_a);
//... using reduce function.....
//..........to add the arr and find the sum...
// let a1=[1,2,3,4];
// const out=a1.reduce((res,cur)=>{
//     return res+cur;
// });
// console.log(out);
//,.........to print max value...........
// let a1=[5,3,6];
// const out=a1.reduce((res,cur)=>{
//     return res>cur? res:cur;
// });
// console.log(out);
//......... filter out the marks of students that scored 90+..............................................
// let a=[87,93,64,99,86];
// let k=a.filter((val)=>{
//     return val>=90;
// });
// console.log(k);
//take a no n as input from user , create an array of numbers from 1 to n..
// also calculate the sum
// let n=prompt("enter the no of elt in array:");
// let a=[];
// for (let i=1;i<=n;i++){
//     a[i-1]=i;
// }
// console.log(a);
// //.......................
// k=a.reduce((r,c)=>{
//     return r+c;
// });
// console.log("sum=",k);
// //.......also....product.........................
// p=a.reduce((r,c)=>{
//     return r*c;
// });
// console.log("factorial:",p);
//.....................................................
console.log("javascript");