import React from 'react';

const renderSalary = (from, to, currency) => {
  if (from !== 0 && to !== 0) {
    return (
      <span>
        з/п
        {' '}
        {from}
        -
        {to}
        {' '}
        {currency}
      </span>
    );
  }

  if (from !== 0 && to === 0) {
    return (
      <span>
        з/п
        {' '}
        от
        {' '}
        {from}
        {' '}
        {currency}
      </span>
    );
  }

  if (from !== 0 && to === 0) {
    return (
      <span>
        з/п
        {' '}
        {to}
        {' '}
        {currency}
      </span>
    );
  }

  return (<span>з/п по договоренности</span>);
};

export default renderSalary;
