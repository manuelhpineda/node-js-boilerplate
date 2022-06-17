/* eslint-disable max-classes-per-file */

type ErrorData = { [key: string]: any };

export class CustomError extends Error {
  constructor(
    public message: string,
    public code: string | number = 'INTERNAL_ERROR',
    public status: number = 500,
    public data: ErrorData = {}
  ) {
    super()
  }
}

export class RouteNotFoundError extends CustomError {
  constructor(originalUrl: string) {
    super(`Route '${originalUrl}' does not exist.`, 'ROUTE_NOT_FOUND', 404)
  }
}

export class EntityNotFoundError extends CustomError {
  constructor(entityName: string) {
    super(`${entityName} not found.`, 'NOT_FOUND', 404)
  }
}

export class BadUserInputError extends CustomError {
  constructor(errorData: ErrorData) {
    super('There were validation errors.', 'BAD_USER_INPUT', 422, errorData)
  }
}

export class ConflictFoundError extends CustomError {
  constructor(errorMessage: string) {
    super(`${errorMessage}`, 'CONFLICT_FOUND', 409)
  }
}

export class InvalidTokenError extends CustomError {
  constructor(message = 'Authentication token is invalid') {
    super(message, 'INVALID_TOKEN', 401)
  }
}

export class CreateError extends CustomError {
  constructor(message: string, code: string, status: number, errorData?: ErrorData) {
    super(message, code, status, errorData)
  }
}
