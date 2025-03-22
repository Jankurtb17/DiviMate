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

export type ResetRequest = {
    email: string
}

export type ConfirmResetPassword = {
    token: string
    newPassword: string
    confirmPassword: string
}