import { Router } from "express"
import { createUser, findAllUsers, deleteUser, findUserById, updateUser, findUserByTelefone } from "../controllers/user.controller"
import { validate } from "../middlewares/validate.middleware"
import { CreateUserDTO, UpdateUserDTO } from "../dtos/user.dto"

const router = Router()

router.post('/',validate(CreateUserDTO), createUser)
router.get('/', findAllUsers)
router.get('/telefone/:telefone', findUserByTelefone)
router.get('/:id', findUserById)
router.delete('/:telefone', deleteUser)
router.patch('/:telefone', validate(UpdateUserDTO), updateUser)

export default router