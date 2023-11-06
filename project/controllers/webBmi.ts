import { Router } from "express";
import bmiCalculator from "./middleware/bmiCalculator";

const webBmiRouter = Router();

webBmiRouter.get("/bmi", (req, res) => {

    try {

        let weight = req.query.weight?.toString();
        let height = req.query.height?.toString();

        if (weight === undefined) {
            weight = "";
        }

        if (height === undefined) {
            height = "";
        }

        const result = bmiCalculator(weight, height);

        if (result === "malformated credentials") {
            res.json(result);
        } else {
            res.json({ weight: weight, height: height, result });
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        console.log("malformatted parameters", error.message);
    }

});

export default webBmiRouter;