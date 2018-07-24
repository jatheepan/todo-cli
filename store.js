const LocalStorage = (require( 'node-localstorage' )).LocalStorage;
const localStorage = new LocalStorage( './db' );

module.exports = {
  save() {
    return [];
  },
  list() {
    return [];
  },
  delete() {
    return null;
  },
  update() {
    return null;
  }
}


