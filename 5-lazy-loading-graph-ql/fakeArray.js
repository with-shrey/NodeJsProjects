const faker = require('faker')

var fakeArray = []
for (var i=0;i<1000 ; i++){
    var obj = {
        id: i,
        name: faker.name.findName(),
        email:faker.internet.email(),
        address:faker.address.streetAddress(),
        image:faker.image.avatar()
    }
    fakeArray.push(obj)
}


module.exports = fakeArray