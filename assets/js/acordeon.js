const buttonAcordeon = document.querySelectorAll('.acordion .trigger')

buttonAcordeon.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const acordion = trigger.parentElement // está acessando o elemento acordion atraves do button chamado trigger
        const isOpen = acordion.classList.contains("open") // acessa os atributos presente dentro da class da tag html e verifica se existe a palavra open atraves da função contains(se existir retorna True, senão retorna false)

        // acordion.classList retorna um elemento com os atributos dentro da class na tag html [ "acordion", "open" ]


        if (isOpen){
            acordion.classList.remove('open')
        }else{
            acordion.classList.add('open')
        }
    })
})