//封装
const db = wx.cloud.database()

class HYCollection {
  constructor(collectionName){
    this.collection = db.collection(collectionName)
  }
  //增删改查
  add(data){
    return this.collection.add({
      data
    })
  }

  remove(condition,isDoc = true) {//isDoc是默认条件，判断删除多个还是单个，默认为单个
    if(isDoc){
      this.collection.doc(condition).remove()
    } else {
      this.collection.where({}).remove()
    }
  }

  update(condition, isDoc = true){
    if (isDoc) {
      return this.collection.doc(condition).update()
    } else {
      return this.collection.where(condition).update()
    }
  }

  query(offset = 0, size = 20,condition = {},isDoc = false){
    if (isDoc) {
      return this.collection.doc(condition).get()
    } else {
      return this.collection.where(condition).skip(offset).limit(size).get()
    }
  }
}


//添加想要的方法
export const siteCollection = new HYCollection("site")
//调用案例：siteCollection.remove("xxx")   or siteCollection.remove({name:"xxxx" 这个为条件},false)
// siteCollection.query()//0~19
export const userCollection = new HYCollection("user")