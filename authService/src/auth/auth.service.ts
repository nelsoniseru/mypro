import { Injectable,HttpException, HttpStatus,BadRequestException,Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom} from 'rxjs';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @Inject('ORDER_SERVICE')  private rabbitClient: ClientProxy
  ) {}
  async login() {
      const payload = { id:1, sub:"nel@gmail.com" };
      return {
        statusCode: 200,
        access_token: this.jwtService.sign(payload),
      };
  }



}
