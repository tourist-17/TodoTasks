# Welcone to Todo Tasks Service

## Project Setup
- clone the project on your local
 - Execute `npm install` on the same path as of your root directory of the downloded project 
 - create a `.env` file in the root directory and add the following enviroment variable 
     - `PORT = 3001`
 - Inside the `src/config` folder create a new file `config.json` and then add the following piece of json
 ```
 {
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "TodoTasks",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

 ```
  - Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
  and then execute

  `npx sequelize db:migrate`
```
## DB Design 
 - task Table
 - subTask Table

 - A subTask belongs to an Task but one Task can be used in multiple subTask

## Tables
### task -> id, title, created_at, updated_at, description, dueDate, user_id, status(Todo, InProcess, Done)
### subTask -> id, taskId, created_at, created_at, updated_at, deleted_at, status(Incomplete, Completed)    

```
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer 
```
 


