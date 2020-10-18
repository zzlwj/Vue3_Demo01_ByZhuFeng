import axios from 'axios'

const instance=axios.create({
  baseURL:process.env.VUE_APP_URL,
  timeout:3000
})

instance.interceptors.request.use((config)=>{
  return config;
})

instance.interceptors.response.use((res)=>{
  return res.data.data;
},err=>{
  return Promise.reject(err);
})

export function request(opts){ //vue-cli-services 会进.env文件里去找VUE_APP_URL
  return instance(opts)
}
