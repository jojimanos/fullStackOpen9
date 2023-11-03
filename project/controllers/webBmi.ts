import { Router } from "express";
import bmiCalculator from "../bmiCalculator";

const webBmiRouter = Router()

webBmiRouter.get("/bmi", async (req, res) => {

    try {

        let weight = req.query.weight?.toString()
        let height = req.query.height?.toString()

        if (weight === undefined) {
            weight = ""
        }

        if (height === undefined) {
            height = ""
        }

        let result = bmiCalculator(weight, height)

        if (result === "malformated credentials") {
            res.json(result)
        } else {
            res.json({ weight: weight, height: height, result })
        }

    } catch (error) {
        console.log("malformatted parameters", error.message)
    }

})

export default webBmiRouter