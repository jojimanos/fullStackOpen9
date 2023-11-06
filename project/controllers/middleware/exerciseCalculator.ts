interface exerciseEvaluation {
    numberOfDays: number;
    numberOfTrainingDays: number;
    targetValue: number;
    averageTrainingTime: number;
    success: boolean;
    successRating: successRating;
    message: string
}

type successRating = "1" | "2" | "3";

const exerciseCalculator = (targetValue: string, hoursStringArray: Array<string> ): exerciseEvaluation => {

    const hoursArray = hoursStringArray.map(Number);

    const numberOfDays: number = hoursArray.length;

    let numberOfTrainingDays: number = 0;

    hoursArray.map(h => {
        h !== 0 ?
        numberOfTrainingDays = numberOfTrainingDays + 1
        :
        numberOfTrainingDays;
    });

    const target = parseFloat(targetValue);

    let trainingTime: number = 0;

    let averageTrainingTime: number = 0;

    hoursArray.map(h => trainingTime = trainingTime + h);
    console.log(trainingTime, hoursArray.length);

    averageTrainingTime = trainingTime/numberOfDays;

    const success: boolean = averageTrainingTime >= target ? true : false;

    let successRating: successRating = "1";

    let message: string = "";

    if (averageTrainingTime === target) {
        successRating = "2";
        message = "Mission Acompolished";
    } else if (averageTrainingTime > target) {
        successRating = "3";
        message = "Overproductive";
    } else {
        successRating = "1";
        message = "Get some work done!!!";
    }

    const evaluation: exerciseEvaluation = {
        numberOfDays: numberOfDays,
        numberOfTrainingDays: numberOfTrainingDays,
        targetValue: target,
        averageTrainingTime: averageTrainingTime,
        success: success,
        successRating: successRating,
        message: message
    };

    return evaluation;
};


export default exerciseCalculator