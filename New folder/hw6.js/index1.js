//فانکشن دریافت ورودی
function raceGameRunner() {
    let carCount =parseInt(+prompt('Enter cars count:'));
    if(isNaN(carCount)){
        console.log(new Error('you must enter a number!'));
        return;
    }

    raceGame(carCount)
}
//فانکشن عملیات بازی
function raceGame(carCount) {
    let cars=[]
    for (let i = 0; i <carCount; i++) {
        let inputCarName = prompt(`you have ${carCount} cars. Enter name of cars ${i+1}`);
    cars.push(new A(inputCarName));
}

//گرفتن شماره رندوم به ماشین 
let randomOrders = randomOrder(carCount);
cars.forEach((item, index)=>{
    item.order=randomOrders[index];
item.position = 0;
});
// برای شروع کردن ماشین ها 
cars.sort((a,b) => {
    return a.order - b.order;
});
let map = [...'*'.repeat(300)];
let ranking = [];
while (
    cars.filter((item) =>{
        return item.position> 300;
    }).length < carCount
) {
    let dice = diceArray(10,carCount);
    map = [...'*'.repeat(300)];
    for(let i = 0;i<carCount;i++) {
        cars[i].position +=dice[i];
        if(cars[i].position <300){
            map[cars[i].position]=cars[i].carName;
            cars.filter((el) =>{
                return(
                    (el.position === cars[i].position) && (el.carName !==cars[i].carName));
            })
            .forEach((comp) =>{
                comp.position =0;
            });
        }else{
            ranking.push(cars[i].carName);
        }
    }
    console.log(map.join(''));
}
console.log(ranking[0]);
}
raceGameRunner()
function A(inputName) {
    this.carName = inputName
}

function randomOrder(InputCarCount) {
    randomNumbers =[];
    while(randomNumbers.length<InputCarCount){
        let randOrder = parseInt(Math.random()*InputCarCount+1);
        if(!randomNumbers.includes(randOrder)){
            randomNumbers.push(randOrder);
        }
    }
    return randomNumbers;
}

function diceArray(inputMax,inputCount){
    let diceOrder =[]
    while(diceOrder.length<inputCount){
        diceOrder.push(parseInt(Math.random()*inputMax +1))
    }
    return diceOrder;
}
