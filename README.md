## Getting Started

# 📊 Survey Grouper — Web UI (Next.js)

This is the **frontend UI** for uploading survey CSVs and running clustering/summarization analysis using the backend API.

Built with [Next.js](https://nextjs.org), it provides a simple interface for:

- Uploading a CSV file
- Selecting columns to analyze
- Toggling options like GPT summaries or clustering
- Sending everything to the FastAPI backend

---

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
# or yarn
````

Then run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the interface.

---

## 🧠 Features

### ✅ CSV Upload

* Upload `.csv` file containing survey data
* Supports “wide” (pivoted) format — one row per user

### ✅ Dynamic Column Selection

* Select the **Respondent ID** column
* Dynamically add one or more **question columns**
* Dropdowns auto-populate from CSV headers
* Prevents selecting the same column more than once
* Automatically adds a new dropdown when a column is chosen
* Removes extra dropdowns if columns are deselected

### ✅ Optional Toggles

* 🧠 GPT Summary (`do_gpt_summary`)
* 🧮 Clustering (`do_clustering`)

These are passed as form fields in the API request.

---

## 🧾 Form Submission

On submit, the frontend sends a `POST` request to:

```
POST /api/clustering/run
```

With form data:

* `file`: the CSV file
* `do_gpt_summary`: true/false (from checkbox)
* `do_clustering`: true/false (from checkbox)
* `format_version`: currently hardcoded to `"pivoted"`
* `column_config`: JSON string like:

```json
{
  "respondent_id": "user_id",
  "question_columns": ["Q1", "Q2", "Q3"]
}
```

---

## 📁 File Overview

```bash
app/
│
├── page.js           # Main UI — Upload form and logic
├── styles.css        # (If used) Basic styling
└── api/              # Optional frontend API routes (unused, backend is external)
```

---

## ⚠️ Note on Backend

The actual analysis logic lives in the **FastAPI Python backend**.

Make sure the backend is:

* Running at the expected base URL (e.g. `localhost:8000`)
* CORS is enabled (done already)
* Endpoint `/api/clustering/run` is available

If using **Vercel**, set up a proxy or middleware to forward `/api/clustering/run` to the backend server.

---

## 🌐 Deployment

Deploy with [Vercel](https://vercel.com/) or similar platforms.

To deploy:

1. Push your repo to GitHub
2. Connect it to Vercel
3. Configure any environment variables if needed (e.g., API base URL)

---

## 🛠️ Future Improvements

* [ ] Support long-format CSVs
* [ ] Upload history or result preview
* [ ] Progress bar or async polling
* [ ] Field validation
* [ ] Dark mode 🌒

---

## 👥 Credits

Frontend built by **Viorel Mirea**
Connects to backend powered by FastAPI + clustering + GPT summarization logic.

