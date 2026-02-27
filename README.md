# 🎓 CampusAI – Domain-Specific GenAI Assistant

CampusAI is a full-stack AI platform that provides domain-specific assistance for students, developers, and startup founders.

It is built using:

- **Frontend:** Next.js + Tailwind CSS (Deployed on Vercel)
- **Backend:** FastAPI (Deployed on Render)
- **LLM:** Groq API (LLaMA 3.3 70B)

---

## 🌐 Live Links

**Frontend:**  
https://campus.prajwallshetty.me/

**Backend:**  
https://workshop-capstone.onrender.com

---

## 🚀 Features

CampusAI includes multiple intelligent AI modes:

- 🎓 Academic Assistance  
- 💼 Placement Preparation AI  
- 📄 Research Paper Explainer  
- 💻 Coding Debug Assistant  
- 🚀 Startup Idea Evaluator  

Each mode uses structured prompt engineering to generate focused, domain-specific responses.

---

## 🏗 System Architecture

```
Frontend (Next.js - Vercel)
        ↓
Backend (FastAPI - Render)
        ↓
Groq LLM API
```

---

## 📦 Backend Structure

```
backend/
│
├── main.py
├── ai_engine.py
├── prompts.py
├── requirements.txt
└── .env
```

### Backend Responsibilities

- Mode-based prompt handling  
- Groq API integration  
- CORS configuration for production  
- REST API endpoint `/chat`  

---

## 📦 Frontend Structure

```
frontend/
│
├── app/
│   └── page.tsx
├── services/
│   └── api.ts
├── components/
├── package.json
└── tailwind.config.js
```

### Frontend Responsibilities

- Chat-style UI  
- Mode selection sidebar  
- API integration  
- SaaS-style responsive layout  

---

## 🔑 API Endpoint

### POST `/chat`

### Request Body

```json
{
  "mode": "academic",
  "query": "Explain normalization in DBMS"
}
```

### Response

```json
{
  "mode": "academic",
  "response": "Generated AI response"
}
```

---

## 🛠 Local Development Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/campus-ai.git
cd campus-ai
```

---

### 2️⃣ Backend Setup

```bash
cd backend
pip install -r requirements.txt
```

Create `.env` file:

```
GROQ_API_KEY=your_groq_api_key
```

Run backend:

```bash
uvicorn main:app --reload
```

Backend runs at:

```
http://localhost:8000
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:3000
```

---

## 🔐 Environment Variables

### Frontend (Vercel)

```
NEXT_PUBLIC_API_URL=https://workshop-capstone.onrender.com
```

### Backend (Render)

```
GROQ_API_KEY=your_groq_api_key
```

---

## 🌍 Deployment

### Frontend
- Hosted on Vercel
- Custom subdomain:

```
https://campus.prajwallshetty.me/
```

### Backend
- Hosted on Render:

```
https://workshop-capstone.onrender.com
```

---

## 🧠 Technical Highlights

- Full-stack AI architecture  
- Modular prompt engineering  
- Cloud deployment (Vercel + Render)  
- Production-ready CORS configuration  
- Domain-based AI specialization  

---

## 📈 Future Enhancements

- User Authentication (JWT)
- Chat History Storage (MongoDB / PostgreSQL)
- Streaming AI Responses
- Usage Tracking & Analytics
- File Upload for Research Papers
- Resume Analyzer Integration
- Subscription-based SaaS Model

---

## 👨‍💻 Author

**Prajwal Shetty**  
Full-Stack Developer | AI Enthusiast | Startup Builder  

---

## ⭐ Support

If you find this project useful, consider giving it a ⭐ on GitHub.
