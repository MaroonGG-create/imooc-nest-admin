import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import md5 from 'md5';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async login(username: string, password: string) {
    const user = await this.userService.findByUsername(username);
    console.log(user);
    const md5Password = md5(password).toUpperCase();
    if (user?.password !== md5Password) {
      throw new UnauthorizedException();
    }
    const payload = { username: username, userid: user?.id };
    const token = await this.jwtService.signAsync(payload);
    return {
      token,
    };
  }
}
