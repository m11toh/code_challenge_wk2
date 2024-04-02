function MyArray(Num2, Num3){
    let value = []

    for( let x = Num2; x <= Num3; x++ ){
        value.push(x);
    }

    return value;
}

let value = MyArray (-2,8);

console.log(value)