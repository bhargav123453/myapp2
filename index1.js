const students = [{ name: "Adhi", gender: "male" },
{ name: "Ahamed", gender: "male" },{ name: "Rutika Kadam", gender: "female" },
{ name: "Priyadharsini", gender: "female" }];
//Task 1: find all female name
console.log(students.filter(name1=>name1.gender=="female").map(name1=>name1.name))
//Task 2: Starting with 'A'
console.log(students.filter(name1=>name1.name[0]=="A").map(name1=>name1.name))
//Task 3: Count the no. of males
function result(names){
    count=0
    for(i=0;i<names.length;i++)
    {
        
        if (names[i].gender=="male")
        {
            count=count+1
        }
    }
    console.log(count)

}
result(students)