import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { operationAdd } from '../use-case/operation-add.ts'

export const operationAddRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    '/operation-add',
    {
      schema: {
        tags: ['operation'],
        description: 'Sum numbers operation',
        body: z.object({
          numbers: z.array(z.number()),
        }),
        response: {
          200: z.object({
            result: z.number(),
          }),
          500: z.object({
            error: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { numbers } = request.body

      const result = operationAdd(numbers)

      reply.status(200).send({ result })
    }
  )
}
