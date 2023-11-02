interface exerciseEvaluation {
    numberOfDays: number;
    numberOfTrainingDays: number;
    targetValue: number;
    averageTrainingTime: number;
    success: boolean;
    successRating: successRating;
    message: string
}

type successRating = "1" | "2" | "3"

const exerciseCalculator = (hoursArray: Array<number>, targetValue: number): exerciseEvaluation => {

    let numberOfDays: number = hoursArray.length

    let numberOfTrainingDays: number = 0

    hoursArray.map(h => {
        h !== 0 ?
        numberOfTrainingDays = numberOfTrainingDays + 1
        :
        numberOfTrainingDays = numberOfTrainingDays
    })

    let target = targetValue

    let trainingTime: number = 0

    let averageTrainingTime: number = 0

    hoursArray.map(h => trainingTime = trainingTime + h)
    console.log(trainingTime, hoursArray.length)

    averageTrainingTime = trainingTime/numberOfDays

    let success: boolean = averageTrainingTime >= target ? true : false

    let successRating: successRating = "1"

    let message: string = ""

    if (averageTrainingTime === target) {
        successRating = "2"
        message = "Mission Acompolished"
    } else if (averageTrainingTime > target) {
        successRating = "3"
        message = "Overproductive"
    } else {
        successRating = "1"
        message = "Get some work done!!!"
    }

    let evaluation: exerciseEvaluation = {
        numberOfDays: numberOfDays,
        numberOfTrainingDays: numberOfTrainingDays,
        targetValue: target,
        averageTrainingTime: averageTrainingTime,
        success: success,
        successRating: successRating,
        message: message
    }

    return evaluation
}

console.log(exerciseCalculator([3, 4, 5, 6, 4, 1,], 1))