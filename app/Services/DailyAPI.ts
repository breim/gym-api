import Env from '@ioc:Adonis/Core/Env'
import { AxiosRequestConfig } from 'axios'

import HttpClient from './http-client'
import { v4 as uuidv4 } from 'uuid'

class DailyAPI extends HttpClient {
  constructor() {
    super(Env.get('DAILY_API_URL'))
    this._initializeRequestInterceptor()
  }

  private _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this._handleRequest, this._handleError)
  }

  private _handleRequest = (config: AxiosRequestConfig) => {
    config.headers!['Authorization'] = `Bearer ${Env.get('DAILY_API_TOKEN')}`

    return config
  }

  public rooms = () => this.instance.get('/rooms')

  public room = () => {
    const payload = {
      name: uuidv4(),
      privacy: 'public',
      properties: {
        autojoin: true,
      },
    }

    const response = this.instance.post('/rooms', payload)

    return response
  }

  public createMeetingToken = (room_name) => {
    const payload = {
      properties: {
        room_name: room_name,
        is_owner: true,
        user_name: 'Prof Henrique',
      },
    }

    const response = this.instance.post('/meeting-tokens', payload)

    return response
  }
}

export default DailyAPI
