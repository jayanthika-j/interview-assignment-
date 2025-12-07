# Interview Task - React + Tailwind CSS

A professional React application with two screens demonstrating form handling, table management, and navigation using React Router and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:5173`

## 📱 Application Routes

- **`/s1`** - Tax Year & Quarter Ending Form
- **`/s2`** - Environmental Taxes Table

## 🎨 Features

### Screen 1 (/s1)
- Tax year and quarter selection form
- Business name and form type dropdowns
- Form validation with required fields
- Navigation to Screen 2 on submission

### Screen 2 (/s2)
- Dynamic table with add/delete row functionality
- Environmental taxes data entry
- Breadcrumb navigation
- Multiple action buttons (Save, Proceed to Summary, Proceed to Deposit)
- "No excise" checkbox to disable inputs

## 🛠️ Technology Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

## 🎨 Color Scheme

- Primary Teal: `#0D7C8E`
- Dark Teal: `#0A5F6D`
- Light Teal: `#E8F4F6`
- Form Gray: `#F5F5F5`

## 📁 Project Structure

```
src/
├── components/
│   └── Layout.jsx          # Shared layout with header and navigation
├── pages/
│   ├── Screen1.jsx         # Tax Year & Quarter Ending form
│   └── Screen2.jsx         # Environmental Taxes table
├── App.jsx                 # Main app with routing
├── main.jsx                # Entry point
└── index.css               # Global styles and Tailwind config
```

## 🔧 Build for Production

```bash
npm run build
```

The production build will be in the `dist/` folder.

## 📝 Notes

- All form fields on Screen 1 marked with asterisks are required
- Screen 2 table allows dynamic row management
- Navigation between screens is handled via React Router
- Responsive design works on all screen sizes

---

Built with ❤️ for interview assessment
