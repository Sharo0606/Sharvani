# Setup Guide

## Demo Mode
1. Extract the project ZIP.
2. Open `index.html` in a modern web browser.
3. Enter a question.
4. Click **Ask EduGenie**.

## Real Gemini Integration
A production version should use a backend endpoint such as `/api/gemini`.
The backend should securely store the Gemini API key and communicate with Google's Gemini service.

Do not place a private API key directly inside `index.html`, `app.js`, or other public frontend files.
