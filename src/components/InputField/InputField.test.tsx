import { render } from '@testing-library/react';
import InputField from './index';

test('renders main App', () => {
  const fragment = render(<InputField type="text" id="username" placeholder="Enter username" onChange={()=>{}} />);
  expect(fragment).toMatchSnapshot();
});
