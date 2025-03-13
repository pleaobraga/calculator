import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { operationSubtract } from '../use-case/operation-subtract.ts'

export const operationSubtractRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    '/v1/operation-subtract',
    {
      schema: {
        tags: ['operation'],
        description: 'Subtract numbers operation',
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

      const result = operationSubtract(numbers)

      reply.status(200).send({ result })
    }
  )
}
