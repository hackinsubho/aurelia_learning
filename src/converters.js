import moment from 'moment';
import numeral from 'numeral';

export class DateFormatValueConverter {
   toView(value) {
      return moment(value).format('D/M/YYYY');
   }
}

export class CurrencyFormatValueConverter {
  toView(value) {
     return numeral(value).format('($0,0.00)');
  }
}
