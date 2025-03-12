# Backend Challenge - Temperature Converter API

## Introduction

The "Temperature Converter API" challenge is designed to create a REST API that converts temperatures between different units (e.g., Celsius, Fahrenheit, Kelvin).

### Objectives

- Set up a web server capable of handling API requests.
- Implement endpoints for converting temperatures between different units.
- Understand HTTP methods (GET) and status codes.

### Instructions

1. **Objective**: Develop a REST API that converts temperatures between various units.

2. **Environment Setup**: Choose your preferred programming language (e.g., JavaScript, Python, Java, C#) and set up the necessary environment.

3. **Implementation Details**:

   - Define endpoints for handling temperature conversion:
     - `GET /convert?from={unit}&to={unit}&value={temperature}`: Convert a specific temperature from one unit to another.
       - Supported units: `Celsius`, `Fahrenheit`, `Kelvin`.
       - Example: `GET /convert?from=Celsius&to=Fahrenheit&value=100` should return `212` (since 100°C is 212°F).
   - Implement logic to perform the conversion calculations:
     - Celsius to Fahrenheit: `(C × 9/5) + 32`
     - Fahrenheit to Celsius: `(F − 32) × 5/9`
     - Celsius to Kelvin: `C + 273.15`
     - Kelvin to Celsius: `K − 273.15`
     - Fahrenheit to Kelvin: `(F − 32) × 5/9 + 273.15`
     - Kelvin to Fahrenheit: `(K − 273.15) × 9/5 + 32`
   - Return the converted temperature as JSON in the response.

4. **Testing**: Test your API using an HTTP client (e.g., Postman, curl).
   - Send requests to the `/convert` endpoint with various combinations of units and temperatures.
   - Verify that the responses contain the expected converted temperature and that status codes are appropriate (e.g., 200 OK, 400 Bad Request).

### Possible Improvements

- **Support Additional Units**: Add support for other temperature units such as `Rankine`.
- **Batch Conversion**: Implement an endpoint that allows conversion of multiple temperature values in one request.
- **Error Handling**: Enhance error messages and responses, especially for invalid units or non-numeric temperature values.
- **Unit Detection**: Allow the API to detect the unit from the input value (e.g., `100C`, `212F`) and convert it accordingly.
- **UI Integration**: Build a simple frontend or UI component that interacts with this API for users to easily convert temperatures.

## Conclusion

By completing this challenge, you will gain practical experience in developing a temperature converter API and learn essential practices for backend development. Explore additional improvements and challenges to further enhance your skills.

Happy coding!
