import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    @Inject()
    private userService: UserService;

    async validateUser(username: string, password: string) {
        const user = await this.userService.findOne(username);

        if (!user) {
            throw new UnauthorizedException();
        }

        if (user.password !== password) {
            throw new UnauthorizedException();
        }
        const { password: pass, ...result } = user;

        return result;
    }
}
