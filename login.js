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
var Amount = '';

var BlockIo = require('block_io');

// PIN IS NOT NEEDED!!!

var client = new BlockIo('8964-d730-fa40-2832', 'ramlogics1234',2);



app.get('/Create', function (req, res) {
  
   client.get_new_address({}, function (error, data) {

      res.contentType('application/json');
        res.end(JSON.stringify(data, null, 2));

      if (error) return console.log("Error occured:", error.message);
        
    });



});


app.get('/BTCTransfer', function (req, res) {
//To specify what to do and run that function.
    
    ToAddress = req.query.ToAddress;
    FromAddress = req.query.FromAddress;
    Amount = req.query.Amount;
     
    client.withdraw_from_addresses({amounts: Amount, from_addresses: FromAddress, to_addresses: ToAddress},  function (error, response) {
    
    res.contentType('application/json');
    res.end(JSON.stringify(response));

    if (error) return console.log('Sweep failed: ', error.message);
    
    
    
    //console.log("response",response);
    //console.log(['Sweep Complete:', response.data.amount_sent, response.data.network, 'swept to ', to_address].join(' '));
    res.contentType('application/json');
    res.end(JSON.stringify(data, null, 2));
    //console.log(['Transaction ID:', response.data.txid].join(' '));//
    //console.log(['Network Fee Incurred:', response.data.network_fee, response.data.network].join(' '));

  });
});



if (module === require.main) {
    // Start the server
    var server = app.listen(process.env.PORT || 8080, function () {
        var port = server.address().port;
        console.log('App listening on port %s', port);
    });
}
module.exports = app;
