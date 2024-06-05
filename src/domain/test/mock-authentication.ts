import { AuthenticationParams } from '../usecases/authentication'
import faker from 'faker'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  senha: faker.internet.password()
})
