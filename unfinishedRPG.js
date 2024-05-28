/*// Define the doors and their destinations
let doors = [
    {
      name: 'Door 1',
      destination: 'bottomlessPit'
    },
    {
      name: 'Door 2',
      destination: 'roomWithTwoDoors'
    },
    {
      name: 'Door 3',
      destination: 'roomWithWeapon'
    }
  ];
  
  // Function to shuffle the doors
  function shuffleDoors() {
    // Fisher-Yates shuffle algorithm
    for (let i = doors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [doors[i], doors[j]] = [doors[j], doors[i]];
    }
  }
  
  // Function to display doors
  function displayDoors() {
    // Display each door with its corresponding number
    doors.forEach((door, index) => {
      console.log(`${index + 1}. ${door.name}`);
    });
  }
  
  // Function to handle room with two doors scenario
  function handleRoomWithTwoDoors() {
    // Inform the player and present two doors
    console.log('You have entered a room with two doors.');
    console.log('Choose a door:');
  
    // Define the two doors
    const door1 = {
      name: 'Door 1',
      destination: 'bottomlessPit'
    };
    const door2 = {
      name: 'Door 2',
      destination: 'finalLevel'
    };
  
    // Shuffle the doors for uncertainty
    shuffleDoors();
  
    // Display the shuffled doors
    console.log('1. ' + door1.name);
    console.log('2. ' + door2.name);
  
    // Prompt the user to choose a door
    const choice = prompt('Enter the number of your chosen door:');
    const chosenDoor = choice === '1' ? door1 : door2;
    console.log(`You have chosen ${chosenDoor.name}.`);
    return chosenDoor.destination;
  }
  
  // Function to handle the boss battle
  function startBossBattle() {
    // Inform the player about the final level
    console.log('You have entered the final level.');
    console.log('You are fighting the boss.');
  
    // Initialize player and boss health
    let playerHealth = 100;
    let bossHealth = 100;
  
    // Boss battle loop
    while (playerHealth > 0 && bossHealth > 0) {
      // Display player and boss health
      console.log('Your health: ' + playerHealth);
      console.log('Boss health: ' + bossHealth);
  
      // Prompt the player to attack or heal
      const choice = prompt('Enter 1 to attack or 2 to heal:');
  
      // Update boss health based on player's choice
      if (choice === '1') {
        bossHealth -= 20;
      } else if (choice === '2') {
        playerHealth += 20;
      }
    }
  
    // Determine the outcome of the boss battle
    if (playerHealth > 0) {
      console.log('You have defeated the boss. Congratulations!');
      return 'win';
    } else {
      console.log('You have been defeated by the boss. Game over.');
      return 'lose';
    }
  }
  
  // Main game loop
  let currentRoom = 'start';
  
  // Loop until the game is won or lost
  while (currentRoom !== 'win' && currentRoom !== 'lose') {
    // Inform the player about their current location
    console.log(`You are in the ${currentRoom} room.`);
    console.log('Choose a door:');
  
    // Shuffle and display the doors
    shuffleDoors();
    displayDoors();
  
    // Prompt the user to choose a door
    const choice = prompt('Enter the number of your chosen door:');
    const chosenDoor = doors[choice - 1];
    console.log(`You have chosen ${chosenDoor.name}.`);
    currentRoom = chosenDoor.destination;
  
    // Handle different room scenarios
    if (currentRoom === 'bottomlessPit') {
      console.log('You have fallen into the bottomless pit. Game over.');
      currentRoom = 'lose';
    } else if (currentRoom === 'roomWithTwoDoors') {
      currentRoom = handleRoomWithTwoDoors();
    } else if (currentRoom === 'roomWithWeapon') {
      console.log('You have entered a room with a weapon.');
      console.log('You have obtained a weapon for killing the boss.');
    } else if (currentRoom === 'finalLevel') {
      currentRoom = startBossBattle();
    }
  }
  
  // Inform the player about the game's outcome
  console.log(`Game over. You ${currentRoom === 'win' ? 'won' : 'lost'}.`);*/

  



  // Importing the readline module to get user input from the command line
const readline = require('readline');

// Define the doors and their destinations
let doors = [
  {
    name: 'Door 1',
    destination: 'bottomlessPit'
  },
  {
    name: 'Door 2',
    destination: 'roomWithTwoDoors'
  },
  {
    name: 'Door 3',
    destination: 'roomWithWeapon'
  }
];

// Function to shuffle the doors
function shuffleDoors() {
  // Fisher-Yates shuffle algorithm
  for (let i = doors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [doors[i], doors[j]] = [doors[j], doors[i]];
  }
}

// Function to display doors
function displayDoors() {
  // Display each door with its corresponding number
  doors.forEach((door, index) => {
    console.log(`${index + 1}. ${door.name}`);
  });
}

// Function to handle room with two doors scenario
function handleRoomWithTwoDoors() {
  // Inform the player and present two doors
  console.log('You have entered a room with two doors.');
  console.log('Choose a door:');

  // Define the two doors
  const door1 = {
    name: 'Door 1',
    destination: 'bottomlessPit'
  };
  const door2 = {
    name: 'Door 2',
    destination: 'finalLevel'
  };

  // Shuffle the doors for uncertainty
  shuffleDoors();

  // Display the shuffled doors
  console.log('1. ' + door1.name);
  console.log('2. ' + door2.name);

  // Prompt the user to choose a door
  rl.question('Enter the number of your chosen door:', (choice) => {
    const chosenDoor = choice === '1' ? door1 : door2;
    console.log(`You have chosen ${chosenDoor.name}.`);
    continueGame(chosenDoor.destination);
  });
}

// Function to handle the boss battle
function startBossBattle() {
  // Inform the player about the final level
  console.log('You have entered the final level.');
  console.log('You are fighting the boss.');

  // Initialize player and boss health
  let playerHealth = 100;
  let bossHealth = 100;

  // Boss battle loop
  function bossBattleLoop() {
    // Display player and boss health
    console.log('Your health: ' + playerHealth);
    console.log('Boss health: ' + bossHealth);

    // Prompt the player to attack or heal
    rl.question('Enter 1 to attack or 2 to heal:', (choice) => {
      // Update boss health based on player's choice
      if (choice === '1') {
        bossHealth -= 20;
      } else if (choice === '2') {
        playerHealth += 20;
      }

      // Check if battle should continue
      if (playerHealth > 0 && bossHealth > 0) {
        bossBattleLoop();
      } else {
        // Determine the outcome of the boss battle
        if (playerHealth > 0) {
          console.log('You have defeated the boss. Congratulations!');
          continueGame('win');
        } else {
          console.log('You have been defeated by the boss. Game over.');
          continueGame('lose');
        }
      }
    });
  }

  // Start the boss battle loop
  bossBattleLoop();
}

// Create an interface for reading user input

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to continue the game after an action is taken
function continueGame(nextRoom) {
  if (nextRoom === 'bottomlessPit') {
    console.log('You have fallen into the bottomless pit. Game over.');
    rl.close();
  } else if (nextRoom === 'roomWithTwoDoors') {
    handleRoomWithTwoDoors();
  } else if (nextRoom === 'roomWithWeapon') {
    console.log('You have entered a room with a weapon.');
    console.log('You have obtained a weapon for killing the boss.');
    rl.question('Press any key to continue:', () => {
      continueGame('finalLevel');
    });
  } else if (nextRoom === 'finalLevel') {
    startBossBattle();
  } else {
    console.log(`Game over. You ${nextRoom === 'win' ? 'won' : 'lost'}.`);
    rl.close();
  }
}

// Main game function
function startGame() {
  console.log('Welcome to the adventure game!');

  // Start the game loop
  continueGame('start');
}

// Start the game
startGame();
