# List of technologies used in project:

- React
- React Router
- REST API

# Documentation:

API
Base url: https://to-do-api.fly.dev

1. GET /tasks
2. POST /tasks
Body:

title: String,
description: String,
link: String,
tags: Array<tagID>,
dueDate: Date,
assignee: userID,
column: columnID,
comments: Array<String>
3. PUT /tasks/:id
Path parameters:

id: todoID
Body:

title: String,
description: String,
link: String,
tags: Array<tagID>,
dueDate: Date,
assignee: userID,
column: columnID,
comments: Array<String>
4. GET /tags
5. POST /tags
Body:

name: String,
color: String
6. PUT /tags/:id
Path parameters:

id: tagID
Body:

name: String,
color: String
7. GET /users
8. POST /users
Body:

name: String,
description: String,
imageURL: String
9. PUT /users/:id
Path parameters:

id: userID
Body:

name: String,
description: String,
imageURL: String
10. GET /columns
11. POST /columns
Body:

name: String
12. PUT /columns/:id
Path parameters:

id: columnID
Body:

name: String
