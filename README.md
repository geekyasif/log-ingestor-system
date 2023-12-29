# log-ingestor-system


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT - Log Ingestor System -->

## About The Project

![Screenshot from 2023-11-19 22-13-27](https://github.com/dyte-submissions/november-2023-hiring-geekyasif/assets/38504330/47ef36cf-321c-4dd7-af48-c0375d548e0b)

### Ingesting and managing extensive volumes of log data efficiently, a log ingestor system provides a user-friendly interface for querying this information through full-text search or specific field filters.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- Node.js/Express.js, MongoDb
- React.Js

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Backend

- Node.js, Express.js, MongoDbAtlas/MongoDbCompass

### Frontend

- React.js, TailwindCss

### Prerequisites

### - Latest Version of Node

### Installation

clone the repo

- [api Directory] Contain backend code
- [log-ingestor-frontend Directory] Contain frontend code

## Running the Backend

1. npm install

2. create a .env file and the mongodbAtlas Db url

- [MONGODB_CONNECTION_URL="mongodb+srv://<username>:<password>@cluster0.yy12ce4.mongodb.net/?retryWrites=true&w=majority"]

3. npm run start

- Note :- you have to create index in your MongoDbAtlas database (index name should be "log")

## Running the Frontend (log-ingestor-frontend Directory)

1. Run `npm i`
2. Run `npm run start`
