# VolunForce

## Overview 
VolunForce is a platform designed to streamline volunteer management. The purpose of this website is helping the organization to find volunteer for social work and for help people to find volunteer work for wellbeing for society.

## Live Site URL : https://volunforce-client.web.app

## Technologies Used 

This project is built using the following technologies:

- **[React.js](https://react.dev/)** – A JavaScript library for building interactive user interfaces.  
- **JavaScript (ES6+)** – The core programming language used for development.  
- **[Tailwind CSS](https://tailwindcss.com/)** – A utility-first CSS framework for fast and responsive UI design.  
- **[Firebase](https://firebase.google.com/)** – Used for authentication, real-time database, and cloud storage.  
- **[MongoDB](https://www.mongodb.com/)** – A NoSQL database for storing and managing data efficiently.  
- **[Node.js](https://nodejs.org/)** – A runtime environment for executing JavaScript code on the server.  
- **[JWT (JSON Web Token)](https://jwt.io/)** – Used for authentication and secure user sessions.  

To set up and run the project, check the [Installation](#installation) section.


## Screenshot 

![App Screenshot](https://github.com/Sadia0920/volunForce/blob/main/pic1.png)

## Key Features

- 🔐 **User Authentication** – Both **Organizers** and **Volunteers** can register and log in, with their information securely stored.  
- 🔑 **Google Authentication** – Users can also log in using their **Google accounts** for convenience.  
- 🔒 **Protected Routes** – Some pages are accessible only to registered **Organizers** and **Volunteers**.  
- 📢 **Organizer Features**:
  - Can **create** and **manage** volunteer need posts.  
  - Can **update** existing volunteer need posts.  
- ✋ **Volunteer Features**:
  - Can **request** to participate in volunteer work.  
  - Can **cancel** a volunteer request if needed.  
- 🎨 **Theme Controller** – Users can switch between different themes for a personalized experience.  

## Dependencies

This project relies on the following npm packages:

| Package | Version | Description |
|---------|---------|-------------|
| [axios](https://github.com/axios/axios) | ^1.7.9 | Promise-based HTTP client for making API requests |
| [date-fns](https://date-fns.org/) | ^4.1.0 | Modern JavaScript date utility library |
| [firebase](https://firebase.google.com/docs/web/setup) | ^11.1.0 | Google Firebase SDK for authentication, database, and storage |
| [localforage](https://localforage.github.io/localForage/) | ^1.10.0 | Library for offline storage using IndexedDB, WebSQL, or localStorage |
| [lottie-react](https://github.com/Gamote/lottie-react) | ^2.4.0 | React component for rendering Lottie animations |
| [match-sorter](https://github.com/kentcdodds/match-sorter) | ^8.0.0 | Utility for ranking and sorting items based on search terms |
| [motion](https://motion.dev/) | ^11.15.0 | Animation library for modern React applications |
| [react](https://react.dev/) | ^18.3.1 | JavaScript library for building user interfaces |
| [react-datepicker](https://reactdatepicker.com/) | ^7.5.0 | A flexible and customizable date picker component for React |
| [react-dom](https://react.dev/) | ^18.3.1 | React package for DOM rendering |
| [react-helmet-async](https://github.com/staylor/react-helmet-async) | ^2.0.5 | Manage document head meta tags in React asynchronously |
| [react-icons](https://react-icons.github.io/react-icons/) | ^5.4.0 | A library for using popular icon packs in React |
| [react-router-dom](https://reactrouter.com/) | ^7.1.0 | Declarative routing for React applications |
| [react-tooltip](https://react-tooltip.com/) | ^5.28.0 | A customizable tooltip component for React |
| [sort-by](https://www.npmjs.com/package/sort-by) | ^1.2.0 | Utility for sorting arrays of objects by property values |
| [sweetalert2](https://sweetalert2.github.io/) | ^11.15.3 | A modern replacement for JavaScript’s alert, confirm, and prompt dialogs |

To install these dependencies, run:

```sh
npm install
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/Sadia0920/volunForce.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_API_KEY=your_firebase_api_key`
`VITE_AUTH_DOMAIN=your_firebase_auth_domain`
`VITE_PROJECT_ID=your_firebase_project_id`
`VITE_STORAGE_BUCKET=your_firebase_storage_bucket`
`VITE_MESSAGING_SENDER_ID=your_firebase_sender_id`
`VITE_APP_ID=your_firebase_app_id`
`VITE_SERVER_URL=your_backend_server_url`



