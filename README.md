# TodoList Project

This is a simple Todo List application with a full-stack architecture. The project consists of a frontend built using React, a backend written in Python (Fastapi), and Docker for containerization. It also uses Nginx as a reverse proxy to manage requests between the frontend and backend.

## Getting Started

### Prerequisites

- Docker and Docker Compose should be installed on your machine.

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/eddcode123/to-do-list.git
   cd to-do-list-project
   ```

2. **Start the application using Docker Compose**:
   Docker Compose will build and run the frontend, backend, and Nginx services.
   ```bash
   docker-compose up --build
   ```

3. **Access the Application**:
   Once the services are up and running, navigate to [http://localhost:8000](http://localhost:8000) to view the app.
   
   The frontend will be served by Nginx, which will communicate with the Flask backend.

## Folder Descriptions

- **`backend/`**: Contains the server and business logic of the application.
  - **`dal.py`**: Responsible for the data access layer (e.g., interacting with databases or storage).
  - **`server.py`**: The main entry point for the Fastapi backend.
  - **`Dockerfile`**: Configuration for building a Docker container for the backend service.

- **`frontend/`**: Contains the React app for the frontend interface.
  - **`src/`**: The source code for the React app, including components and styles.
  - **`package.json`**: Manages the JavaScript dependencies for the frontend.

- **`nginx/`**: Configuration for the Nginx server to reverse proxy requests to the backend and frontend.

## Configuration

You can configure different environment variables or settings for each part of the application by modifying the respective configuration files:

- **Backend Configuration**: Modify the `server.py` and `dal.py` files to customize the backend logic or data access methods.
- **Frontend Configuration**: Edit `App.js` and other components under the `frontend/src/` folder to change the appearance and functionality of the UI.
- **Nginx Configuration**: Update the `nginx.conf` file to configure reverse proxy behavior, such as defining how the frontend and backend communicate.

## Running in Development Mode

If you'd like to run the frontend and backend separately in development mode (without Docker), follow these steps:

### Backend

1. Navigate to the `backend/` folder and create a virtual environment (optional but recommended).
2. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the FastApi app:
   ```bash
   python src/server.py
   ```

### Frontend

1. Navigate to the `frontend/` folder.
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

The frontend application will be available at [http://localhost:3000](http://localhost:3000), and the backend API will be accessible at its default URL.

## Testing

The project includes some basic tests for the frontend and backend components. To run the tests:

### Backend Tests

Use `pytest` to run the backend tests:
```bash
pytest
```

### Frontend Tests

Use the React testing framework to run frontend tests:
```bash
npm test
```

## Deployment

Once you're ready to deploy the application, you can use Docker containers to deploy to any server or cloud service that supports Docker. Ensure you have the correct environment variables and configurations for production use.



