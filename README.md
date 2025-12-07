# Interview Task - React Navigation App

A React application with two navigation screens built using React Router and Tailwind CSS.

## Prerequisites

- Node.js (v16 or higher)
- npm

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Routes

- `/s1` - Tax Year & Quarter Ending form
- `/s2` - Environmental Taxes table

## Features

**Screen 1 (/s1)**
- Form with business name, form type, tax year, and quarter selection
- Required field validation
- Navigates to Screen 2 on submit

**Screen 2 (/s2)**
- Dynamic table for environmental taxes data
- Add/delete rows functionality
- "No excise" checkbox to disable inputs
- Multiple action buttons (Save, Proceed to Summary, Proceed to Deposit)

## Tech Stack

- React 19
- Vite
- React Router DOM
- Tailwind CSS

## Build for Production

```bash
npm run build
```

The production build will be in the `dist/` folder.

## Project Structure

```
src/
├── components/
│   └── Layout.jsx          # Shared layout with header
├── pages/
│   ├── Screen1.jsx         # Tax form
│   └── Screen2.jsx         # Environmental taxes table
├── App.jsx                 # Main app with routing
└── main.jsx                # Entry point
```

## Color Scheme

- Primary: `#0D7C8E`
- Dark: `#0A5F6D`
- Light: `#E8F4F6`
