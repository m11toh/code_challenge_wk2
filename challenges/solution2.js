function MyArray(Num2, Num3){
    let value = []

    // give the condition of the array
    for( let x = Num2; x <= Num3; x++ ){
        value.push(x); //push the value of x to the array 
    }

    return value; //return the value pushed into the array
}

let value = MyArray (-2,8); // assighn values of the array

console.log(value) // display the array 