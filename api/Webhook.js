export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Print the full payload to Vercel logs
    console.log('VIDEOASK WEBHOOK RECEIVED:', JSON.stringify(req.body, null, 2));
    res.status(200).json({ message: "Logged webhook body" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}