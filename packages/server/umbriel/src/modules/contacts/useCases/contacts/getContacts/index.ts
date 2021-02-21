import { PrismaContactRepo } from '@modules/contacts/infra/prisma/PrismaContactRepo'

import { GetContactsController } from './GetContactsController'
import { GetContactsUseCase } from './GetContactsUseCase'
import { PrismaContactSubscriptionsRepo } from '@modules/contacts/infra/prisma/PrismaContactSubscriptionsRepo'

const prismaContactSubscriptionRepo = new PrismaContactSubscriptionsRepo()
const prismaContactRepo = new PrismaContactRepo(prismaContactSubscriptionRepo)

const getContactsUseCase = new GetContactsUseCase(prismaContactRepo)
const getContactsController = new GetContactsController(getContactsUseCase)

export { getContactsUseCase, getContactsController }
