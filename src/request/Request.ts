export class Request {
  url?: string;
  body?: RequestInit;
  public async get(url: string, body?: RequestInit) {
    this.url = String(url);
    this.body = body as RequestInit;
    const request = await fetch(url, {
      ...body,
    });

    const response = await request.json();
    return response;
  }
}
