var x=[1,2,3,4] // array 
x.push(52,65,38);// insert the value 
console.log(x);
x.unshift(96);//insert the front  element 
console.log(x);
x.pop();//delete d end element
console.log(x);
x.shift();// delete the front elements
console.log(x);
var y=["reshu","yogi","mona"]
y.join("-");// join d element wid 
console.log(y);
y.concat(x);//cocate d string 
//y.indexOf("reshu");
console.log(y.indexOf("reshu"));







// var x=[1,2,3,4]
// for(i=0;i<x.length;i++)
// {
//     console.log(x[i]);
//     document.write("all d arrayelement displays");    
//}

var fruit = ["mango","stobery","per","apple"];
var search;
while(true){
    search = prompt("type 'quit'to exit search the loop..to  get the  'list' of fruit name...type fruit name to search the list");
    if(search.toLowerCase() ==='quit') {
        break;
}
else if(search.toLowerCase() === 'list'){
    var list = fruit.join(",");
    document.write(list);
}
else if(fruit.indexOf(search) > -1){
    document.write(`${search}search is avaible`) ;
}
 else {
     document.write(`${search} search not avaible`);
    }
}







