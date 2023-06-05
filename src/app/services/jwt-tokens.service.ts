import TokensDto from '@src/app/models/dtos/tokes.dto-model';

export class JwtTokensService implements ITokensService {
    getTokens(): TokensDto {
        return {
            accessToken: window.localStorage['accessToken'],
            refreshToken: window.localStorage['refreshToken'],
        };
    }

    setTokens(tokens: TokensDto): void {
        window.localStorage['accessToken'] = tokens.accessToken;
        window.localStorage['refreshToken'] = tokens.refreshToken;
    }

    removeTokens(): void {
        window.localStorage.removeItem('accessToken');
        window.localStorage.removeItem('refreshToken');
    }

    validateTokens(): boolean {
        return this.validateTokensExistance();
    }

    private validateTokensExistance(): boolean {
        return (
            window.localStorage['accessToken'] !== undefined &&
            window.localStorage['refreshToken'] !== undefined
        );
    }
}

export interface ITokensService {
    getTokens(): TokensDto;
    setTokens(tokens: TokensDto): void;
    removeTokens(): void;
    validateTokens(): boolean;
}
