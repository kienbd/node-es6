import request from 'supertest'
import expect from 'expect'

import app from '../src/server'


describe('GET /', () => {

  it('Go to / and return Hello World!', done => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello World!')
      .end(done)
  })

})
