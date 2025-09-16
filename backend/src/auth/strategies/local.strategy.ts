import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {   
  constructor(private authService: AuthService) {
    super({
      usernameField: 'regId',  
      passwordField: 'password',
    });
  }

  async validate(regId: string, password: string) {
    return await this.authService.validateUser({ regId , password });
  }
}