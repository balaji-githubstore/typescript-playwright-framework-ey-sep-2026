export const validLoginData = [
    { username: "physician", password: "physician", language: "English (Indian)", expectedValue: "Calendar" },
    { username: "admin", password: "pass", language: "English (Indian)", expectedValue: "Calendar" },
    { username: "clinician", password: "clinician", language: "English (Indian)", expectedValue: "Calendar" }
]


export const invalidLoginData = [
    { username: "john", password: "john123", language: "English (Indian)", expectedValue: "Invalid username or password" },
    { username: "saul", password: "saul123", language: "English (Indian)", expectedValue: "Invalid username or password" }
]