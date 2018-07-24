require( 'console.table' );

const store = require( './store' );
const minimist = require( 'minimist' );
const args = minimist(process.argv);
const cmd = args._[2];

if(!cmd) {
  console.error('Please provide command');
  process.exit();
}

switch(cmd) {
  case 'list':
    const list = store.list;
    console.table(list.items);
    console.log('Total:', list.count);
    break;

  case 'save':
    const item = store.save({Title: args.title});
    console.log(item.Title, 'is saved');
    break;

  case 'update':
    const updatedItem = store.update(args.id, args.title);
    console.log( updatedItem.Title, 'is updated.' );
    break;

  case 'delete':
    const deletedItem = store.delete(args.id);
    console.log( deletedItem.Title, 'is deleted.' );
    break;

  case 'clear':
    store.deleteAll();
    break;
  default:
    console.log('Not a valid command');
}

