process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input:
process.stdin.on('data', (input) => {
  
  // Remove newline from user input
  const name = input.toString(),trim();

  // Display name entered by user
  process.stdout.write('Your name is: ${name}\n');

  // Close program and display exit message
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });

  // End process
  process.exit();
});
