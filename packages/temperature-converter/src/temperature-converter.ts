export function celsiusToFahrenheit(c: number) {
  return (c * 9) / 5 + 32
}

export function fahrenheitToCelsius(f: number) {
  return ((f - 32) * 5) / 9
}

export function celsiusToKevin(c: number) {
  return c + 273.15
}

export function kevinToCelsius(k: number) {
  return k - 273.15
}

export function fahrenheitToKevin(f: number) {
  return ((f - 32) * 5) / 9 + 273.15
}

export function kevinToFahrenheit(k: number) {
  return ((k - 273.15) * 9) / 5 + 32
}
