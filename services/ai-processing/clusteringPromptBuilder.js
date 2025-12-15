export function buildReclusteringPrompt({
  questionId,
  themes,
  instruction,
}) {
  return `
You are re-clustering customer survey responses.

Question:
${questionId}

Current Themes:
${themes.map(t => `- ${t.title}: ${t.summary}`).join('\n')}

Instruction:
${instruction}

Return a revised clustering in JSON using the same schema.
`
}
