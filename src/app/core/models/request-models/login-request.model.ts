class LoginRequest {
    grant_type: 'password' = 'password';
    constructor(public username: string, public password: string) { }
}

export default LoginRequest;