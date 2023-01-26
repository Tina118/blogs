import { render } from '@testing-library/react';
import Notification from './index';

test('renders notification', () => {
  const fragment = render(<Notification  alertMessage='Please fill data correctly '/>);
  expect(fragment).toMatchSnapshot();
});
