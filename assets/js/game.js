//player 1
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//fight fxn
var fight = function () {
    window.alert("Welcome to Robot Gladiators!")

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

    if (promptFight === "FIGHT" || promptFight === "Fight" || promptFight === "fight") {
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
        );
        if (enemyHealth <= 0) {
            window.alert(enemyNames + " still has " + enemyHealth + " health left.");
        }


        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        if (playerHealth <= 0) {
            window.alert(playerName + " has died")
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } else if (promptFight === "skip" || promptFight === "Skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure that you would like to quit?");

        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");

            playerMoney = playerMoney - 2;
        }
        else {
            fight();
        }
    } else {
        window.alert("You need to pick a valid option. Try Again!");
    }
};


for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}

