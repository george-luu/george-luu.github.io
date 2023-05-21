const URL_PARAMS = new URLSearchParams(window.location.search);
const TOKEN = URL_PARAMS.get('/');


// Show an element
const show = (selector) => {
  document.querySelector(selector).style.display = 'block';
};

// Hide an element
const hide = (selector) => {
  document.querySelector(selector).style.display = 'none';
};
if (TOKEN=='done') {   
  hide('.content.unauthorized');
  show('.content.authorized');
  console.log(TOKEN)
  //const activities_link = `https://www.strava.com/api/v3/athlete/activities/?access_token=${TOKEN}`
//fetch(activities_link)
  //.then((res) => console.log(res.json()))
}

