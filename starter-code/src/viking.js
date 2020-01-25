// Soldier
class Soldier {

    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {

        return this.strength;

    }

    receiveDamage(damage) {

        this.health = this.health - damage;


    }

}

// Viking
class Viking extends Soldier {

    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;

    }

    receiveDamage(damage) {

        this.health = this.health - damage;

        if (this.health > 0) {

            return `${this.name} has received ${damage} points of damage`;

        } else if (this.health <= 0) {

            return `${this.name} has died in act of combat`;

        }

    }

    battleCry() {

        return `Odin Owns You All!`

    }
}


// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {

        this.health = this.health - damage;

        if (this.health > 0) {

            return `A Saxon has received ${damage} points of damage`;

        } else if (this.health <= 0) {

            return `A Saxon has died in combat`;

        }



    }


}

// War
class War {

    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }



    addViking(viking) {

        this.vikingArmy.push(viking);

    }

    addSaxon(saxon) {

        this.saxonArmy.push(saxon);

    }
    vikingAttack() {



        if (this.vikingArmy.length > 0) {

            return this.attack(this.vikingArmy, this.saxonArmy);

        } else {

            return `There is no Viking army to attack with`

        }
    }

    saxonAttack() {

        if (this.saxonArmy.length > 0) {

            return this.attack(this.saxonArmy, this.vikingArmy);

        } else {

            return `There is no Saxon army to attack with`

        }

    }

    attack(attackArmy, defenseArmy) {

        let index = Math.floor(Math.random(defenseArmy.length) * defenseArmy.length);
        let targetDefenseArmy = defenseArmy[index];
        let targetAttackArmy = attackArmy[Math.floor(Math.random(attackArmy.length) * attackArmy.length)];
        const result = targetDefenseArmy.receiveDamage(targetAttackArmy.strength);

        if (targetDefenseArmy.health <= 0) {

            defenseArmy.splice(index, 1);

            return result;

        }

        return result;
    }


    showStatus() {

        if (this.saxonArmy.length === 0) {

            return `Vikings have won the war of the century!`;

        } else if (this.vikingArmy.length === 0) {

            return `Saxons have fought for their lives and survived another day...`;

        } else {

            return `Vikings and Saxons are still in the thick of battle.`;


        }


    }



}




