import React from 'react';
import moment from 'moment';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

type Props = {
  date: Object,
  base: string,
  quote: string,
  conversionRate: number,
};

const LastConverted = ({
  base, date, quote, conversionRate,
}: Props) => (
  <Text style={styles.smallText}>
    {`1 ${base} = ${conversionRate} ${quote} as of ${moment(date).format(
      'MMMM D, YYYY',
    )}`}
  </Text>
);

LastConverted.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  base: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  conversionRate: PropTypes.number.isRequired,
};

export default LastConverted;
