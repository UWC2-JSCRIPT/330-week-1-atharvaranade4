let data = '';
const stdin = process.stdin;
const totalPoints = 80;
const otherPoints = 20;

stdin.setEncoding('utf8');

stdin.on('data', function (chunk) {
  data += chunk;
});

stdin.on('end', function () {
  const result = JSON.parse(data);
  const { numPassedTests, numFailedTests, numTotalTests } = result;
  const pointsReceived = Math.ceil((numPassedTests / numTotalTests) * totalPoints);
  const output = `
Component | Passed Tests | Total Tests | Points Available | Points Received
--------- | -------- | -------- | -------- | --------
All tests, as originally given, are passing. | ${numPassedTests} | ${numTotalTests} | ${totalPoints} | ${pointsReceived}
Clear, organized project structure | | | ${otherPoints} | TBD 
**Total** | | | **${totalPoints + otherPoints }** | **${pointsReceived} + TBD**
`
  process.stdout.write(output);
});

stdin.on('error', console.error);