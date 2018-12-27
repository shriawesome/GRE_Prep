var request=require('request');
//query Details
let subkey='8eb4a5b63a8f432d924868e53c267b79';
let host='https://api.labs.cognitive.microsoft.com/answerSearch/v7.0/search';
let path='/answerSearch/v7.0/search';
let mkt='en-us';
let query='how big is mount Everest ?';
let params='?q='+encodeURI(query)+'&mkt=en-us';
console.log(host+params)

function Search(){
  let req_params ={
    method : 'GET',
    url : host+params,
    headers :{
      'Ocp-Apim-Subscription-Key':subkey,
    }
  };
  return new Promise(function(resolve,reject){
    request.get(req_params, function(err, response, body){
      if(err) reject(err);
      let body_=JSON.parse(body);
      let body__=JSON.stringify(body_,null,' ');
      resolve(body__);
      });
  });
}

Search().then(function(data){
  console.log(data);
});
