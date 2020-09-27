function tabuada(){
    var num = window.document.getElementById('num')
    var seltab = window.document.getElementById('seltab')

    var n = Number(num.value)

    seltab.innerHTML = ''
    
    if(n <= 0){
        alert('Digite um número maior que zero!')
        seltab.innerHTML += 'Aguardando números!'
    }else{
        for(var i = 1; i <= 10; i++){
            var item = document.createElement('option')
            var resf = n * i
            item.text = ` ${n} x ${i} = ${resf}`
            seltab.appendChild(item)
            
            }
    }

}