import { TEMPERATURES } from "@repo/temperature-converter";

export type Operator = '+' | '-' | '/' | '*'

export type TemperatureUnit = typeof TEMPERATURES[keyof typeof TEMPERATURES];

