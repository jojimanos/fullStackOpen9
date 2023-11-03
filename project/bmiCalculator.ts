import { argv } from "process"

const bmiCalculator = (weight: string, height: string): string => {

    let bmi: number = parseInt(weight)/(Math.pow(parseInt(height)/100, 2))

    let message: string = ""

    if (bmi < 24) {
        message = `underweight: ${bmi}`
    } else if (bmi >= 24 && bmi <=26) {
        message = `normal weight: ${bmi}`
    } else {
        message = `overweight, ${bmi}`
    }

    console.log(message)

    return (
        message
    )
}

bmiCalculator(argv[2], argv[3])