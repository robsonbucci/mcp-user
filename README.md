# Users API

A simple CRUD API for managing users with just their first name. Built with Node.js, Express, TypeScript, and MongoDB.

## Requirements

- Node.js (v14 or higher)
- MongoDB (running on port 27018)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

3. (Optional) Create a `.env` file in the root directory to override default settings:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27018/usersdb
   ```
   If no `.env` file is created, the application will use these default values.

4. Start the development server:
   ```
   npm run dev
   ```

5. Build the project:
   ```
   npm run build
   ```

6. Start the production server:
   ```
   npm start
   ```

## API Endpoints

| Method | Endpoint       | Description           |
|--------|----------------|-----------------------|
| GET    | /api/users     | Get all users         |
| GET    | /api/users/:id | Get a user by ID      |
| POST   | /api/users     | Create a new user     |
| PUT    | /api/users/:id | Update an existing user |
| DELETE | /api/users/:id | Delete a user         |
| GET    | /health        | Health check endpoint |

## Request/Response Examples

### Create a User

**Request:**
```http
POST /api/users
Content-Type: application/json

{
  "firstName": "John"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "_id": "60d21b4667d0d8992e610c85",
    "firstName": "John",
    "createdAt": "2023-06-22T10:00:00.000Z",
    "updatedAt": "2023-06-22T10:00:00.000Z"
  }
}
``` 