class TodoList {
  constructor () {
    this.data = {}
  }

  // adds new item in list
  /**
  * @param val
  * @return list item
  **/
  add (val) {
    // adds new item to list
    this.data[val.title] = val;

    // return new added list item
    return this.data[val.title];
  }

  // removes the item from list
  /**
  * @return boolean
  **/
  remove (title) {
    if (this.data[title]) {
      // delet the list item
      delete this.data[title];
      //return response
      return 'Todo item deleted';
    } else {
      return 'Todo item not found';
    }
  }

  // edit an item
  /**
  * @param val
  * @return updated list
  **/
  edit (val) {
    if (this.data[val.title]) {
      // get list item from data
      let item = this.data[val.title];

      // change its value
      item.done = val.done;

      // update it back in list
      this.data[val.title] = item;

      // return updated list
      return this.data[val.title];
    } else {
      return 'Todo item not found';
    }
  }

  // display the list
  list () {
    // returns list
    let ret = [];

    for (let key in this.data) {
        ret.push(this.data[key]);
      }

    return ret;
  }
}

module.exports = {TodoList};
