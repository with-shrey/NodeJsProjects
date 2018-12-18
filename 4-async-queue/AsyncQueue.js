class AsyncQueue{
    constructor(){
        this.queue = []
    }

    async enQueueData(data){
        var promise =  new Promise(resolve => {

            resolve(this.queue.push(data))
        })
        var val =  await promise
        console.log("Length After Insert "+data+":" + val)
    }

   async deQueueData(){
        var value
       try {
           value = await new Promise((resolve, reject) => {
               if (this.queue.length > 0) {
                   resolve(this.queue.shift())
               }else {
                   reject(new Error(null))
               }
           })
           console.log("Removed Value : "+value)
       }catch(e){
           console.log("Empty Queue")
       }
    }
}

module.exports = AsyncQueue