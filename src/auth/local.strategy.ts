import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { Injectable } from "@nestjs/common";
import { Strategy } from "passport-local";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    
    constructor(private authService: AuthService) {
        super();
    }

    async validate(username: string, password: string) {
        const user = await this.authService.validateUser(username, password);
        return user;
    }
}