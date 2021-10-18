var axios = require("axios").default;

export default function handler(req, res) {
  var options = {
    method: 'GET',
    url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php',
    params: {s: 'margarita'},
  };

  axios.request(options).then(function (response) {
    res.status(200).json(response.data);
  }).catch(function (error) {
    res.status(404).json(error);
  });
}
