// callback function

students=[
{name:"naman",rollno:"12",fees:"5000"},
{name:"aman",rollno:13,fees:6000}
]

function enrollStudent(student){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
		students.push(student)
		let error=true;
		if(error){
			resolve('promise resolve');
		}
		else{
			reject('rejected')
		}
		},1000)		
	})
}

function getStudent(){

	setTimeout(()=>{
		let str='';
		students.forEach((data)=>{
			 str+=`<li>${data.name}</li>`;
		});
		document.querySelector('#demo').innerHTML=str
	},5000)
}

student={name:"naman",rollno:12,fees:5000};
enrollStudent(student)
.then((res)=>{
	console.log(res);
	getStudent();
})
.catch((error)=>{
	console.log(error)
})




