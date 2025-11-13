import { createUser, updateUser, deleteUser, findAllUsers, findUserById, findUserByTelefone } from '../repositories/user.repository'
import { CreateUserDTO, UpdateUserDTO } from '../dtos/user.dto'

export const createUserService = async (data: CreateUserDTO) => {
    const user = await findUserByTelefone(data.telefone)
    if(user) throw new Error('Telefone já cadastrado!')

    return await createUser(data)
}

export const updateUserService = async (p0: string, data: UpdateUserDTO) => {
    const user = await findUserByTelefone(data.telefone)
    if(!user) throw new Error ('Usuário não encontrado!')

        return await updateUser(data)
}

export const findAllUsersService = async () => {
    return await findAllUsers()
}

export const findUserByIdService = async (id: number) => {
    return await findUserById(id)
}

export const findUserByTelefoneService = async (telefone: string) => {
    return await findUserByTelefone(telefone)
}

export const deleteUserService = async (telefone: string, body: any) => {
    const user = await findUserByTelefone(telefone)

    if(!user) throw new Error('Usuário não encontrado!')

    return await deleteUser(telefone)
}