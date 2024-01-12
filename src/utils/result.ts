enum Code {
  OK = 200,
}

export default class Result<T = any> {
  code: Code;
  message: string;
  data: T;

  constructor(code: Code, message: string, data: T) {
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
