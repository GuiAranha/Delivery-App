import React, { useMemo, useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [cart, setCart] = useState([]);
  const data = useMemo(
    () => ({
      cart,
      setCart,
    }),
    [cart, setCart],
  );
  return <AppContext.Provider value={ data }>{children}</AppContext.Provider>;
}
AppProvider.propTypes = {
  children: propTypes.props,
}.isRequired;
export default AppProvider;
/* import React from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  return <AppContext.Provider value>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: propTypes.props,
}.isRequired;

export default AppProvider;
 */
