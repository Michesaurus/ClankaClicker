class Store{
    constructor(){

        this.upgrades = [
            {
                defaultCost: 10,
                realCost: 10,
                amount: 0,
                power: 1.25,
                costFactor: 2,
            },
            {
                defaultcost: 50,
                realCost: 50,
                amount: 0,
                power: 1.5,
                costFactor: 2.5,
            },
            {
                defaultCost: 100,
                realCost: 100,
                amount: 0,
                power: 2,
                costFactor: 3,
            }
        ]
    }

    getUpgrade(levelUpgrade){
        return this.upgrades[levelUpgrade];
    }

    buyUpgrade(levelUpgrade){
        const upgrade = this.upgrades[levelUpgrade];
        upgrade.amount++;
    }

    updateAllCostUpgrade(bankruptBonus){
        for (const [index, upgrade] of this.upgrades.entries()){
            this.updateCostUpgrade(index, bankruptBonus)
        }
    }

    updateCostUpgrade(levelUpgrade, bankruptBonus){
        const upgrade = this.upgrades[levelUpgrade]
        const amountCost = upgrade.realCost * Math.pow(upgrade.costFactor,upgrade.amount);
        const reducedCost = amountCost * Math.pow(0.9,bankruptBonus)
        upgrade.realCost = reducedCost;
    }

}