import { defineConfig, type Options } from 'tsup'
import dotenv from 'dotenv'

dotenv.config()

const defaultPort = '3001'

export default defineConfig((options: Options) => ({
  entryPoints: ['src/http/server.ts'],
  clean: true,
  format: ['cjs'],
  env: {
    PORT: process.env.PORT ?? defaultPort,
  },
  ...options,
}))
