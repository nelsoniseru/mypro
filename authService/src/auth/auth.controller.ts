import { Controller, Post, Body,Inject,UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
   
    ) {}

  @Post('login')
   async login() {
    return this.authService.login();
  }

}
