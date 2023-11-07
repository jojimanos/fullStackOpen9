type Patient = {
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: Gender,
    occupation: string
}

enum Gender {
    Male = "male",
    Female = "female",
    Other = "other"
}

export { Patient, Gender }