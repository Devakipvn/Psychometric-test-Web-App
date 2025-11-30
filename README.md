# 🚀 Psychometric Test Web App

[![Website](https://img.shields.io/badge/Live-Demo-brightgreen)](https://my-portfolio-two-omega-80.vercel.app/)  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)  ![Made with HTML, CSS & JS](https://img.shields.io/badge/Tech-HTML%20|%20CSS%20|%20JS-orange)

A lightweight, responsive psychometric test web application built with **HTML, CSS, JavaScript** and **Bootstrap**. Users can take a short test, get an immediate score, and receive resource suggestions when they score average or above — all in the browser (no backend required).

---

## ✅ TL;DR
- Browser-only psychometric test (no server or DB)  
- Instant scoring + tailored suggestions  
- Mobile-friendly UI using Bootstrap  
- Easy to customize questions and resources

---

## 📌 Features
- ✅ Multiple-choice psychometric questions  
- 📊 Real-time score calculation and immediate feedback  
- 🎯 Tailored suggestions and learning roadmaps for average/above-average scores  
- 🔁 Restart the test anytime  
- 📱 Fully responsive with Bootstrap  
- ⚡ No dependencies — loads and runs in any modern browser

---

## 🛠️ Tech Stack
<p>
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
  <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white" />
</p>

---

## 🚀 Quick Start

**1. Clone the repo**
```bash
git clone https://github.com/<your-username>/psychometric-test-app.git
cd psychometric-test-app
```

2. Open locally
Open **index.html** in a browser (double-click or right-click → Open with).

3. (Optional) Serve with a local static server
```bash
# using Python 3
python -m http.server 5500
# then open http://localhost:5500
```

## 🧭 **How It Works (User Flow)**

- User opens the homepage and clicks Start Test.
- A sequence of multiple-choice questions is shown.
- On submit, the app calculates the total score from selected options.
- The app displays feedback:
     - Below Average — motivational message + tips.
     - Average / Above Average — resources & roadmaps tailored to the score.   
- User can restart the test any time.

# 📂 Folder Structure 

```
psychometric-test-app/
├── index.html
├── style.css
├── script.js
├── assets/
│   └── (optional images/icons)
└── README.md
```

## ⚙️ Customize Questions & Suggestions

- Edit **script.js** → the questions array to add/edit questions/options.
- Edit the suggestions object (or function) to change resources and roadmaps for each score bracket.
- Tweak styles in **style.css** for colors, spacing, and visual theme.

# 📸 Screenshots
**Home**
![Screenshot (1)](https://github.com/user-attachments/assets/c969a832-537d-4ced-a049-7e5b07f74a3b)
**Registration**
![Screenshot (2)](https://github.com/user-attachments/assets/28dd24ac-cac5-4a54-b6d5-044ff35faf78)
**MockUP 1**
![Screenshot (3)](https://github.com/user-attachments/assets/7f519f67-a96e-426a-9258-4783dfbc17ee)
**MockUp 2**
![Screenshot (4)](https://github.com/user-attachments/assets/35b148c5-8c1c-4287-b0e6-c6dbe97788a4)
**Quiz Section**
![Screenshot (5)](https://github.com/user-attachments/assets/2e41a9dd-1885-4631-9c87-47e7e4c83ee9)
**Results, Suggestions & Resources**
![Screenshot (6)](https://github.com/user-attachments/assets/307439c0-faa0-4ce3-ae6f-8c9ce580a46a)


# 🧪 Demo


# 🧑‍💻 Author
Devaki PVN

📧 Email: devakipvn@gmail.com

🔗 LinkedIn :https://www.linkedin.com/in/pvndevaki/

# MIT License

Copyright (c) 2025 Devaki PVN

Permission is hereby granted, free of charge, to any person obtaining a copy  
of this software and associated documentation files (the "Software"), to deal  
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all  
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  
SOFTWARE.
