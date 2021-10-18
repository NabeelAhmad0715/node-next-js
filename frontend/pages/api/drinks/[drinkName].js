// import { drinks } from '../../../data'

// export default function handler({ query: { id } }, res) {
//   const filtered = drinks.filter((drink) => drink.id === id)

//   if (filtered.length > 0) {
//     res.status(200).json(filtered[0])
//   } else {
//     res
//       .status(404)
//       .json({ message: `drink with the id of ${id} is not found` })
//   }
// }

var axios = require("axios").default;

export default function handler({ query: { drinkName } }, res) {
  var options = {
    method: 'GET',
    url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php',
    params: {s: drinkName},
  };
  axios.request(options).then(function (response) {
    res.status(200).json((response.data).drinks[0]);
  }).catch(function (error) {
    res.status(404).json(error);
  });
}
