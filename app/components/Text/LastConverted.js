import React from 'react';
import moment from 'moment';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const LastConverted = ({ base, date, quote, conversionRate }) => (
  <Text style={styles.smallText}>
    {`1 ${base} = ${conversionRate} ${quote} as of ${moment(date).format(
      'MMMM D, YYYY',
    )}`}
  </Text>
);

LastConverted.propTypes = {
  date: PropTypes.object.isRequired,
  base: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  conversionRate: PropTypes.number.isRequired,
};

export default LastConverted;
