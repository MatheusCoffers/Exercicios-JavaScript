let num = [5,8,2,9,3]
console.log(`o vetor tem ${num.length} posições`)
console.log(`o vetor é ${num}`)
num.sort()
console.log(`o vetor em ordem crescente é ${num}`)

console.log('vamos ver o vetor sem fomatação')

for (let i=0; i<num.length;i++){
    console.log(`${num[i]}`)
}

for (let i in num) {
    console.log('sou lindo')

}
