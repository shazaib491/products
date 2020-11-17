const students=[
    {
        name:"naman",
        rollno:"12345",
        fees:5000
    },
    {
        name:"aman",
        rollno:"123456",
        fees:6000
    },
]

function enrollStudent(student){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var error=true;
            if(error){
                console.log('data inserted')
                resolve();
            students.push(student)
            }
            else
            {
                reject('sommthing is wrong');
            }

            },5000)
    })

}
function getStudent(){
setTimeout(()=>{
    let str="";
    students.forEach((student)=>{
        str+=`name is :-${student.name}\n rollno is ${student.rollno}\n Fees is :-${student.fees}`
    })
    console.log(str);
 
},1000)

}

const student={
    name:"naveen",
    rollno:"12347",
    fees:7000
};
enrollStudent(student)
.then(getStudent)
.catch((error)=>{
    console.log(error)
})