export default function ClusteringUploadPage() {
  return (
    <div className="p-10 max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Upload Survey for Clustering</h1>

      <form
        action="/api/clustering/run"
        method="POST"
        encType="multipart/form-data"
        className="space-y-4"
      >
        <input type="file" name="file" required />

        <label className="block">
          <input type="checkbox" name="do_gpt_summary" value="true" defaultChecked />
          <span className="ml-2">Generate GPT Summary</span>
        </label>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Run Clustering
        </button>
      </form>
    </div>
  )
}
