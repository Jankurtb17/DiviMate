export type UserRegistration = {
    email: string,
    password: string,
    confirmPassword: string
}

export type VerifyUser = {
    email: string,
    otp: string
}

export type UserLoginRequest = {
    username: string,
    password: string
}