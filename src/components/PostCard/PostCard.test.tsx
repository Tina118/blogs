import { render } from '@testing-library/react';
import PostCard from './index';

test('renders main App', () => {
  const fragment = render(<PostCard id="1" name="dummy" email="test@gmail.com"/>);
  expect(fragment).toMatchSnapshot();
});
