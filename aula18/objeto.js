let amigo = {nome:'jose',
sexo:'M',
idade:78,
peso:67.9,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}
}
amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)