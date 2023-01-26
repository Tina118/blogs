import { render } from '@testing-library/react';
import DetailedPostcard from './index';

test('renders Detailed Post Card', () => {
  const fragment = render(<DetailedPostcard  id={1} name="test" email="test@gmail.com" body="testing" />);
  expect(fragment).toMatchSnapshot();
});
