  // id pass
    // roll no 
    // detail 
    // age
// callback hell
    function getResult(){
        let id="naman";
        let password="1234";
        setTimeout((id,password)=>{
            let rl=23;
            console.log(rl);
            setTimeout((rl)=>{
                detail=['naman','12th'];
                console.log(detail);
                setTimeout((detail)=>{
                    age=18;
                    console.log(age);
                    setTimeout((age)=>{
                        console.log('qualified');
                    },6000)
                },5000)
            },4000)
        },3000)
    }
    getResult()
