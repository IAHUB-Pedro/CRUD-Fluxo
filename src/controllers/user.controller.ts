import { createUserService, findAllUsersService, deleteUserService, findUserByIdService, updateUserService, findUserByTelefoneService } from '../services/user.service'
import { Request, Response } from 'express'

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await createUserService(req.body)
        return res.status(201).json(user)
    } catch (error) {
        console.error('Erro no createUser:', error)
        return res.status(400).json({
            error: error instanceof Error ? error.message : 'Erro desconhecido',
            details: error
        })
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await updateUserService(String(req.params.telefone), req.body)
        return res.status(200).json(user)
    } catch (error) {
        console.error('Erro no updateUser:', error)
        return res.status(400).json({
            error: error instanceof Error ? error.message : 'Erro ao atualizar usuário',
            details: error
        })
    }
}

export const findAllUsers = async (req: Request, res: Response) => {
    const users = await findAllUsersService()
    return res.status(200).json(users)
}

export const findUserById = async (req: Request, res: Response) => {
    try {
        const user = await findUserByIdService(Number(req.params.id))
        return res.status(200).json(user)
    } catch (error) {
        console.error('Erro no findUserById:', error)
        return res.status(400).json({
            error: error instanceof Error ? error.message : 'Erro ao buscar usuário por ID',
            details: error
        })
    }
}

export const findUserByTelefone = async (req: Request, res: Response) => {
    try {
        const telefone = await findUserByTelefoneService(String(req.params.telefone))
        return res.status(200).json(telefone)
    } catch (error) {
        console.error('Erro no findUserByTelefone:', error)
        return res.status(400).json({
            error: error instanceof Error ? error.message : 'Erro ao buscar usuário por telefone',
            details: error
        })
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        await deleteUserService(String(req.params.telefone), req.body)
        return res.status(200).json({msg: 'Usuário deletado com sucesso!'})
        //204 para sucesso vazio e 200 para sucesso com retorno
    } catch (error) {
        console.error('Erro no deleteUser:', error)
        return res.status(400).json({
            error: error instanceof Error ? error.message : 'Erro ao deletar usuário',
            details: error
        })
    }
}