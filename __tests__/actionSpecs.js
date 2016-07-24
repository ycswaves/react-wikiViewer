import ConfigureMockStore from 'redux-mock-store'
import Nock from 'nock'
import Thunk from 'redux-thunk'

import * as Actions from '../src/actions/actionCreator'
import Ajax from '../src/actions/ajax.js'
import * as Types from '../src/actions/actionTypes'



const middlewares = [ Thunk ]
const mockStore = ConfigureMockStore(middlewares)

describe('testing ajax', () => {
  afterEach(() => {
    Nock.cleanAll()
  })

  it('creates RECV_DATA when request has been done', (done) => {
    Nock('http://localhost:9876').get('/').reply(200, "Hello World!" ); //not working

    // fetchMock.mock('http://localhost:9876',{
    //   status:200,body:{items:['do something']}
    // })

    let expectedActions = [
      { type: Types.REQ_DATA },
      { type: Types.RECV_DATA, data: null }
    ]


    const store = mockStore()

    store.subscribe(function() {
      const expectedAction = expectedActions.shift();

      const actions = store.getActions();

      expect(actions[actions.length - 1]).toEqual(expectedAction);
      if (!expectedActions.length) {
        done();
      }
    });

    store.dispatch(Ajax('http://localhost:9876')); // go to live server

  })

})