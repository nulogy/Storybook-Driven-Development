import { PropTypes } from 'react';
import mapValues from 'lodash/mapValues';

// Prop type validation that specifies the
// class names in the passed ICSS object (https://github.com/css-modules/icss)
// as the keys in a PropTypes.shape
const styleProp = icssStyles => PropTypes.shape(mapValues(icssStyles, () => PropTypes.string));

export default styleProp;
