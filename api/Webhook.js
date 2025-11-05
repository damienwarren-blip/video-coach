export default async function handler(req, res) {
  if (req.method === 'POST') {
    if (req.body.event_type === "form_response") {
      const answersRaw = req.body.contact?.answers || [];

      // Extract only the direct human input, regardless of the underlying field
      const plainAnswers = answersRaw.map(ans => 
        ans.input_text ??
        ans.input_number ??
        ans.input_choice ??
        ans.input_choices ?? // array for multi-select, you could join(', ')
        null // fallback if answer is empty
      ).filter(val => val !== null);

      console.log("Plain answers only:", plainAnswers);

      // You can now send plainAnswers to OpenAI, database, etc.
      res.status(200).json({ received: true, plainAnswers });
    } else {
      res.status(200).json({ message: "Ignored non-form_response event" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}