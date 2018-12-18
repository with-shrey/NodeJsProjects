const AsyncQueue = require('./AsyncQueue')


const queue = new AsyncQueue();

queue.enQueueData(5)
queue.enQueueData(10)
queue.enQueueData(15)

queue.deQueueData()
queue.deQueueData()