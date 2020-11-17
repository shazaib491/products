function number() {
    return new Promise((resolve, reject) => {
        resolve(value=6)
    })
}

function sum(number) {
    return new Promise((resolve, reject) => {
        resolve(value = number + number)
    })
}


function product(number) {
    return new Promise((resolve, reject) => {
        resolve(value = number * number)
    })

}
function cube(number) {
    return new Promise((resolve, reject) => {
        resolve(value = number * number * number)
    })
}
async function test() {
    try {

        let data = await number();
        let su=await sum(data);
        let pro = await product(su);
        return await cube(pro);

    }
    catch (e) {
        Promise.reject('error occoured')
    }
}
test().then((res) => {
    console.log(res);
}).catch(e => console.log(e))




