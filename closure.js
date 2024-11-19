// closure is a freature in javascript where an inner function has access to the variable of its outer function, even after the outer function has finished executing


function outerFunction(){
    const outerVariable= 'I am from outer functin';

    function innerFunction() {
        console.log (outerVariable)
    }

    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction();

function createCounter() {
    let counter = 0;

     function increase(){
        counter++;
        return counter;
    };

    return increase()
}

const counterFunction = createCounter();
console.log(counterFunction());
console.log(counterFunction());
