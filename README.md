# Assignment Frontend

- [Backend Live Preview](https://assignmentfs-backend.onrender.com/ping)
  | [Backend Code](https://github.com/DE4D-P00L/AssignmentFS_Backend.git)
- [Frontend Live Preview](https://assignmentfs-frontend.onrender.com/)
  | [Frontend Code](https://github.com/DE4D-P00L/AssignmentFS_Frontend.git)

## Description:

This React Vite project is a card management application that allows users to view, create, and search cards. It utilizes Tailwind CSS for styling, @uidotdev/usehooks for debouncing fetch requests, and Axios for API requests. The application provides a user-friendly interface for managing cards with titles and descriptions and HTML `<dialog>` elements for creating modal forms.

### Prerequisites:

- Node.js (v18 or later)
- npm or yarn

### Installation:

1. Clone the repository:

```bash
    git clone https://github.com/DE4D-P00L/AssignmentFS_Frontend.git
```

2. Install dependencies:

```bash
    npm install
```

### Environment Variables:

Create a `.env` file in the project root and add the following environment variable:

```
    VITE_API_URL=YOUR-BACKEND-URL
```

Replace YOUR-BACKEND-URL with your actual backend url or http://localhost:3000 for development build.

### Usage:

Start the development server:

```bash
    npm run dev
```

### Features:

- Card Management: View, create, and search cards.
- Title and Description: Each card has a title and description.
- Tailwind CSS: Utilizes Tailwind CSS for styling.
- @uidotdev/usehooks: Leverages the useDebounce hook from @uidotdev/usehooks for debouncing api requests.
- Axios: Employs Axios for making API requests.
- Modals: Uses HTML `<dialog>` elements to create modal forms for card creation.
