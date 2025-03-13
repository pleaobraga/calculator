import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { convertTemperature } from '../use-case/convert-temperature.ts'
import { TEMPERATURES } from '@repo/temperature-converter'

export const converterTemperatureRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    '/v1/convert-temperature',
    {
      schema: {
        tags: ['temperature'],
        description: 'Convert Temperature from One Scale to another',
        querystring: z.object({
          from: z.enum([
            TEMPERATURES.CELSIUS,
            TEMPERATURES.FAHRENHEIT,
            TEMPERATURES.KELVIN,
          ]),
          to: z.enum([
            TEMPERATURES.CELSIUS,
            TEMPERATURES.FAHRENHEIT,
            TEMPERATURES.KELVIN,
          ]),
          value: z.coerce.number(),
        }),
        response: {
          200: z.object({
            value: z.number(),
          }),
          500: z.object({
            error: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { from, to, value } = request.query

      try {
        const result = convertTemperature({ from, to, value })
        return reply.status(200).send({ value: result })
      } catch (e: any) {
        return reply.status(500).send({ error: e })
      }
    }
  )
}
