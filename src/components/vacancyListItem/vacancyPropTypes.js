import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number,
  profession: PropTypes.string,
  payment: PropTypes.string,
  payment_from: PropTypes.number,
  payment_to: PropTypes.number,
  currency: PropTypes.string,
  type_of_work: PropTypes.shape({
    title: PropTypes.string,
  }),
  town: PropTypes.shape({
    title: PropTypes.string,
  }),
});
