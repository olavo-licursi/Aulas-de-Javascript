var vet = []

function inLista(n, l){
    if (l.indexOf(Number(n)) != 1) {
        return true
    }else{
        return false
    }
}

function analisar(){
    var num = window.document.getElementById('num')
    var selval = window.document.getElementById('selval')
    

    var n = Number(num.value)

    
        if(n < 1 || n > 100){
            alert('Digite um valor entre 1 e 100!')
        }else{
            var item = document.createElement('option')
            vet.push(n)
            item.text = `Valor ${n} adicionado.`
            selval.appendChild(item)
            
        }
    }



function mostrar(){
    var res = window.document.getElementById('res')
    var elementos = vet.length
    var soma = 0
    vet.sort()

    res.innerHTML = ''

    if(vet == 0){
        alert('Entre com algum número!')
    }else{
        res.innerHTML += `Ao todo, temos ${elementos} números cadastrados </br>`
        res.innerHTML += `O maior valor informado foi ${vet[elementos-1]} </br>`
        res.innerHTML += `O menor valor informado foi ${vet[0]} </br>`
        for(var i in vet){
            soma += vet[i]
        }
        res.innerHTML += `Somando todos os valores, temos ${soma} </br>`
        res.innerHTML += `A média dos valores digitados é ${soma/elementos}`
      
    }
    

}