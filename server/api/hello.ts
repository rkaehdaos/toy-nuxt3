import type {IncomingMessage, ServerResponse} from "http";

// async : 비동기
export default async (req: IncomingMessage, res: ServerResponse) => {
  res.statusCode=200;
  const result = {
      data: "Hello World!",
  };
    res.end(JSON.stringify(result));
};