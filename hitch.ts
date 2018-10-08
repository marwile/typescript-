declare function require(name:string);

var fs = require('fs');

//class
class FilePublisher {
   
    filename:string;

    constructor(name:string){
        this.filename = name;
    }
  


//method 
showText(): void {
    fs.readFile(this.filename, 'utf8', function(err, data){
        if (err) throw err;
     

//clean up the data
let reg:RegExp = /\W+/g;
let clean =data.split(reg);

//console.log(clean);

//counting words 
        let count = {};
        for( let i of clean){
            if(count[i] != undefined){
                count[i] = count[i]+1;
            } else{
                count[i] = 1;
            }
        //  console.log(i+" : "+count[i]);
        }
    //    console.log(count);

//sorted array
let unsorted = count;
let sorted =[];

//assoc array
for (let key in unsorted) 
sorted.push([key, unsorted[key]]);

//display unsorted
//console.log(sorted);

sorted.sort(function (a, b) {
//   console.log(a+" - "+b);
    return a[1] - b[1];

});
sorted.reverse();
//10 most common
console.log(sorted.slice(0,10));

    });
}

}
//instantsiate class to object
let obj = new FilePublisher("hitch.txt");
console.log(obj.showText());







