const http = require('http');
const { parse } = require('querystring');
const port = 3000
// Todo list data store
let list = require('./index.js');
// create new list instance
let List = new list.TodoList();

// capture request and process
const requestHandler = (request, response) => {
  // set header for json response
  response.setHeader('Content-Type', 'application/json');

  switch (request.method) {
    // get list
    case "GET":
      // send back response
      response.end(JSON.stringify(List.list()));
    break;

    // add new item to list
    case "POST":
      // collect body params and process
      collectRequestData(request, result => {
        let added_item = List.add({title: result.title, done: result.done })
          response.end(JSON.stringify({'message': 'Todo item added', 'item': added_item}));
      });
    break;

    // edit item
    case "PUT":
      // collect body params and process
      collectRequestData(request, result => {
        let edit_item = List.edit({title: result.title, done: result.done })
        response.end(JSON.stringify({'message': 'Todo item edited', 'item': edit_item}));
      });
    break;

    // delete item
    case "DELETE":
      // collect body params and process
      collectRequestData(request, result => {
        let delete_item = List.remove(result.title);
        response.end(JSON.stringify({'deleted': delete_item}));
      });
    break;

    default:
      response.end(JSON.stringify({'message': 'Bad Request'}));

  }


}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})


// collect request form data
function collectRequestData(request, callback) {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    if(request.headers['content-type'] === FORM_URLENCODED) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else {
        callback(null);
    }
}
