const {FruitTree,Fruit} = require ('./FruitTree')



class AppleTree extends FruitTree {
  constructor () {
      super (3,10,13)

    }

    produce() {
        if(this._matureStatus == false){
          this._harvested = `tree not mature enough to produce some fruits`
        }else if (this._matureStatus == true) {
          let fruits = Math.floor(Math.random()*20)
          for (let i = 0; i < fruits; i++) {
            let buah = new Apple()
            this._fruits.push(buah)
           
          }
        }
      }
    
}

class Apple extends Fruit{
  constructor () {
    super()
  }
}


let appleTree = new AppleTree()
console.log('lets watch apple this tree grow');
   do {
     appleTree.grow();
     appleTree.produce();
     appleTree.harvest();
     console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(1)} M | Fruits harvested = ${appleTree.harvested}`)
   } while (appleTree.healthStatus != false)
   console.log('sad the apple tree has died');
