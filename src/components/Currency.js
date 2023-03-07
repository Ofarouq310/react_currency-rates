import React from 'react';
import PropTypes from 'prop-types';

export default function Currency(props) {
  const { currency } = props;
  const showDetails = () => {
    window.location.href = `/details/${currency}`;
  };

  return (
    <>
      <div className="currency" onClick={showDetails} onKeyDown={showDetails} role="button" tabIndex={0}>
        {currency}
      </div>
    </>
  );
}

Currency.propTypes = {
  currency: PropTypes.string.isRequired,
};
