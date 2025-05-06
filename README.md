# Chatbot Website - React Frontend Development Challenge

A responsive website with a chatbot interface, navigation elements, and dynamic content handling built with React JS.

## Features

- **Responsive Layout** - Works on both desktop and mobile devices
- **Side Menu Navigation** - Switch between "Apps" and "Documents" pages
- **Dynamic Content Search** - Filter and highlight content based on search queries
- **Interactive Chatbot** - Chat interface with simulated responses
- **Elapsed Time Tracking** - Timer showing seconds since chatbot was opened

## Project Structure

```
src/
├── App.jsx                   # Main application component
├── index.jsx                 # Entry point
├── components/
│   ├── Navbar.jsx            # Top navigation bar with logo and search
│   ├── SideMenu.jsx          # Side navigation menu
│   ├── ContentArea.jsx       # Main content display
│   └── chatbot/
│       ├── ChatbotButton.jsx # Button to open chatbot
│       ├── ChatbotWindow.jsx # Main chatbot container
│       ├── ChatHeader.jsx    # Header with reset and close buttons
│       ├── MessageView.jsx   # Display for chat messages
│       └── InputView.jsx     # Message input field
├── hooks/
│   └── useChatbot.js         # Custom hook for chatbot functionality
├── context/
│   └── AppContext.js         # Global state management
└── pages/
    ├── AppsPage.jsx          # Apps content page
    └── DocumentsPage.jsx     # Documents content page
```

## Setup Instructions

1. Clone the repository:

   ```
   git clone https://github.com/amandeepmaman/walmart-assignment
   cd chatbot-website
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Design Decisions

### State Management

The application uses React Context API for global state management. This approach was chosen because:

- It eliminates prop drilling across components
- It centralizes state logic related to the chatbot and UI
- It provides a clean and efficient way to share data between components

### Custom Hook

The `useChatbot` custom hook was implemented to:

- Encapsulate chatbot timer functionality
- Separate the timer logic from component rendering
- Make the code more reusable and maintainable

### Responsive Design

- The chatbot appears as a floating window on desktop
- On mobile devices, the chatbot expands to fill the entire screen
- The side menu and content area adjust based on screen size

### Search Functionality

- Real-time filtering of content based on search input
- Text highlighting for matched search terms
- Clear visual indicator when content has been filtered

## Technologies Used

- React JS (with Hooks and Context API)
- CSS-in-JS for styling
- JavaScript ES6+

## Future Improvements

- Add user authentication
- Implement a more sophisticated chatbot with natural language processing
- Add animations for a more polished user experience
- Implement dark mode functionality
- Add more content categories and filtering options
