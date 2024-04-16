// Получаем доступ к HTML элементам
const display = document.getElementById('display')
const clearButton = document.getElementById('clear')
const equalsButton = document.getElementById('equals')
const operator = document.getElementById('.bthoperator')
// Получить массив из кнопок
const buttons = document.querySelectorAll('.btn')

// Для каждой кнопки из массива вешаем прослушку события клика
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.innerHTML
        display.value += value
    })
})

// Прослушка на кнопку очистки
clearButton.addEventListener('click', () => {
    display.value = ``
})

// Вычисление значения
equalsButton.addEventListener('click', () => {
    try {
        console.log(display.value[display.value.length-1])
        display.value = eval(display.value)
    } catch (error) {
        display.value = `Ошибка ${error.message}`
    }
})