import { Handler } from '@netlify/functions';

export const handler: Handler = async () => {
  const response = await fetch(
    `https://api.github.com/users/${process.env.USERNAME}/repos`,
    {
      headers: {
        Authorization: `token ${process.env.API_TOKEN}`,
      },
    },
  );
  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
