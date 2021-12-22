class Display{
    constructor(){
        this.game = new Game()
        this.leClanka = window.document.getElementById("Clanka")
        this.clankaCountHTML = window.document.getElementById("TotalClankas")
        this.firstUpgradeCostHTML = window.document.getElementById("FirstUpgradeCost")
        this.secondUpgradeCostHTML = window.document.getElementById("SecondUpgradeCost")
        this.thirdUpgradeCostHTML = window.document.getElementById("ThirdUpgradeCost")
        this.bankruptButtonHTML = window.document.getElementById("BankruptButton")
        this.init()
    }

    init(){
        const bite = this.initEventListener()
        this.initLoop()
        // setInterval(this.RefreshHTML.bind(this), 1000, this.clankaCountHTML, this.game.totalClankas)
    }
    
    initLoop(){
        loop(() => this.refresh())
    }
    
    refreshHTML(HTMLelement, value){
      HTMLelement.innerHTML = value
    }
    
    refresh(){
        const state = this.game.getState()
        this.refreshHTML(this.firstUpgradeCostHTML, state.urbanFactoryCost);
        this.refreshHTML(this.secondUpgradeCostHTML, state.spatialFactoryCost);
        this.refreshHTML(this.thirdUpgradeCostHTML, state.planetaryFactoryCost);
        this.refreshHTML(this.clankaCountHTML, state.clankas);
    }

    initEventListener(){
        this.leClanka.addEventListener("click", ()=>{
            this.game.clickOnClankaButton()
        });
        this.firstUpgradeCostHTML.addEventListener("click",()=>{
            this.game.buyUpgrade(0)
        });
        this.secondUpgradeCostHTML.addEventListener("click",()=>{
            this.game.buyUpgrade(1)
        });
        this.thirdUpgradeCostHTML.addEventListener("click", ()=>{
            this.game.buyUpgrade(2)
        });
        this.bankruptButtonHTML.addEventListener("click", ()=>{
            this.game.goBankrupt()
        });
    }

    

}

const loop = (refresh) => {
    window.requestAnimationFrame(() => {
        refresh()
        loop(refresh)
    })
}

const leJeu = new Display()




// <-- JE T'AIME JEREMY :)
