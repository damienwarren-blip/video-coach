export const runtime = 'node'; // Ensures it runs on the server, not edge

export default function EnvViewerPage() {
  const dbUrl = process.env.DATABASE_URL;

  return (
    <div className="p-6 font-mono text-sm">
      <h1 className="text-2xl font-bold mb-4">🛠️ Environment Variable Viewer</h1>
      <p><strong>DATABASE_URL:</strong></p>
      <pre className="bg-gray-100 p-4 rounded break-words whitespace-pre-wrap">
        {dbUrl || '❌ Not set'}
      </pre>
    </div>
  );
}
