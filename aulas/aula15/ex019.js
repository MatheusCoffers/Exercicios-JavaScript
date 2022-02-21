function fatorial(num){
    let total = 1;
    for(let i = num; i > 0; i--){
        total = total * i
    }
    return total
}

let x = fatorial(25)
console.log(x)
