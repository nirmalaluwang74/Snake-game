const startBtn = document.getElementById("start")
const grid = document.querySelector('.grid')
const scoreDisplay = document.getElementById('score')
let squares = []
let currentSnake = [2,1,0]
let direction = 1
const width = 10
let appleIndex = 0
let score = 0
let intervalTime = 1000
const speed = .9


function createGrid() {
    for (let i = 0; i < 100; i++ ) {
        const square = document.createElement('div')
        square.classList.add('square')
        grid.appendChild(square)
        squares.push(square)
    }
}
createGrid()

currentSnake.forEach(index => squares[index].classList.add('snake'))

 move = () => {
    if (
        (currentSnake[0] + width >= width * width && direction === 10) ||
        (currentSnake[0] % width === width - 1 && direction === 1) ||
        (currentSnake[0] % width === 0 && direction === -1) ||
        (currentSnake[0] - width < 0 && direction === -10) ||
        squares[currentSnake[0] + direction].classList.contains('snake')
    )
    return clearInterval(timerId)

    const tail = currentSnake.pop()
    squares[tail].classList.remove('snake')
    currentSnake.unshift(currentSnake[0] + direction)
    

    if (squares[currentSnake[0]].classList.contains('apple')) {
        //remove the class of apple
        squares[currentSnake[0]].classList.remove('apple')
        
        squares[tail].classList.add('snake')

        currentSnake.push(tail)
        
        generateApple()
        score++
        scoreDisplay.textContent = score
        clearInterval(timerId)
        intervalTime = intervalTime * speed 
        timerId = setInterval(move, intervalTime)

    }

    squares[currentSnake[0]].classList.add('snake')
    }
    
    move()



    let timerId = setInterval(move, intervalTime)


    generateApple = () => {
        do {
            appleIndex = Math.floor(Math.random() * squares.length)
        } while (squares[appleIndex].classList.contains('snake'))
        squares[appleIndex].classList.add('apple')
        }

    generateApple()


control = (e) => {
    if (e.key === 'ArrowRight') {
        direction = 1
        
    } else if (e.key === 'ArrowUp') {
        direction = -width
        
    } else if (e.key === 'ArrowLeft') {
        direction = -1
        
    } else if (e.key === 'ArrowDown') {
        direction = +width
        
    }
}


    document.addEventListener('keyup', control)