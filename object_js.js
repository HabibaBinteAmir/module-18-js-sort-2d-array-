const numders =[1,2,3,4,5];
const players =[{},{},{}];
const employees =[
   { Name :'ashik', designation: 'content writer' ,salary:'25000' },
   { Name :'anik', designation: 'developer ' ,salary:'25000' },
   { Name :'anik', designation: 'data sciences' ,salary:'25000' },
];
console.log(employees[0]); 

for(const emp of employees){
    const person =emp;
    const personInfo = person.Name+ " " + ":" + " " +person.designation;
    console.log(personInfo); 
}

