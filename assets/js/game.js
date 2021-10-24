var playerName = window.prompt("What is your Robot's name?");
var playerHealth = 11;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators! Let the fight begin!");

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health reamaing."
    );

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has "
        + playerHealth + " health remaining."
    );

    //Check to see if your character is alive
    if (playerHealth >= 0) {
        alert(playerName + " is still alive and has " + playerHealth + " health remaining!")
    }
    else {
        alert("Your robot " + playerName + " has been defeated by " + enemyName + " .")
    }

    //Check to see if Roborto is alive

    if (enemyHealth >= 0) {
        alert("Roborto is still alive! he has " + enemyHealth + " health reamaing")
    }
    else {
        alert(playerName + " has defeated " + enemyName + " !")
    }
}
fight(
)

