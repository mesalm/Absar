

#for test idea

# Movie Site Backend

This is the backend of a movie site built with Node.js. The backend provides API endpoints to add, delete, retrieve, search, and update movie data. 

## Features

- **Add a Movie:** Users can add a new movie to the database.
- **Delete a Movie:** Users can delete an existing movie from the database.
- **Retrieve Movies:** Users can retrieve all movies stored in the database.
- **Search Movies:** Users can search for a specific movie in the database.
- **Update Movie Data:** Users can update the data of an existing movie.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v12.x or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/moviesite-backend.git
    ```
2. Navigate to the project directory:
    ```bash
    cd moviesite-backend
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Server

To start the server, run:
```bash
npm start
The server will be running at http://localhost:5000.

API Endpoints
Add a Movie
URL: /api/movies
Method: POST
Request Body:
json
Copy code
{
    "title": "Movie Title",
    "year": 2021,
    "genre": "Genre",
    "rating": 8.5
}
Response:
json
Copy code
{
    "id": "id",
    "title": "Movie Title",
    "year": 2021,
    "genre": "Genre",
    "rating": 8.5
}
Delete a Movie
URL: /api/movies/:id
Method: DELETE
Response:
json
Copy code
{
    "message": "Movie deleted successfully"
}
Retrieve All Movies
URL: /api/movies
Method: GET
Response:
json
Copy code
[
    {
        "id": "id",
        "title": "Movie Title",
        "year": 2021,
        "genre": "Genre",
        "rating": 8.5
    },
    ...
]
Search for a Movie
URL: /api/movies/search
Method: GET
Query Parameters:
title: Movie title to search for.
Response:
json
Copy code
[
    {
        "id": "id",
        "title": "Movie Title",
        "year": 2021,
        "genre": "Genre",
        "rating": 8.5
    },
    ...
]
Update Movie Data
URL: /api/movies/:id
Method: PUT
Request Body:
json
Copy code
{
    "title": "Updated Movie Title",
    "year": 2022,
    "genre": "Updated Genre",
    "rating": 9.0
}
Response:
json
Copy code
{
    "id": "id",
    "title": "Updated Movie Title",
    "year": 2022,
    "genre": "Updated Genre",
    "rating": 9.0
}
Project Structure
bash
Copy code
moviesite-backend/
│
├── data/                     # JSON file for storing movie data
├── routes/                   # API route handlers
│   ├── index.js              # Main route file
│   └── movies.js             # Movie-related route file
│
├── util/                     # Utility functions
│   ├── bodyParse.js          # Body parsing middleware
│      
│
├── .gitignore                # Git ignore file
├── serevr.js                    # Main application file
├── package.json              # NPM package file
└── README.md                 # Project README file
Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any features, bug fixes, or improvements.

License
This project is licensed under the MIT License. See the LICENSE file for more details.
