interface LoginResponse {
    access_token: string,
    token_type: "Bearer",
    expires_in: 7200,
    refresh_token: string,
    scope: "api",
    created_at: number
}

export default LoginResponse;