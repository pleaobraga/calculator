import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { operationDivide } from '../use-case/operation-divide.ts'

export const operationDivideRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    '/v1/operation-divide',
    {
      schema: {
        tags: ['operation'],
        description: 'Divide numbers operation',
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

      try {
        const result = operationDivide(numbers)
        reply.status(200).send({ result })
      } catch (e: any) {
        reply.status(500).send({ error: e })
      }
    }
  )
}
