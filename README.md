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

## Author
Shubham 