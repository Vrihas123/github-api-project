# GithubApp

This Angular project list all the public repositories of a user along with the user's information.

### Steps to run the project in local environment

- Install Angular 13+ version if not installed already. Run `npm install -g @angular/cli` for installing angular.
- Clone this project. Run `git clone https://github.com/Vrihas123/github-api-project.git` in your desired location.
- Go inside this project.
- Run `npm install` for installing all the dependencies and packages of this project.
- Run `ng serve` for running the local server.
- Go to `http://localhost:4200/` in your brower.
- Default user is Vrihas123. You can replace it by your username. Example : `http://localhost:4200/github/{username}`

### File structure of this project

- Components
  - Home Component : Main home page which contains the user information and list of repositories.
  - User Details Component : Contains details of User such as name, bio, avatar etc.
  - Repository List Component : Contains the list of user's repositories including pagination.
  - Repository Component : Contains information about single repository.
  - Error Component : Handles invalid URL access.

- Rest Api Service : Contains all the API callings such as fetching user details, fetching repositories list and list of languages of each repository
- Router Config file : Handles the routing among components.
- Libraries used : Angular Material, ngx-pagination
