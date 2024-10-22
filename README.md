## Prerequisites
- Node.js (v20.17)
- Yarn package manager Or Npm package manager

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nutapong-tan/poc-hyper-express.git
   ```

2. Navigate into the project directory:
   ```bash
   cd poc-hyper-express
   ```

3. Install the dependencies:
   ```bash
   yarn install
   ```

## Running the Application

### Development Mode (with Nodemon)
```bash
yarn dev
```

### Build and Run
```bash
yarn build
```

### API Endpoints

- **POST /user** - Create a new user.
- **PUT /user/:id** - Update user.
- **GET /info** - Retrieve all users.
- **DELETE /user/:id** - Delete a user by ID.

### Example Requests

**Create a User:**
```bash
curl -X POST http://localhost:31000/user -H "Content-Type: application/json" -d '{"id": "1", "name": "John Doe", "email": "johndoe@example.com"}'
```


**Update User:**
```bash
curl -X PUT http://localhost:31000/user/1 -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "johndoe@example.com"}'
```

**Get All Users:**
```bash
curl -X GET http://localhost:31000/info
```

**Delete a User:**
```bash
curl -X DELETE http://localhost:31000/user/1
```

