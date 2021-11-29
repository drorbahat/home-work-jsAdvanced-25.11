const runCode = () => {

    const maxNumInput = Number(document.getElementById("max-input").value) 
    const minNumInput = Number(document.getElementById("min-input").value) 

    console.log("start")

    generate7BoomAfterDelayAsync(minNumInput, maxNumInput)
        .then((randomNum) => {
            console.log(randomNum + " 7 💣")
        })
        .catch((randomNum) => {
            console.log("Error! " + randomNum + " not this time :)")
        })

    console.log("end")
}

const generate7BoomAfterDelayAsync = (min, max) => {
    return new Promise((resolve, Reject) => {

        let randomNum = Math.floor(Math.random() * max) + min

        setTimeout(() => {
            if (randomNum % 7 === 0 || randomNum % 10 === 7) {
                resolve(randomNum)
            } else {
                Reject(randomNum)
            }
        }, 1000);
    })
}