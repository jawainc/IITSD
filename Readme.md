**How to run server**
use this command:
`node server.js`


all reposes are in json

PostMan (https://www.getpostman.com/downloads/) tool is used to test api


*list of requests:*

- to get list: `http://localhost:3000/` (GET)
- to add new item, make post request to:  `http://localhost:3000/` (POST)
- to edit item, make put request to:  `http://localhost:3000/` (PUT)
- to remove item, make delete request to: `http://localhost:3000/` (DELETE)


POST and PUT requests required following fields:

- title
- done


DELETE request required following field:

- title
