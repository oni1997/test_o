# Math Quiz App

A simple, interactive web-based math quiz application built with Flask and JavaScript, designed for deployment on Vercel.

## Features

- Generates random addition questions
- Provides multiple-choice answers
- Responsive design for desktop and mobile devices
- Easy deployment to Vercel's serverless platform

## Tech Stack

- Backend: Flask (Python)
- Frontend: HTML, CSS, JavaScript
- Deployment: Vercel

## Local Development Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-username/math-quiz-app.git
   cd math-quiz-app
   ```

2. Set up a virtual environment (optional but recommended):
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Run the application locally:
   ```
   python backend/backend.py
   ```

5. Open your browser and navigate to `http://localhost:5000`

## Deployment to Vercel

1. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```

2. From your project root, run:
   ```
   vercel
   ```

3. Follow the prompts to link your project to a Vercel account and project.

4. For subsequent deployments, use:
   ```
   vercel --prod
   ```

## Project Structure

```
math_quiz/
│
├── backend/
│   └── backend.py
│
├── frontend/
│   ├── script.js
│   └── style.css
│
├── templates/
│   └── index.html
│
├── .gitignore
├── README.md
├── requirements.txt
└── vercel.json
```

## Configuration

The `vercel.json` file in the root directory configures the Vercel deployment. It specifies the Python runtime and routes all requests to the Flask application.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

If you have any questions or feedback, please open an issue on the GitHub repository.

---

Happy quizzing and learning!