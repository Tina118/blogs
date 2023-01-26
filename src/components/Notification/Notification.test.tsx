import { render } from '@testing-library/react';
import Notification from './index';

test('renders main App', () => {
  const fragment = render(<Notification  alertMessage='Please fill data correctly '/>);
  expect(fragment).toMatchSnapshot();
});
