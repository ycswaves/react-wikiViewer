var Axios =  require('axios');

Axios({
      url: 'http://example.com/',
      //timeout: 20000,
      //method: 'get',
      responseType: 'json',
    }).then(function(response) {
      console.log('in then:');
    })
    .catch(function(response){
      console.log('in catch:');
    })