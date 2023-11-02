const bmiCalculator = (weight: number, height: number): string => {

    let bmi: number = weight/(Math.pow(height/100, 2))

    let message: string = ""

    if (bmi < 24) {
        message = `underweight: ${bmi}`
    } else if (bmi >= 24 && bmi <=26) {
        message = `normal weight: ${bmi}`
    } else {
        message = `overweight, ${bmi}`
    }

    return (
        message
    )
}

console.log(bmiCalculator(70, 170))