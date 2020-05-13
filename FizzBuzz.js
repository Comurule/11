//Section 2 Question 1
let fizz=[], buzz=[], fizzBuzz=[], other=[];

for (let i = 1; i <=200; i++) {
    (i%3===0 && i%5===0)? fizzBuzz.push(i):
        (i%3===0)? fizz.push(i):
            (i%5===0)? buzz.push(i):
                other.push(i);  
}

console.log('Total Number of fizz= '+ fizz.length);
console.log('Total Number of buzz= '+ buzz.length);
console.log('Total Number of fizzBuzz= '+ fizzBuzz.length);
console.log('Total Number of fizzBuzz= '+ other.length);

//Section 2 Qestion 2
const emailSegmenter= (employeeIdNumbersArray)=>{
    let evenEmployeeIdNumbers=[], oddEmployeeIdNumbers=[];
    for (let i = 0; i < employeeIdNumbersArray.length; i++) {
        const IdNumber = array[i];
        (i%2===0)? evenEmployeeIdNumbers.push(IdNumber): oddEmployeeIdNumbers.push(IdNumber);
    }

    console.log(evenEmployeeIdNumbers);
    console.log(oddEmployeeIdNumbers);
}