const clientId = '568a5185f73f485883fb741842e339a7';
const clientSecret = '2d8dcc505daa4be7b98c047a64f95608';

const getUrlParameter = (sParam) => {
   let sPageURL = window.location.search.substring(1),////substring will take everything after the https link and split the #/&
       sURLVariables = sPageURL != undefined && sPageURL.length > 0 ? sPageURL.split('#') : [],
       sParameterName,
       i;
   let split_str = window.location.href.length > 0 ? window.location.href.split('#') : [];
   sURLVariables = split_str != undefined && split_str.length > 1 && split_str[1].length > 0 ? split_str[1].split('&') : [];
   for (i = 0; i < sURLVariables.length; i++) {
       sParameterName = sURLVariables[i].split('=');
       if (sParameterName[0] === sParam) {
           return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
       }
   }
};

const accessToken = getUrlParameter('access_token');
let client_id = '568a5185f73f485883fb741842e339a7';


let redirect_uri = 'https%3A%2F%2Fananthastaputra.github.io%2Fspotify-clone';

const redirect = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}`

if(accessToken == null || accessToken == "" || accessToken == undefined){
   window.location.replace(redirect);
 }


fetch("https://accounts.spotify.com/authorize" ,{
   method: 'GET',
   headers: {
      'Authorization' : 'Bearer ' + accessToken
  }

})
.then(res=>{
   res.json()
})


