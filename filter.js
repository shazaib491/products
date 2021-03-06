var companies = [{
    name: "Company One",
    category: "Fiance",
    start: 1981,
    end: 2004
}, {
    name: "Company Two",
    category: "Retail",
    start: 1992,
    end: 2008
}, {
    name: "Company Three",
    category: "Auto",
    start: 1999,
    end: 2007
}, {
    name: "Company Four",
    category: "Retail",
    start: 1989,
    end: 2010
}, {
    name: "Company Five",
    category: "Technology",
    start: 2009,
    end: 2014
}, {
    name: "Company Six",
    category: "Finance",
    start: 1987,
    end: 2010
}, {
    name: "Company Seven",
    category: "Auto",
    start: 1986,
    end: 1996
}, {
    name: "Company Eight",
    category: "Technology",
    start: 2011,
    end: 2016
}, {
    name: "Company Nine",
    category: "Retail",
    start: 1981,
    end: 1989
}];


const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// filter

// Get 21 and older

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true;
//   }
// });
// console.log(canDrink)

// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink)


// Filter retail companies

// const retailCompanies = companies.filter(function(company) {
//   if(company.category === 'Retail') {
//     return true;
//   }
// });

// console.log(retailCompanies);


// const retailCompanies = companies.filter(company => company.category === 'Retail');

// Get 80s companies

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// Get companies that lasted 10 years or more

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

console.log(lastedTenYears)


// Remove Element from Array
// const t = companies.filter(t => t.name !== 'Company One')
// console.log(t);

// let emp = [{
//         name: 'naman',
//         stno: 123,
//         dep: "worker",
//         salary: 1000,
//         age:19
//     }, {
//         name: 'aman',
//         stno: 124,
//         dep: "babu",
//         salary: 2000,
//         age:22
//     },
//     {
//         name: 'jameel',
//         stno: 125,
//         dep: "trainer",
//         salary: 3000,
//         age:22
//     }

// ]

//  emp=emp.filter((f)=>{
// 	if(f.age>20){
// 		return f.age!==20
// 	}
// })

// console.log(emp);

// var deleteElement=companies.filter(company=>company.name=="Company One");
// deleteElement.forEach(f=>companies.splice(companies.findIndex(e=>e.name===f.name),1))
// console.log(companies)