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
