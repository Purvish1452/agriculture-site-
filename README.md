# 🌾 Agriculture Website (MERN Stack)

A full-stack agriculture platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js) to help farmers and users access modern agricultural solutions, crop insights, and farming guidance.

---

## 📌 Overview

This project is designed to bridge the gap between traditional farming and modern technology. It provides a digital platform where users can explore crop-related information, improve farming techniques, and make better agricultural decisions.

---

## 🚀 Features

* 🌱 Crop Information & Guidance
* 🔍 Search & Filter Crops
* 👨‍🌾 Farmer-friendly UI
* 🔐 User Authentication (Login/Register)
* 📊 Dashboard (if implemented)
* 🌦️ Weather Integration (optional)
* 📱 Fully Responsive Design
* 🔄 REST API Integration

---

## 🛠️ Tech Stack

### 🌐 Frontend

* React.js
* HTML5
* CSS3 

### ⚙️ Backend

* Node.js
* Express.js

### 🗄️ Database

* MongoDB (with Mongoose)

---

## 📁 Project Structure

```
agriculture-site/
│
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│
├── server/                 # Backend (Node + Express)
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   └── server.js
│
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Purvish1452/agriculture-site-.git
cd agriculture-site-
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create a `.env` file in the `server` folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm start
```

---

### 3️⃣ Setup Frontend

```bash
cd client
npm install
npm start
```

---

### 4️⃣ Open in Browser

```
http://localhost:3000
```

---

## 🔌 API Endpoints (Example)

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |
| GET    | /api/crops         | Get crop data |
| POST   | /api/crops         | Add crop info |

---

## 🎯 Objectives

* Digitize agricultural knowledge
* Help farmers make better decisions
* Provide easy access to crop data
* Promote smart farming techniques

---

## 📸 Screenshots

### 🏠 Landing Page
![Landing Page](https://github.com/user-attachments/assets/d245d5e0-03d4-469a-8090-aa78bb95c269)

### 🌱 Crop Parameter Page
![Crop Parameter Page](https://github.com/user-attachments/assets/2ef0c170-4dac-436a-acbc-d1f120d86ced)

### 🌾 Crop Recommendation 
![Crop Recommendation Page](https://github.com/user-attachments/assets/d1517d1b-b0ff-4460-b0e1-4f6a82cd1fe8)

### 📊 Parameter Summary
![Parameter Summary](https://github.com/user-attachments/assets/ba77fcf7-e8ac-412b-b8bf-daebdf61da41)

### 🧪 Fertilization Suggestion
![Fertilization Suggestion](https://github.com/user-attachments/assets/7349e1b3-fecd-4e1d-99d3-5f0ad970007b)




---

## 🔮 Future Enhancements

* 🤖 AI-based crop recommendation system
* 🌦️ Live weather API integration
* 🛰️ IoT-based smart farming
* 📊 Advanced analytics dashboard
* 📱 Mobile app version

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---



* GitHub: https://github.com/Purvish1452

---

## ⭐ Support

If you like this project, please ⭐ star the repository!

---
