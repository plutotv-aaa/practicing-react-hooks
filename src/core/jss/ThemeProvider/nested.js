const hasSymbol = typeof Symbol === 'function' && Symbol.for;

export default hasSymbol ? Symbol.for('plutoTV.nested') : '__THEME_NESTED__';
