function go() {
    var begining = document.querySelector('input#bgn')
    var end =  document.querySelector('input#end')
    var step = document.querySelector('input#stp')
    var res = document.querySelector('div#res')
    if (begining.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        res.innerHTML = `Faltam dados! \u{1F914}`
        window.alert('Erro! Faltam dados, tente novamente!')
    } else {
        res.innerHTML = 'Contando: </br>'
        let b = Number(begining.value)
        let e = Number(end.value)
        let s = Number(step.value)
        if (s <= 0) {
            window.alert('O valor do passo é inválido! Será atribuido o válor "1".')
            s = 1
        }
        if (b < e) {
            for (var inha = b; inha <= e; inha += s) {
                res.innerHTML += `${inha} \u{27a1}`
            }
        } else {
            for (var anda = b; anda >= e; anda -= s) {
                res.innerHTML += `${anda} \u{27a1} `
            }
        }
        res.innerHTML += `\u{1F601}/`
    }

}
