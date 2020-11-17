function isBreedAvailable(){
return true;
}
function isEggAvailable(){
return false;
}

function bringBreed(){
    return new Promise((resolve,reject)=>{
        if(isBreedAvailable()){
            resolve(value='Breed Avalable')   
        }
        else if(isEggAvailable())
        {
            resolve(value="Egg available")
        }
        else
        {
            reject('breed and egg both not availabe')
        }
    })
}

// bringBreed().then((res)=>{
//     console.log(res);
// }).catch(err=>console.log(err))
async function final(){
      try
      {
        let data=await bringBreed();
        console.log('called');
        return data;
      }
      catch(e){
        return Promise.reject(e)
      }
     
}

final().then(res=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})