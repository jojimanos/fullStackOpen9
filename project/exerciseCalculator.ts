import { argv } from "process";

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

const exerciseCalculator = (targetValue: string, hoursStringArray: Array<string> ): exerciseEvaluation => {

    let hoursArray = hoursStringArray.map(Number)

    let numberOfDays: number = hoursArray.length

    let numberOfTrainingDays: number = 0

    hoursArray.map(h => {
        h !== 0 ?
        numberOfTrainingDays = numberOfTrainingDays + 1
        :
        numberOfTrainingDays = numberOfTrainingDays
    })

    let target = parseInt(targetValue)

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

    console.log(evaluation)

    return evaluation
}

exerciseCalculator(argv[2], argv.slice(3))