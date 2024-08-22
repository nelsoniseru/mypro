import { Injectable,HttpException, HttpStatus,BadRequestException,Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom} from 'rxjs';


@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @Inject('ORDER_SERVICE')  private rabbitClient: ClientProxy
  ) {}
  async login() {
      const payload = { id:1, sub:"e@gmail.com" };
      return {
        statusCode: 200,
        access_token: this.jwtService.sign(payload),
      };
  }



}
