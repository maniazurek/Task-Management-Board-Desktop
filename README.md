# List of technologies used in project:

- React
- React Router
- REST API

# Documentation:

## API
Base url: https://to-do-api.fly.dev

## 1. GET /tasks

## 2. POST /tasks

Body:

1. title: String,
2. description: String,
3. link: String,
4. tags: Array<tagID>,
5. dueDate: Date,
6. assignee: userID,
7. column: columnID,
8. comments: Array<String>

## 3. PUT /tasks/:id

Path parameters:

1. id: todoID

Body:

1. title: String,
2. description: String,
3. link: String,
4. tags: Array<tagID>,
5. dueDate: Date,
6. assignee: userID,
7. column: columnID,
8. comments: Array<String>

## 4. GET /tags

## 5. POST /tags

Body:

1. name: String,
2. color: String

## 6. PUT /tags/:id

Path parameters:

1. id: tagID

Body:

1. name: String,
2. color: String

## 7. GET /users

## 8. POST /users

Body:

1. name: String,
2. description: String,
3. imageURL: String

## 9. PUT /users/:id

Path parameters:

1. id: userID

Body:

1. name: String,
2. description: String,
3. imageURL: String

## 10. GET /columns

## 11. POST /columns

Body:

1. name: String

## 12. PUT /columns/:id

Path parameters:

1. id: columnID

Body:

1. name: String
