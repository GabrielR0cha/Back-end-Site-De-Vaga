
import { AuthenticationOptions } from '@adminjs/express'
import bcrypt from 'bcrypt'
import { Candidate } from '../models'

export const authtenticationOptions: AuthenticationOptions = {
  authenticate: async (email, password) => {
    const user = await Candidate.findOne({ where: { email } })
    console.log(user);

    if (user && user.role === 'admin') {
      const matched = await bcrypt.compare(password, user.password)
      console.log(password, user.password);
      console.log(matched);
      
      if (matched) {
        return user
      }
    }

    return false
  },
  cookiePassword: 'senha-do-cookie'
}