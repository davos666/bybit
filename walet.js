const { apiKey, apiSecret } = require('./apiSecret');
const { RestClientV5 } = require('bybit-api');
const args = process.argv.slice(2);
if (args.length < 2) {
    console.log("coin is "+args[0]);
}


const client = new RestClientV5({
  testnet: false,
  key: apiKey,
  secret: apiSecret,
});


client
  .getWalletBalance({
    accountType: 'UNIFIED',
    coin: args[0], 
  })
  .then((response) => {

console.log(response.result.list[0].coin[0]);

    });







