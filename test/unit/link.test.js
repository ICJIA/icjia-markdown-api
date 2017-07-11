const {app, expect } = require('../common')

//Get a ref to link model
const Link = app.models.Link

describe('It should resolve', function () {
  it('a Link.find', function () {
    return Link
    .find()
    .then(res => console.log(res))
  })
})

// describe('mdContent minimum of 3 characters', function () {
//   it('minimum', function () {
//     const link = new Link({})
//     return Link
//     .find()
//     .then(res => console.log(res))
//   })
// })
