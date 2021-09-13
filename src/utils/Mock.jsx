import MockAdapter from 'axios-mock-adapter'
import axios from './Axios'

const instance = new MockAdapter(axios, { delayResponse: 2})

export default instance