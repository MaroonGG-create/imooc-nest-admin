import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { Public } from './public.decorator';
import { AuthService } from './auth.service';
import { HttpExceptionFilter } from '../../exception/http-exception.filter';
import { wrapperResponse } from '../../utils';
interface LoginDto {
  username: string;
  password: string;
}
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Public()
  @Post('login')
  @UseFilters(new HttpExceptionFilter())
  async login(@Body() params: LoginDto) {
    const data = await this.authService.login(
      params.username,
      params.password,
    );
    return wrapperResponse(data, '登录成功');
  }
  }
