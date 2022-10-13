import { subDays, format } from 'date-fns';

const date = new Date(1998, 1, 28); // Feb 28 - 1998

// Subtract 30 days
const rta = subDays(date, 30);
console.log(rta);

// Formatting the date
const str = format(rta, 'yyyy/MM/dd');

// Show the date formated
console.log(str);