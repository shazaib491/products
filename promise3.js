function promiseA(){
    return new Promise((resolve,reject)=>{
        resolve(value=5)
    })
}
function square(number){
    return new Promise((resolve,reject)=>{
        resolve(value=number*number)
    })
}
function qube(number){
    return new Promise((resolve,reject)=>{
        resolve(value=number*number*number)
    })
}


// promiseA().then((data)=>{
//     square(data).then((res)=>{
//         console.log(res);
//         qube(res).then((d)=>{
//             console.log(d);
//         }).catch(e=>console.log(e))
//     }).catch((e)=>{console.log(e);})
// }).catch(e=>console.log(e))

async function test(){
    try{
        arr=[];
        const data=await promiseA();
        arr.push({"number is ":-data})
        const sq=await square(data)
        arr.push({"square is ":-sq})
        const qubes= await qube(sq)
        arr.push({"qube is ":-qubes})
        return arr;   
    }
    catch(e){
    Promise.reject('error occured')
    }
}
test().then((res)=>{
    console.log(res)
}).catch(e=>console.log(e))