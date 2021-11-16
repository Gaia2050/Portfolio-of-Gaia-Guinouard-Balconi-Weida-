var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;

var playerAttack = 10;

var enemyName = "Roborto";

var enemyHealth = 50;

var enemyAttack = 12;

var playerMoney = 10;

var fight = function () {
  // alert player thst they are starting round 
  window.alert("Welcome to Robot Gladiators!");

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  // if player chooses to fight then fight  
  if (promptFight === "fight" || promptFight === "FIGHT") {
    // subtract value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    // log a resulting message to the console so we know that it worked. 
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + "enemyHealth remaning."
    );

    // check enemy's health 
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    }
    else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.")
    }
    // subtract value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable. 
    playerHealth = playerHealth - enemyAttack;
    // log a resulting message to the console so we know that it worked 
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + "health-remaining."

    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    // check players health 
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    }

    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player chooses to skip 
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip 
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight 
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money away from playermoney for skipping 
      playerMoney = playerMoney - 2;
    }
    // if no (flase), ask question again by running fight () again
    else {
      fight();
    } 
    
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }

};









fight();