# Movie Discovery Web-Application

## Main Objective: 

Create a movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies. You’ll be consuming data from the TMDB API.

## Requirements
- User Interface:
Create a responsive and visually appealing user interface for the application. Here's the link to the design you're expected to replicate: https://www.figma.com/file/tVfgoNfhYkQaUkh8LGqRab/MovieBox-(Community)?type=design&node-id=1220-324&mode=design&t=6998DWtjQrxz8mOf-0
You should list the top 10 movies on the homepage.
They should be displayed in a grid layout with their movie posters.
The Card component should display the movie title and release date.
card - [data-testid: movie-card]
movie poster - [data-testid: movie-poster]
movie title - [data-testid: movie-title]
movie release date - [data-testid: movie-release-date]

- Movie Search:
Implement a search feature that allows users to search for movies by title.
Display search results, including movie posters, titles, and release dates.
Show a loading indicator while fetching search results.

- Movie Details:
When i go to to /movies/:id route (where :id is the imdb_id), I should see the movie details page.
I should see
title - [data-testid: movie-title]
release date (in UTC) - [data-testid: movie-release-date]
runtime (in minutes) - [data-testid: movie-runtime]
overview - [data-testid: movie-overview]

## Installation

1. Clone the repository: `git clone https://github.com/oghene-ella/Movie_Discovery`
2. Navigate to the project directory: `cd Movie_Discovery`
3. Install the required dependencies: `npm install`

## Usage

1. Start the server: `npm run dev`
2. Access the app in your web browser at `http://localhost:5173/`

## Contact

For any inquiries or feedback, please reach out to oghenekaro57@gmail.com