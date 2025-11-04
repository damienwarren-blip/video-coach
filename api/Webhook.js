// api/hello.js (rename to api/videoask-webhook.js for clarity)
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const payload = req.body;

    // Optionally, check VideoAsk signature for security (see their docs)

    if (payload.event === "form_response") {
      const answers = payload.form_response.answers;
      // Here you can:
      // - Save the answers to a database
      // - Immediately analyze with OpenAI
      // - Or queue for later processing

      // Logging for debug (remove later)
      console.log("Received answers:", answers);

      res.status(200).json({ received: true });
    } else {
      res.status(200).json({ message: "Ignored non-form_response event" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}