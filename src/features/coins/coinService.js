import axios from 'axios'
const trendingCoins = async () =>{
  const response = await axios.get("https://api.coingecko.com/api/v3/search/trending");
  console.log(response);
   return response.data.coins;

}

const coinService = {
    trendingCoins,
}
export default coinService;


