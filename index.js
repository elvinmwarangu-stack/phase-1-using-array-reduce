

// Code your solution here
const batteryBatches = [
  { assembled: 5 },
  { assembled: 10 },
  { assembled: 6 },
  { assembled: 10 }
];

const totalBatteries = batteryBatches.reduce((total, batch) => {
  return total + batch.assembled;
}, 0);

module.exports = {
  totalBatteries
};