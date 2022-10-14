import _ from 'lodash';

/*Official documentation
var _ = require('lodash)
*/

const data = [
    {
        username: 'christian',
        role: 'admin'
    },
    {
        username: 'diego',
        role: 'seller'
    },
    {
        username: 'eduardo',
        role: 'seller'
    },
    {
        username: 'santiago',
        role: 'customer'
    }
]

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);