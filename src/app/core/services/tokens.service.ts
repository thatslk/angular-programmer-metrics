import TokensDto from "../models/dtos/tokes-dto.model";

export class TokensService {
    getTokens(): TokensDto {
        return {
            accessToken: window.localStorage["accessToken"],
            refreshToken: window.localStorage["refreshToken"],
        };
    }

    setTokens(tokens: TokensDto) {
        window.localStorage["accessToken"] = tokens.accessToken;
        window.localStorage["refreshToken"] = tokens.refreshToken;
    } 

    removeTokens() {
        window.localStorage.removeItem("accessToken");
        window.localStorage.removeItem("refreshToken");
    }
}