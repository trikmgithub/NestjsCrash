import { IsNotEmpty } from "class-validator"

export class CreateCompanyDto {

    @IsNotEmpty({ message: 'Name khong duoc de trong' })
    name: string;

    @IsNotEmpty({ message: 'Password khong duoc de trong' })
    password: string

    @IsNotEmpty({ message: 'Description khong duoc de trong' })
    description: string

    @IsNotEmpty({ message: 'Logo không được để trống', })
    logo: string;
}
