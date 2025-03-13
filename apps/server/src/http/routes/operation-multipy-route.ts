import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { operationMultiply } from '../use-case/operation-multiply.ts'

export const operationMultiplyRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    '/v1/operation-multiply',
    {
      schema: {
        tags: ['operation'],
        description: 'Multiply numbers operation',
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

      const result = operationMultiply(numbers)

      reply.status(200).send({ result })
    }
  )
}
