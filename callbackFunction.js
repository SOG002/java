// Definition : A call back is a function passed into another functioin as an argument, which is then invoked inside the outer function to complete some kind of rountine or action.
//function definition with a callback parameter.

function sayHello(name, callback){
    console.log(`Hello ${name}`)
    callback();
}

function sayGoodbye(){
    console.log('Welcome to SOG world')
}
 sayHello("Vowero",sayGoodbye);

 const greet = (mame, callback)=> {
    console.log(`Hello ${name}`)
    callback();
 }

 const quest = () => {
    console.log('Welcome guys')
 }

 greet("SOG", quest)

 const greetUser = (name, firstCallback, secondCallback) => {
    console.log(`Hello ${name}`)
    firstCallback()
    secondCallback()
 }

 const welcomeMesssage = () => {
    console.log ('welcome to our app')
 }

 const offerService = () => {
    console.log('pls can we help you?')
 }

 greetUser("SOG", welcomeMesssage, offerService)

 const someOne = (name, firstCallback, secondCallback) => {
    console.log(`Emma ${name}`)
    firstCallback()
    secondCallback()
 }

 const  getHere =() => {
    console.log('thankyou for coming')
 }

 const someWhere = () => {
    console.log('where are you going to')
 }

 someOne("Emma", getHere, someWhere)

 const user  = (name, schoolAndCourse, company) =>{
    console.log(`My name is ${name}`)
    schoolAndCourse()
    company()
 }

 const schoolAndCourse = ()=> {
    console.log('i am studying frontend Development at New Horizon')
 }
  const company = ()=> {
    console.log('i will become my own boss')
  }

  user('SOG', schoolAndCourse, company);