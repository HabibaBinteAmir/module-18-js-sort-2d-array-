const reverse =[];
const number =[1,2,3,4,5];
for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
    reverse.unshift(number[i]);
}
console.log(reverse);


number.reverse();
console.log(number);

