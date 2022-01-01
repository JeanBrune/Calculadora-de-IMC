// para corrigir/adicionar:
// quando input é NaN, ta selecionando a classe de obesidade III e pintando a tabela
// quando calcular e mostrar na tabela, dar scroll e colocar SecurityPolicyViolationEvent, até o rsultado (importante para celular)
// descobrir pq tá abrindo pop de erro no valor peso, apesar disso não prejudicar a função
// fazer uma função para permitir colocar a altura também em centimetros e não apenas metros
//quando ele deixa de calcular poe causa de NaN input, tem q fazer resetar a flag do ultimo highlight da tabela


//criar função para converter valores indesejáveis
function converter(min, max) {
    //buscar os valores inseridos e converta pra numero
    let peso = parseFloat(document.getElementById("peso").value)
    const peso_min = parseFloat(document.getElementById("peso").min)
    const peso_max = parseFloat(document.getElementById("peso").max)

    let altura = parseFloat(document.getElementById("altura").value)
    const altura_min = parseFloat(document.getElementById("altura").min)
    const altura_max = parseFloat(document.getElementById("altura").max)

    const simbolos_invalidos = ["+", "e", "-"]

    //caso valor abaixo do minimo
    if (peso < peso_min) {
        document.getElementById("peso").value = peso_min
        console.log(`o valor digitado está muito abaixo do menor adulto já registrado no mundo e foi convertido automaticamente para ${peso_min} Kg`)

    } else if (altura < altura_min) {
        document.getElementById("altura").value = altura_min
        console.log(`o valor digitado está muito abaixo do menor já registrado na história e foi convertido automaticamente para ${altura_min} m`)
    }
    //caso valor acima do máximo
    else if (peso > peso_max) {
        document.getElementById("peso").value = peso_max
        console.log(`o valor digitado está muito acima do maior peso humano já registrado na história e foi convertido automaticamente para ${peso_max} Kg`)
    }

    else if (altura > altura_max) {
        document.getElementById("altura").value = altura_max
        console.log(`o valor digitado está muito acima da maior altura humana já registrada na história e foi convertido automaticamente para ${altura_max} m`)
    }
    //caso hipotético de caracteres científicos
}


//criar função de calcular IMC
function calcular_IMC(resultado) {
    // pegar os inputs do html
    let peso = parseFloat(document.getElementById("peso").value)
    console.log(`o peso inserido é ${peso} Kg`)

    let altura = parseFloat(document.getElementById("altura").value)
    console.log(`a altura inserida é ${altura}`)

    const IMC = (peso / (altura * altura)).toFixed(1)

    //se inputs não forem números ou forem inválidos
    if (isNaN(peso) == true || isNaN(altura) == true) {
        alert("ERRO!\n preencha todos os campos e insira apenas números válidos")
    }
    //se inputs forem válidos
    else {
        //pegar o peso e dividir pelo quadrado da altura
        console.log(IMC)
        //exibir o resultado em texto
        document.getElementById("resultado").innerHTML = `<p>Seu IMC é de ${IMC} pontos</p>`
    }
    //executar a função de exibir na tabela
    tabela_highlight(IMC)
}

//Mostrar resultado na tabela
//criar funçao de exibir o resultado na tabela, criando um parametro IMC
function tabela_highlight(IMC) {
    //identificar elementos a serem destacados
    const magreza_III = document.getElementById("magreza_III")
    const magreza_II = document.getElementById("magreza_II")
    const magreza_I = document.getElementById("magreza_I")
    const abaixo_peso = document.getElementById("magreza_0")
    const ideal = document.getElementById("ideal")
    const acima_peso = document.getElementById("obesidade_0")
    const obesidade_I = document.getElementById("obesidade_I")
    const obesidade_II = document.getElementById("obesidade_II")
    const obesidade_III = document.getElementById("obesidade_III")

    //executar função de resetar a tabela caso ela já tenha sido usada
    resetar_highlight(
        magreza_III,
        magreza_II,
        magreza_I,
        abaixo_peso,
        ideal,
        acima_peso,
        obesidade_I,
        obesidade_II,
        obesidade_III
    )

    //se magreza III
    if (IMC < 16) {
        console.log("magreza_III")
        magreza_III.classList.toggle("gravissimo")
    }

    //se magreza II
    else if (IMC >= 16 && IMC < 17) {
        console.log("magreza_II")
        magreza_II.classList.add("moderado")
    }

    //se magreza I
    else if (IMC >= 17 && IMC < 18.5) {
        console.log("magreza_I")
        magreza_I.classList.add("leve")
    }

    //se ideal
    else if (IMC >= 18.5 && IMC < 25) {
        console.log("faixa de peso ideal")
        ideal.classList.add("ideal")
    }

    //se sobrepeso
    else if (IMC >= 25 && IMC < 30) {
        console.log("sobrepeso")
        acima_peso.classList.add("leve")
    }

    //se obesidade I
    else if (IMC >= 30 && IMC < 35) {
        console.log("obesidade I")
        obesidade_I.classList.add("moderado")
    }

    //se obesidade II
    else if (IMC >= 35 && IMC < 40) {
        console.log("obesidade II")
        obesidade_II.classList.add("grave")
    }

    //se obesidade III
    else if (IMC => 40) {
        console.log("obesidade III")
        obesidade_III.classList.add("gravissimo")
    }
}

//criar função de resetar a tabela caso a calculadora já tenha sido usada
function resetar_highlight(
    magreza_III,
    magreza_II,
    magreza_I,
    abaixo_peso,
    ideal,
    acima_peso,
    obesidade_I,
    obesidade_II,
    obesidade_III
) {
    //resetar tabela caso a calculadora já tenha sido usada
    //remover ou forçar toogle false nos elementos da lisa
    magreza_III.classList.toggle("gravissimo", false)
    magreza_II.classList.toggle("moderado", false)
    magreza_I.classList.remove("leve")
    ideal.classList.remove("ideal")
    acima_peso.classList.remove("leve")
    obesidade_I.classList.remove("moderado")
    obesidade_II.classList.remove("grave")
    obesidade_III.classList.remove("gravissimo")
}

//criar função para apagar ao clicar
function apagar(id) {
    document.getElementById(id).value = ""
}
