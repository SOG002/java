function diff(a, b){
    return a -b;
}

const minuz = diff(8, 4)
console.log(minuz);

function user ( name, course){
    console.log("hello" + name, "you are" + course);
}

user ("SOG", "fronter");

// function Expression 
const functionName =  function(parameter) {
    // code to be executed
};
 
const greet = function (name) {
    console.log ("helllo", + name )
};

greet("Vowero"); // output: hello, Vowero

const add = function (c, d) {
    return c+ d;
}

const sum2 = add(1,2);
console.log(sum2);

function use (name, course, school){
    console.log(`Hello ${name} ${course} at ${school}`)
}    
    use("vowero", + "frontend developer", + "new horizon");
