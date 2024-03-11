import { JwtPayload, Secret, sign, SignOptions, verify } from 'jsonwebtoken';

export default class JWT_TOKEN {
  private static secret: Secret = process.env.JWT_SECRET || 'secret';

  private static jwtOptions: SignOptions = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  static sign(payload: JwtPayload) {
    const token = sign(payload, this.secret, this.jwtOptions);

    return token;
  }

  static verify(token: string) {
    const payload = verify(token, this.secret) as JwtPayload;

    return payload;
  }
}
