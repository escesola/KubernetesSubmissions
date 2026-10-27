const { randomUUID } = require('node:crypto');

// Random string generated once on startup and kept in memory
const id = randomUUID();

const printLine = () => {
  console.log(`${new Date().toISOString()}: ${id}`);
};

printLine();
setInterval(printLine, 5000);

// Node as PID 1 in a container ignores SIGTERM by default; exit cleanly so pods stop quickly
process.on('SIGTERM', () => process.exit(0));
process.on('SIGINT', () => process.exit(0));
