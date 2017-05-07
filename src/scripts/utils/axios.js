import axios from 'axios'

export default {
  get:(param)=>{
    axios({
      method:param.type,
      url:param.url,
    })
    .then(function(res){
      param.callback(res);
    })
  }
}
