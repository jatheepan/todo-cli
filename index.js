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
    if(!args.title) {
      console.error('--title is missing');
      process.exit();
    }
    const item = store.save(args.title);
    console.log(item.title, 'is saved');
    break;

  case 'update':
    if(!args.title || !args.id) {
      console.error('--id and/or --title missing');
      process.exit();
    }
    const updatedItem = store.update(args.id, args.title);
    console.log( updatedItem.title, 'is updated.' );
    break;

  case 'delete':
    if(!args.id) {
      console.error('--id is missing');
      process.exit();
    }
    store.delete(args.id);
    break;

  case 'clear':
    store.deleteAll();
    break;
  default:
    console.log('Not a valid command');
}

