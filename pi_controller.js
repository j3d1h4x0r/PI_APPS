const { Command } = require('commander');
const { Gpio } = require('onoff');
const i2c = require('i2c-bus');
const sensor = require('node-dht-sensor').promises;
const { exec } = require('child_process');

const program = new Command();
program
  .name('pi-controller')
  .description('Raspberry Pi control CLI');

program
  .command('gpio <pin> <value>')
  .description('Set a GPIO pin high or low')
  .action((pin, value) => {
    const out = new Gpio(Number(pin), 'out');
    out.writeSync(value === '1' ? 1 : 0);
    out.unexport();
  });

program
  .command('read-dht <type> <pin>')
  .description('Read temperature and humidity from a DHT sensor')
  .action(async (type, pin) => {
    try {
      const res = await sensor.read(Number(type), Number(pin));
      console.log(`Temp: ${res.temperature.toFixed(1)}\u00B0C`);
      console.log(`Humidity: ${res.humidity.toFixed(1)}%`);
    } catch (err) {
      console.error('Failed to read sensor', err);
    }
  });

program
  .command('i2c-scan')
  .description('Scan I2C bus for devices')
  .action(() => {
    const bus = i2c.openSync(1);
    console.log('Scanning I2C bus 1...');
    for (let addr = 0x03; addr <= 0x77; addr++) {
      try {
        bus.receiveByteSync(addr);
        console.log(`Device found at 0x${addr.toString(16)}`);
      } catch {
        // ignore errors when no device responds
      }
    }
    bus.closeSync();
  });

program
  .command('capture <file>')
  .description('Capture a photo with raspistill')
  .action((file) => {
    exec(`raspistill -o ${file}`, (err) => {
      if (err) {
        console.error('Capture failed', err);
        return;
      }
      console.log(`Image saved to ${file}`);
    });
  });

program.parse(process.argv);
