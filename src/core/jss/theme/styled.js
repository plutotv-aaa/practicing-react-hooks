import { styled as styledWithoutDefault } from '../';
import defaultTheme from './defaultTheme';

const styled = Component => {
  const componentCreator = styledWithoutDefault(Component);

  return (style, options) =>
    componentCreator(style, {
      defaultTheme,
      ...options,
    });
};

export default styled;
