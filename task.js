//Task 1
//Write a JavaScript code to reverse the array colors without using the reverse method.
const reversed =[];

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
 for (let i = 0; i < colors.length; i++) {
    reversed.unshift(colors[i]);
    
 }
 console.log(reversed);
 //Task 2
 //Write a JavaScript code to get the even numbers from an array using any looping technique.


const numbers = [12, 98, 5, 41, 23, 78, 46];
 
for (let j = 0; j < numbers.length; j++) {
    if (numbers[j]%2==0) {
        console.log(numbers[j]);
        
    }
    
}
//Task 3
//Use a for...of loop to concatenate all the elements of an array into a single string.

//  var Numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// for(const contact of Numbers){
    
// }

//Output:

//'TomTimTinTik'


 const arr =[1,2,3];
 const copy_arr=[];
for(const pro of arr ){
    copy_arr.push(pro);
} 
copy_arr[0]=99;
console.log(copy_arr);

