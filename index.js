const runCode = async () => {

    console.log("start")

    await generateWorkingDayAfterDelayAsync()
        .then((randomDay) => {
            console.log(randomDay + " is a working day")
        })
        .catch((randomDay) => {
            console.log("Error! " + randomDay + " is not a working day")
        })

    console.log("end")
}

const generateWorkingDayAfterDelayAsync = () => {
    return new Promise((resolve, Reject) => {
        let weekDayList = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
        let randomDay = weekDayList[Math.floor(Math.random() * weekDayList.length)]
        console.log(randomDay)
        setTimeout(() => {
            if (randomDay === 'friday' || randomDay === 'saturday') {
                Reject(randomDay)
            } else {
                resolve(randomDay)
            }
        }, 1000);
    })
}