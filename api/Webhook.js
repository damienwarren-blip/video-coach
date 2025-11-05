export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let rawBody = '';
    req.on('data', chunk => {
      rawBody += chunk;
    });
    req.on('end', () => {
      const body = JSON.parse(rawBody || '{}');
      res.status(200).json({ echo: body });
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}