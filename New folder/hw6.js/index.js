function car(carNumber, carName) {
    carNumber = prompt('Enter your car number :')
    if (typeof carNumber == "number") {
        return 'not a number please enter a number'
    }
    for (let i = 0; i <= carNumber.length; i++) {
        carName = prompt('enter name of car' + `${i + 1}` + ':')
        console.log(carName)
    }
}
car()
function map() {
    mapGame = []
    for (let i = 0; i < 300; i++) {
        mapGame.push('*')
    }
    console.log(mapGame)
}
map()
function randomNumberGenerator() {
    for (let index = 1; index < 10; index++) {
        console.log(Math.floor(Math.random() * 10 + 1));
    }
}
randomNumberGenerator()

function replaceChar(str, index, nameCar) {
    return str.slice(0, index) + nameCar + str.slice(index + 1);
}