/* eslint-disable no-console */
import express from 'express';

console.log('starting up...');

export const hello = (recipient: string, log: (...args: unknown[]) => void) =>
  log(`Hello ${recipient}`);

const app = express();
const port = 3000;

app.get('/', (_req, res) => {
  const recipient = 'monkey';
  hello(recipient, console.log);

  res.send(`Hello ${recipient}`);
});

console.log('...finished');

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
if (import.meta.env.PROD) {
  app.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });
}

export const expressApp = app;
