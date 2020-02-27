const hasSymbol = typeof Symbol === 'function' && Symbol.for;

export default (hasSymbol ? Symbol.for('squi.nested') : '__THEME_NESTED__');
