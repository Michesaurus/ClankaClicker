class Game{
  constructor(){
    this.store = new Store()
    this.totalClankas = 0
    this.clickPower = 1
    this.bankruptBonus = 0
    setInterval(() => this.clickOnClankaButton(), 1000)
  }

  getState(){
    return {
      clankas: Math.round(this.totalClankas),
      urbanFactoryCost : Math.round(this.store.getUpgrade(0).realCost),
      spatialFactoryCost : Math.round(this.store.getUpgrade(1).realCost),
      planetaryFactoryCost : Math.round(this.store.getUpgrade(2).realCost),
    }
  }

  clickOnClankaButton(){
      this.totalClankas = this.totalClankas + this.clickPower
  }

  buyUpgrade(levelUpgrade){
    const upgrade = this.store.getUpgrade(levelUpgrade)  // { defaultCost : , power : , realCost: }
    const canBuyUpgrade = this.totalClankas >= upgrade.realCost
    if(canBuyUpgrade){
      this.store.buyUpgrade(levelUpgrade);
      this.totalClankas = this.totalClankas - upgrade.realCost;
      this.clickPower = this.clickPower * upgrade.power;
      this.store.updateCostUpgrade(levelUpgrade, this.bankruptBonus);
    }
  }

  goBankrupt(){
    this.bankruptBonus += this.getBrankruptBonus()
    this.totalClankas = 0;
    this.store = new Store()
    this.store.updateAllCostUpgrade(this.bankruptBonus);
    console.log(this.bankruptBonus)
    this.clickPower = 1
  }


  getBrankruptBonus(){
    return Math.trunc(this.totalClankas/100)
  }

}