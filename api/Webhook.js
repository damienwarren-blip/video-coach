import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Extract answers
      const answersRaw = req.body?.contact?.answers || [];
      const plainAnswers = answersRaw.map(ans =>
        ans.input_text ?? ans.input_number ?? ans.input_choice ?? null
      ).filter(v => v !== null);

      if (plainAnswers.length === 0) {
        return res.status(200).json({ message: "No answers to analyze" });
      }

      // Analyze with OpenAI
      const prompt = `You are an customer consultant reviewing customer survey responses. For each question, do the following:
1. Summarize the reasons ("the why") given in the responses.
2. If the answers include numeric ratings, calculate the average.
3. Given the analysis, suggest concrete next steps for management.

Here are the responses:
${plainAnswers.map((ans, idx) => `${idx + 1}. ${ans}`).join('\n')}

Format your report as:
- Why (summary):
- Average (if applicable):
- Next steps for management:
`;

      const completion = await openai.createChatCompletion({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      });

      const analysis = completion.data.choices[0].message.content;

      // Return the analysis immediately
      res.status(200).json({ 
        success: true,
        answers: plainAnswers,
        analysis: analysis,
        timestamp: new Date().toISOString()
      });

    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: "Analysis failed", message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}