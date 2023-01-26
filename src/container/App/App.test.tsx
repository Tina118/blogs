import { render } from '@testing-library/react';
import App from './index';

test('renders main App', () => {
  const fragment = render(<App />);
  expect(fragment).toMatchSnapshot();
});
