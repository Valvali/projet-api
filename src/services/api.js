import axios from 'axios'
import config from '../config'

var api = axios.create({
  baseURL: config.url,
  headers: {
		'Authorization': 'Token token='+'3ad23921113a4c2b840575b2d3f4c6b2'
	}
});
export default api