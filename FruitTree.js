class FruitTree {
    constructor (mature,stopGrowing,wither) {
      this._age = 0
      this._height = 0
      this._fruitsStatus = false
      this._healthStatus = true
      this._fruits = []
      this._totalHarvest = 0
      this._mature = mature
      this._stopGrowing = stopGrowing
      this._wither = wither
      this._matureStatus = false
      this._harvested = ''
    }
  
    get age () {
      return this._age
    }
  
    get height () {
      return this._height
    }
  
    get fruits () {
      return this._fruits
    }
  
    set fruits(value){
      this.fruits = value
    }
  
    get harvested () {
      return this._harvested
    }
  
    get healthStatus () {
      return this._healthStatus
    }
  
    get mature(){
      return this._mature
    }
  
    get stopGrowing(){
      return this._stopGrowing
    }
  
    get wither (){
      return this._wither
    }
  
  
    grow() {
      this._age += 1
      
      if (this._age <= this._stopGrowing) {
        this._height = this._height + Math.random()
      }
  
      if (this._age >= this.mature) {
        this._matureStatus = true
      }
  
      if (this.age >= this.wither) {
        this._healthStatus = false
      } 
    }
  
    // Produce some mangoes
    produce() {
      if(this._matureStatus == false){
        this._harvested = `tree not mature enough to produce some fruits`
      }else if (this._matureStatus == true) {
        let fruits = Math.floor(Math.random()*20)
        for (let i = 0; i < fruits; i++) {
          let buah = new Fruit()
          this._fruits.push(buah)
          // console.log(this.fruits);
        }
      }
    }
  
    // Get some fruits
    harvest () {
      let good = 0
      let bad = 0
      if (this._fruits) {
        let totalHarvest = this._fruits.length
        for (let i = 0; i < this._fruits.length; i++) {
          if (this._fruits[i].quality === 'good') {
            good++
          } else {
            bad++
          }
        }
        this._harvested = `${totalHarvest} (${good} good , ${bad} bad)`
      }
    }
  }
  
  class Fruit {
    constructor () {
      this.quality = this.check()
  
    }

    check(){
      let status = Math.floor(Math.random()*5)
      // console.log(status);
      if (status < 2) {
        return 'good'
      } else {
        return 'bad'
      }
        
    }
  }


     module.exports = { FruitTree, Fruit }
    
     