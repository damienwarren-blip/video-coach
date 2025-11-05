export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Extract answers safely (most VideoAsk forms: contact.answers array)
    const answersRaw = req.body?.contact?.answers || [];
    // Grab just the answer values (works for text/number)
    const plainAnswers = answersRaw.map(ans =>
      ans.input_text ??
      ans.input_number ??
      ans.input_choice ??
      ans.input_choices ??
      null
    ).filter(v => v !== null);
    // NOW: Only log the short answers array
    console.log('VIDEOASK plain answers:', JSON.stringify(plainAnswers));
    res.status(200).json({ message: "Logged plain answers only", plainAnswers });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}