export class HttpClientError extends Error {
  name;
  statusCode;

  constructor(message, { statusCode }) {
    super(message);
    
    // Platform specific error fields
    this.name = this.constructor.name;
    this.statusCode = statusCode;
  }
}

export class BadRequestError extends HttpClientError {
  constructor(message) {
    super(message, { statusCode: 400 });
  }
}

export class NotFoundError extends HttpClientError {
  constructor(message) {
    super(message, { statusCode: 404 });
  }
}

export class ConflictError extends HttpClientError {
  constructor(message) {
    super(message, { statusCode: 409 });
  }
}

/**
 * An API Error
 * @typedef  {object} Error
 * @property {number} statusCode - The HTTP response status code
 * @property {string} message - The error description
 */
