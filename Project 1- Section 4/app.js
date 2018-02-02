new Vue(
{
	el: "#app",
	data:
	{
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		turns: []
	},
	methods:
	{
		startGame: function()
		{
			// this.gameIsRunning = true;
			this.gameIsRunning = !this.gameIsRunning
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.turns = [];
		},
		attack: function()
		{
			var damage = Math.floor(Math.random() * 10);

			//Player attacking the monster
			this.monsterHealth -= damage;
			this.turns.unshift(
			{
				isPlayer: true,
				text: "Player hits Monster for "+damage
			});

			this.monsterAttacks();

			if(this.checkWin())
			{
				this.startGame();
			}
		},
		specialAttack: function()
		{
			var damage = Math.floor(Math.random() * 15);

			//Player attacking the monster
			this.monsterHealth -= damage
			this.turns.unshift(
			{
				isPlayer: true,
				text: "Player hits Monster for "+damage
			});

			this.monsterAttacks();

			if(this.checkWin())
			{
				this.startGame();
			}
		},
		heal: function()
		{
			var heal = Math.floor(Math.random() * 10)
			this.playerHealth += heal

			//Monster continues to attack
			this.monsterAttacks();

			if(this.playerHealth >= 100)
			{
				alert("You already have full health!");
				this.playerHealth = 100;
			}
			else
			{
				this.turns.unshift(
				{
					isPlayer: true,
					text: "Player heals for "+heal
				});
			}

			if(this.checkWin())
			{
				this.startGame();
			}
		},
		checkWin: function()
		{
			if(this.monsterHealth <= 0)
			{
				alert("Congratulations!! You won");
				this.monsterHealth = 0;
				return true;
			}
			else if(this.playerHealth <= 0)
			{
				alert("Boo!! You lost");
				this.playerHealth = 0;
				return true;
			}
			return false;			
		},
		monsterAttacks: function()
		{
			var damage = Math.floor(Math.random() * 10);
			//Monster attacking player
			this.playerHealth -= damage;

			this.turns.unshift(
			{
				isPlayer: false,
				text: "Monster hits Player for "+damage
			});
		}
	}
})