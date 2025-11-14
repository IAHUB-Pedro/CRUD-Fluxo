import { IsEmpty, IsNotEmpty, IsOptional, IsString, MinLength, MaxLength } from "class-validator";

export class CreateUserDTO {
    @IsString()
    @IsNotEmpty({message: 'O campo nome é obrigatório!'})
    @MinLength(3, {message: 'O campo nome deve ter no mínimo 3 caracteres!'})
    nome!: string

    @IsNotEmpty({message: 'O campo telefone é obrigatório!'})
    @MinLength(13, {message: 'O campo telefone deve ter 13 caracteres!'})
    @MaxLength(13, {message: 'O campo telefone deve ter 13 caracteres'})
    telefone!: string

    @IsOptional()
    status?:boolean
}

export class UpdateUserDTO {
    @IsString()
    @IsOptional()
    nome?:string

    @IsString()
    @MinLength(13, {message: 'O campo telefone deve ter 13 caracteres!'})
    @MaxLength(13, {message: 'O campo telefone deve ter 13 caracteres'})
    telefone!:string

    @IsOptional()
    status?:boolean
}