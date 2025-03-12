import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { convertTemperature } from '../use-case/convert-temperature.js'
import { TEMPERATURES } from '../../types/temperatures.js'

export const converterTemperatureRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    '/convert-temperature',
    {
      schema: {
        tag: ['temperature'],
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
        },
      },
    },
    async (request, reply) => {
      const { from, to, value } = request.query

      const result = convertTemperature({ from, to, value })

      return reply.status(200).send({ value: result })
    }
  )
}
