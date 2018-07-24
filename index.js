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
    console.table(store.list());
    break;
  case 'save':
    store.save();
    break;
  case 'delete':
    store.delete(args.id);
  default:
    console.log('Not a valid command');
}

