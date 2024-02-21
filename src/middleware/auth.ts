import { CandidateInstance } from "../models/candidate"
import { NextFunction, Request, Response } from 'express'
import { JwtPayload } from 'jsonwebtoken'
import { jwtService } from '../service/jwtService'
import { candidateService } from "../service/candidateService"



export interface AuthenticatedRequest extends Request {
  candidate?: CandidateInstance | null
}

export function ensureAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authorizationHeader = req.headers.authorization

  if (!authorizationHeader) {
    return res.status(401).json({ message: 'Não autorizado: nenhum token encontrado' })
  }

  const token = authorizationHeader.replace(/Bearer /, '')

  jwtService.verifyToken(token, (err, decoded) => {
    if (err || typeof decoded === 'undefined') {
      return res.status(401).json({ message: 'Não autorizado: token inválido' })
    }

    candidateService.findByEmail((decoded as JwtPayload).email).then(candidate => {
      req.candidate = candidate
      next()
    })
  })
  
}

