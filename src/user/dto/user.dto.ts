import { IsEmail, IsString, IsOptional} from 'class-validator';
export class UserDto {
    @IsOptional()
    @IsEmail({},{message: 'Введён некорректный емаил'})
    email: string

    @IsString({message: "В поле должна быть введена строка"})
    name: string

    @IsOptional()
    @IsString({message: "В поле должна быть введена строка"})
    number: string

    @IsString({message: "В поле должна быть введена строка"})
    comment
}