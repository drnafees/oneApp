# OneApp Recruitment (Frontend)

This repository contains the frontend code for the OneApp Recruitment project, a unified application portal built with React.

## Project Description

OneApp Recruitment provides a streamlined interface for users to apply for colleges and jobs through a single, centralized portal. The frontend, built with React and Shadcn UI, dynamically generates forms and interacts with a backend API (not included in this repository) to manage applications, user authentication, search/filtering, document uploads, and real-time tracking.

**Note:** This repository only contains the frontend code. The backend API (built with Express.js/Node.js and AWS DynamoDB) is not included here.

## Features (Frontend)

* **Dynamic Form Generation:** React components generate application forms based on data from the backend.
* **Modern UI with Shadcn:** Utilizes Shadcn UI for a polished and accessible user interface.
* **Component based architecture:** Utilizes reusable UI components.
* **State Management:** Utilizes React state for managing application data and UI updates.
* **API Interaction:** Communicates with the backend API to handle data retrieval and submission.
* **Document Upload:** Allows users to upload documents as part of their applications.
* **Real-time Application Tracking:** Displays the current status of applications.
* **Authentication:** Manages user authentication through interaction with the backend API.
* **Routing:** Uses React Router to handle navigation between different application pages.

## Technologies Used (Frontend)

* **React:** JavaScript library for building user interfaces.
* **TypeScript:** Used for type safety and improved code maintainability.
* **Tailwind CSS:** For utility-first CSS styling.
* **Shadcn UI:** Re-usable components built using Radix UI and Tailwind CSS.
* **Vite:** Fast build tool and development server.
* **React Router:** For client-side routing.

## Prerequisites

* Node.js (>= 18)
* npm or yarn

## Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd <project_directory>
    ```

3.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

## Development

1.  Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  Open your browser and navigate to `http://localhost:5173` (or the port displayed in the console).

## Build

1.  Build the project for production:

    ```bash
    npm run build
    # or
    yarn build
    ```

2.  The built files will be located in the `dist` directory.

## Backend Information

This frontend application relies on a separate backend API built with:

* **Express.js/Node.js:** For the RESTful API.
* **AWS DynamoDB:** For NoSQL data storage.

**Note:** The backend API is not included in this repository. Ensure the backend is running and accessible for the frontend to function correctly.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs or feature requests.

## License

This project is licensed under the GPL 3.0 License - see the [LICENSE](LICENSE) file for details.
