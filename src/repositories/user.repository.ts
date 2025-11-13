import User from '../entities/user.entity'
import { CreateUserDTO, UpdateUserDTO } from '../dtos/user.dto'

export const createUser = async (data: CreateUserDTO) => {
    return User.create({data})
}

export const findUserByTelefone = async (telefone: string) => {
    return User.findFirst({where: {telefone}})
}

export const findAllUsers = async () => {
    return User.findMany()
}

export const updateUser = async (data: UpdateUserDTO) => {
    return User.update({where: {telefone: data.telefone}, data})
}

export const deleteUser = async (telefone: string) => {
    return User.delete({where: {telefone}})
}

export const findUserById = async (id: number) => {
    return User.findFirst({where: {id}})
}