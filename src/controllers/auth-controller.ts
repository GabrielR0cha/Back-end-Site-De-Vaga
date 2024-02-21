
import { Request, Response } from 'express'
import { candidateService } from '../service/candidateService'
import { jwtService } from '../service/jwtService'

export const authController = {
  register: async (req: Request, res: Response) => {
    const { name, bio,curriculum, phone, birth, email, password,openToWork } = req.body

    try {
      const candidateExist = await candidateService.findByEmail(email)

      if (candidateExist) {
        throw new Error('Este e-mail já está cadastrado.')
      }

      const candidate = await candidateService.create({
        name,
        birth,
        curriculum,
        bio,
        phone,
        email,
        password,
        openToWork,
        role: 'user'
      })

      return res.status(201).json(candidate)

    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },
  
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body

    try {
      const candidate = await candidateService.findByEmail(email)

      if (!candidate) {
        return res.status(401).json({ message: 'E-mail não registrado' })
      }

      candidate.checkPassword(password, (err, isSame) => {
        if (err) {
          return res.status(400).json({ message: err.message })
        }

        if (!isSame) {
          return res.status(401).json({ message: 'Senha incorreta' })
        }

				const payload = {
          id: candidate.id,
          name: candidate.name,
          email: candidate.email
        }

        const token = jwtService.signToken(payload, '7d')

        return res.json({ authenticated: true, ...payload,token })
      })
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}

