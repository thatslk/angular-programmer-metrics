class LoginRequest {
    grant_type = 'password' as const;
    constructor(public username: string, public password: string) {}
}

export default LoginRequest;
