import Vue from 'vue'
import api from '@/services/api'
import ls from '@/services/ls'

export default {
	install: (Vue, options = {}) => {
		// Add a request interceptor
api.interceptors.request.use( function (config) {
	if(ls.get('token')) {
		if(!config.params){
			config.params = {}
		}
		config.params.token = ls.get('token')
	}
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// Add a response interceptor
api.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
	}
}