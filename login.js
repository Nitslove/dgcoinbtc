/* Example script for sweeping all coins from a given address
 * Must use the API Key for the Network the address belongs to
 * Must also provide the Private Key to the sweep address in Wallet Import Format (WIF)
 *
 * Contact support@block.io if you have any issues
 */

var express = require('express');
var app = express();
var task_code = '';
var ToAddress = '';
var FromAddress = '';
var Value = '';

var BlockIo = require('block_io');

// PIN IS NOT NEEDED!!!

var client = new BlockIo('4db8-a665-27b0-a52a', 'qwerty123',2);



app.get('/', function (req, res) {
//To specify what to do and run that function.
    task_code = req.query.task;
    ToAddress = req.query.ToAddress;
    FromAddress = req.query.FromAddress;
    Amount = req.query.Amount;

    switch (task_code) {
        case 'Create': Create(res); break;
        case 'getEther': getEther(res,ToAddress); break;
        
        default:
          res.contentType('application/json');
          res.end(JSON.stringify("DGCOIN BTC node is ready for testnet..."));
    }
});

// client.withdraw_from_labels({
//   from_labels: 'default',
//   to_label: 'testDest',
//   amount: '3.5',
//   pin: PIN
// }, function (error, data) {
//   if (error) return console.log("Error occured:", error.message);
//     console.log(JSON.stringify(data, null, 2));
// });





function Create(res){
    client.get_new_address({}, function (error, data) {
      if (error) return console.log("Error occured:", error.message);
        res.contentType('application/json');
        res.end(JSON.stringify(data, null, 2));
    });
}

function EtherTransfer(res,ToAddress,NoEther,FromAddress){
  client.withdraw_from_addresses({amounts: amounts, from_addresses: FromAddress, to_addresses: ToAddress},  function (error, response) {
    if (error) return console.log('Sweep failed: ', error.message);
    
    res.contentType('application/json');
    res.end(JSON.stringify(response));
    
    console.log("response",response);
    //console.log(['Sweep Complete:', response.data.amount_sent, response.data.network, 'swept to ', to_address].join(' '));
    //console.log(['Transaction ID:', response.data.txid].join(' '));//
    //console.log(['Network Fee Incurred:', response.data.network_fee, response.data.network].join(' '));

  });
}





