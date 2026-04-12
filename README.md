#  India Current Affairs Web App

## Description
This is a web application that shows the latest India-related current affairs using a news API. It fetches real-time data and displays it in a clean UI.

## Features
- View latest news  
- Search news  
- Filter news  
- Sort news (A-Z, latest)  
- Responsive design  

## Tech Used
- HTML  
- CSS  
- JavaScript  
- Fetch API  

## API Used
GNews API (https://gnews.io/)

## Live Project
(Add your deployed link here)

## How to Run
1. Open project folder
2. Add `GNEWS_API_KEY` as an environment variable for your deployment
   - Vercel: add `GNEWS_API_KEY` in Project Settings > Environment Variables
   - Netlify: add `GNEWS_API_KEY` in Site Settings > Build & deploy > Environment
3. Deploy the site to Vercel or Netlify

## Local development
This project uses a serverless proxy endpoint to avoid CORS and hide the API key.
- Vercel endpoint: `/api/fetch-news`
- Netlify endpoint: `/.netlify/functions/fetch-news`

Use Netlify CLI for local testing:
```bash
npm install -g netlify-cli
netlify dev
```
Or, if you have `npm` installed, run:
```bash
npm run dev
```
Then open the Netlify dev URL (usually `http://127.0.0.1:8888`).

If you are using a static preview server like Live Server on port 5500, the Netlify function route will not work.

## Environment variables
- Production: set `GNEWS_API_KEY` in deployment settings
  - Vercel: Project Settings > Environment Variables
  - Netlify: Site Settings > Build & deploy > Environment
- Local: copy `.env.example` to `.env` and add your key
  - Netlify CLI loads `.env` automatically
  - Vercel CLI loads `.env.local` automatically

## Author
Shubham 