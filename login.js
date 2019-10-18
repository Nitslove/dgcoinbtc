/* Example script for sweeping all coins from a given address
 * Must use the API Key for the Network the address belongs to
 * Must also provide the Private Key to the sweep address in Wallet Import Format (WIF)
 *
 * Contact support@block.io if you have any issues
 */
var BlockIo = require('block_io');

// PIN IS NOT NEEDED!!!

var client = new BlockIo('4db8-a665-27b0-a52a', 'qwerty123',2);
/*var amounts ='0.0001';
var from_addresses ='2MvUYXizcBZL9qUj3vKaCmm638rqGKgcZDs';
var to_addresses ='2N9eQ7eK8z3uQU8xiooTLG9r4mw5LNdDD5N';
*/


client.get_new_address({label: 'testqwer'}, function (error, data) {
  if (error) return console.log("Error occured:", error.message);
    console.log(JSON.stringify(data, null, 2));
});



/*client.withdraw_from_addresses({amounts: amounts, from_addresses: from_addresses, to_addresses: to_addresses},  function (error, response) {
  if (error) return console.log('Sweep failed: ', error.message);
  console.log("response",response);



  //console.log(['Sweep Complete:', response.data.amount_sent, response.data.network, 'swept to ', to_address].join(' '));
  //console.log(['Transaction ID:', response.data.txid].join(' '));//
  //console.log(['Network Fee Incurred:', response.data.network_fee, response.data.network].join(' '));

});*/
