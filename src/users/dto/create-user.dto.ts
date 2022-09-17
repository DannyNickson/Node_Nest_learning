import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    example: "puchkovdd@gmail.com",
    description: "Почтовый адрес",
  })
  readonly email: string;
  @ApiProperty({ example: "12312314", description: "Пароль пользователя" })
  readonly password: string;
}
