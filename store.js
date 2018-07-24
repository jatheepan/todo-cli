const LocalStorage = (require( 'node-localstorage' )).LocalStorage;
const localStorage = new LocalStorage( './db' );
const KEY = 'items';


class Store {
  static instance() {
    if(!this._instance) {
      this._instance = new Store(KEY);
    }
    return this._instance;
  }
  get items() {
    const items = localStorage.getItem(KEY);
    return JSON.parse(items);
  }
  set items( items ) {
    localStorage.setItem(KEY, JSON.stringify(items));
  }
  save(item) {
    const items = this.items;
    items.unshift(item);
    this.items = items;
    return item;
  }
  get list() {
    return {
      items: this.items,
      count: this.items.length
    };
  }
}

module.exports = Store.instance();

/*

LocalStorage.prototype.__set__ = function( key, value ) {
  const items = JSON.stringify( value );
  this.setItem( key, items );
};
LocalStorage.prototype.__get__ = function( key ) {
  return JSON.parse( this.getItem( key ) );
};

const getCollection = () => {
  const items = localStorage.getItem( KEY );
  if(!items) {
    localStorage.setItem('items', JSON.stringify([]));
  }
  return localStorage;
};
module.exports.store = {
  _store: getCollection(),

  save(item) {
    let items = this._store.__get__( KEY );
    items.unshift(item);
    this._store.__set__( KEY, items );
    return item;
  },

  list() {
    let items = this._store.__get__(  KEY );
    items = items.map((item, index) => ({
      Id: index + 1,
      Title: item.Title
    }));
    return {
      count: items.length,
      items
    };
  },

  delete( id ) {
    const index = id - 1;
    let items = this._store.__get__( KEY );
    let removedItem = items.shift( index, 1 );
    this._store.__set__( 'items', items );

    return removedItem;
  },

  update( id, value ) {
    const index = id - 1;
    const items = this._store.__get__( KEY );

    let item = items[index];
    if( !item || !value ) {
      return null;
    }
    item.Title = value;
    this._store.__set__( KEY, items );
    return item;
  },

  deleteAll() {
    this._store.setItem('items', JSON.stringify([]));
  }
}

*/
