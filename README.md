## ForeCast Generation Analysis Web App

# This is a full stack application made in Next.js to analyse the actual wind generation power and forecast wind generation power

# The web app displays a component dashboard in which user can add date and time for the month of January 2024 and can set the horizon also and can visualise forecast vs actual generation.

This repo contains two folders "web" and "analysis":
1.web => This is the root folder for nextjs app.
2.analysis => This contains a jupyter notebook used for data analysis.

## Repository Structure

```
forecast-webapp
├── web/ # Next.js application
│ ├── app/ # App router pages
│ ├── components/ # Reusable UI components
│ ├── lib/ # Helper utilities
│ ├── public/ # Static assets
│ └── package.json
│
├── analysis/ # Jupyter notebook analysis
│ └── analysis.ipynb
│
├── README.md
└── .gitignore
```

## Getting Started

Go to the root folder and install dependencies:

```bash
cd web
npm install
```

run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Live Application

Vercel Deployment:  
[https://forecast-web-app-n2nu.vercel.app/](https://forecast-web-app-n2nu.vercel.app/)
