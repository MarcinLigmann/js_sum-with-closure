'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const error = 'Bzzz... Error!';

  return (a) => {
    count++;

    return (b) => {
      if (count > 3 & count % 2 === 0) {
        return error;
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
