

function ReadOnly(target : any, key : string){
    Object.defineProperty(target, key, {
        writable : true,
        configurable : true
    })
}

class DemoClass{
    @ReadOnly
    username : string = "John"
}

console.log("Username : ",  new DemoClass().username)


// function ClassLevelDecorator(){
//     return () => {}
// }

// function ReadOnly(){}

// @ClassLevelDecorator()
// class DemoClass{

//     @ReadOnly
//     someProp : string;
// }



// function TestDecorator(){

// }

// @TestDecorator
// function test(){

// }