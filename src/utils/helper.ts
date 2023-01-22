import moment from 'moment';
/**
 * Format date
 * @param {string} date
 * @returns
 */
export const formatDate = (date: string) => {
  return moment(date).format('MMM YYYY');
};
