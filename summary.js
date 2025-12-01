const books =["physics","javascript","css","math"];
console.log(books);

for (let i = 0; i < books.length; i++) {
    console.log(books[i]); 
}

let new_arr =books.reverse();
let sort_arr = books.toSorted();
console.log(new_arr);
console.log(sort_arr);
