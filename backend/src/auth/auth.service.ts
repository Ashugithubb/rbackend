import { ConflictException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { Request } from 'express';
import { HasingService } from 'src/hasing/hasing.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthJwtPayload } from './type/auth.payload';
import { UserService } from 'src/user/user.service';


@Injectable()
export class AuthService {
    constructor(private userService: UserService,
        private hasingService: HasingService,
        private jwtService: JwtService,
        private configService: ConfigService,) { }
        
    async validateUser({ regId, password }: { regId: string, password: string }) {
        const user = await this.userService.findOneByRegId(regId);
        if (!user) throw new UnauthorizedException("User regId not found");
        const matched = await this.hasingService.compare(password, user.password);
        if (!matched) throw new UnauthorizedException("Invalid password");
        return { regId: user.regId, role: user.role };
    }


    async login(payload: AuthJwtPayload, res: Response) {

        const token = await this.jwtService.sign(payload);
        res.cookie('access_token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 2 * 60 * 10000,
        });
        return {
            "msg": "Loged In Successfully"
        }
    }

}



