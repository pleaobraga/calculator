import fastify from 'fastify'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'

import { fastifyCors } from '@fastify/cors'
import { converterTemperatureRoute } from './routes/converter-temperature-route.js'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import { operationSubtractRoute } from './routes/operation-subtract-route.ts'
import { operationAddRoute } from './routes/operation-add-route.ts'
import { operationDivideRoute } from './routes/operation-divide-route.ts'
import { operationMultiplyRoute } from './routes/operation-multipy-route.ts'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Calculator',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

app.register(converterTemperatureRoute)
app.register(operationAddRoute)
app.register(operationSubtractRoute)
app.register(operationDivideRoute)
app.register(operationMultiplyRoute)

const PORT = process.env.PORT ?? 3001

app.listen({ port: Number(PORT), host: '0.0.0.0' }, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  console.log(`🚀 Server is running at ${address}`)
})
