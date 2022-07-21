function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if( fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
         var fsex = document.getElementsByName('radsex')
         var idade = ano - Number(fano.value)
         var gênero = ''
         var img = document.createElement('img')
         img.setAttribute('id', 'foto')

         if (fsex[0].checked) {
            gênero = 'Homem'
             if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotobebehomem.jpg.jpg')
             } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'fotojovemhomem.jpg.jpg')
             } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotohomemadulto.jpg.jpg')
             } else {
                //Idoso
                img.setAttribute('src', 'fotoidosohomem.jpg.jpg')
             }

         } else if (fsex[1].checked) {
            gênero = 'Mulher'

            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotobebemulher.jpg.jpg')
             } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'fotojovemmulher.jpg.jpg')
             } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotomulheradulto.jpg.jpg')
             } else {
                //Idoso
                img.setAttribute('src', 'fotoidosomulher.jpg.jpg')
             }

         }
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
         res.appendChild(img)
    }
}  