const runCode = async () => {
    console.log("start")
    await getArrayFromServerAsync(10)
        .then((newArr) => {
            console.log(newArr)
        })
        .catch((randomNum) => {
            console.log(randomNum + " does not divides. cannot get array from server.")
        })
    console.log("end")
}

const getArrayFromServerAsync = (size) => {
    return new Promise((resolve, Reject) => {
        setTimeout(() => {
            let randomNum = Math.floor(Math.random() * 50)
            let newArr = []
            if (randomNum % 2 === 0) {
                for (let i = 0; i < size; i++) {
                    let newNunInArr = Math.floor(Math.random() * 5)
                    newArr.push(newNunInArr)
                }
                resolve(newArr)
            } else {
                Reject(randomNum)
            }
        }, 1000);
    })
}