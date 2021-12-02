const runCode = async () => {
    console.log("start")
    await getPizzaFromServerAsync()
        .then((pizza) => {
            console.log(pizza)
        })
        .catch((randomNum) => {
            console.log(randomNum + " does not divides. cannot get array from server.")
        })
    console.log("end")
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getPizzaFromServerAsync = () => {
    return new Promise((resolve, Reject) => {
        setTimeout(() => {
            let randomNum = Math.floor(Math.random() * 50)
            if (randomNum % 2 === 0) {
                let randomDiameter = getRndInteger(10, 50)
                let randomPrice = getRndInteger(20, 80)
                let randomToppings = getRndInteger(0, 4)
                let pizzaObj = {
                    diameter: randomDiameter,
                    price: randomPrice,
                    toppings: randomToppings
                }
                resolve(pizzaObj)
            } else {
                Reject(randomNum)
            }
        }, 1000);
    })
}