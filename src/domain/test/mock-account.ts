import { AuthenticationParams } from '@/domain/usecases/authentication'
import faker from 'faker'
import { AccountModel } from '@/domain/models/account-model'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  senha: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid()
})
