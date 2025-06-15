const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'gpio':
    if (args.length < 3) {
      console.log('Usage: gpio <pin> <value>');
      break;
    }
    console.log(`[SIMULATION] Setting GPIO pin ${args[1]} to ${args[2]}`);
    break;

  case 'read-dht':
    if (args.length < 3) {
      console.log('Usage: read-dht <type> <pin>');
      break;
    }
    console.log(`[SIMULATION] Reading DHT type ${args[1]} on pin ${args[2]}`);
    console.log('[SIMULATION] Temperature: 22.5\u00B0C');
    console.log('[SIMULATION] Humidity: 50%');
    break;

  case 'i2c-scan':
    console.log('[SIMULATION] Scanning I2C bus 1...');
    console.log('[SIMULATION] Device found at 0x3c');
    console.log('[SIMULATION] Device found at 0x40');
    break;

  case 'capture':
    if (args.length < 2) {
      console.log('Usage: capture <file>');
      break;
    }
    console.log(`[SIMULATION] Capturing image to ${args[1]}`);
    break;

  default:
    console.log('Usage: node pi_simulator.js <command>');
    console.log('Commands:');
    console.log('  gpio <pin> <value>');
    console.log('  read-dht <type> <pin>');
    console.log('  i2c-scan');
    console.log('  capture <file>');
}
