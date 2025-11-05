export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Log the full body for debugging
    console.log("Webhook POST received! Body:", req.body);

    if (req.body.event === "form_response") {
      // (Optional) Log answers specifically
      console.log("Answers:", req.body.form_response.answers);
      res.status(200).json({ received: true });
    } else {
      res.status(200).json({ message: "Ignored non-form_response event" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}