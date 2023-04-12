const buttonAdvice = document.getElementById('button-advice')
const idAdvice = document.getElementById('advice-number')
const advice = document.getElementById('advice-text')

let createAdvice = async () => {
    let getAdvice = `https://api.adviceslip.com/advice`

    let response = await fetch(getAdvice)
    return await response.json()
}
let getAdvice = async () => {
    const newAdvice = await createAdvice()

    const getId = await newAdvice.slip.id

    const getAdvice = await newAdvice.slip.advice

    idAdvice.innerHTML = `ADVICE #${getId}`
    advice.innerHTML = ` " ${getAdvice} " `
}

buttonAdvice.addEventListener('click', () => {
    getAdvice()
})

