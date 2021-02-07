const {FruitTree,Fruit} = require ('./FruitTree')



class PearTree extends FruitTree {
  constructor () {
      super (3,10,13)

    }

    produce() {
        if(this._matureStatus == false){
          this._harvested = `tree not mature enough to produce some fruits`
        }else if (this._matureStatus == true) {
          let fruits = Math.floor(Math.random()*20)
          for (let i = 0; i < fruits; i++) {
            let buah = new Pear()
            this._fruits.push(buah)
           
          }
        }
      }
    
}

class Pear extends Fruit{
  constructor () {
    super()
  }
}


let pearTree = new PearTree()
console.log('lets watch pear this tree grow');
   do {
     pearTree.grow();
     pearTree.produce();
     pearTree.harvest();
     console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height.toFixed(1)} M | Fruits harvested = ${pearTree.harvested}`)
   } while (pearTree.healthStatus != false)
   console.log('sad the pear tree has died');
