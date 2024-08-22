import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";


@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
    constructor(private readonly jwtService: JwtService) { }

    async use(request, response, next) {
        const authorization = request.headers.authorization;

        if (!authorization) {
            throw new UnauthorizedException('Authorization header is missing');
        }
console.log(authorization)
        const token = authorization.split(' ')[1];

        if (!token) {
            throw new UnauthorizedException('Token is missing');
        }

        try {
            const claims = await this.jwtService.verifyAsync(token);
            request.user = claims.id;
        } catch (error) {
            throw new UnauthorizedException('Invalid token');
        }

        next();
    }
}
