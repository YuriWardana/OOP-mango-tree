const {FruitTree,Fruit} = require ('./FruitTree')



class MangoTree extends FruitTree {
  constructor () {
      super (3,10,13)

    }

    produce() {
        if(this._matureStatus == false){
          this._harvested = `tree not mature enough to produce some fruits`
        }else if (this._matureStatus == true) {
          let fruits = Math.floor(Math.random()*20)
          for (let i = 0; i < fruits; i++) {
            let buah = new Mango()
            this._fruits.push(buah)
           
          }
        }
      }
    
}

class Mango extends Fruit{
  constructor () {
    super()
  }
}


let mangoTree = new MangoTree()
console.log('lets watch this tree grow');
   do {
     mangoTree.grow();
     mangoTree.produce();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)} M | Fruits harvested = ${mangoTree.harvested}`)
   } while (mangoTree.healthStatus != false)
   console.log('sad the tree has died');
