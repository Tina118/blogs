import { render } from '@testing-library/react';
import SubmitButton from './index';

test('renders main App', () => {
  const fragment = render(<SubmitButton buttonText="Login" onClick={()=>{}} />);
  expect(fragment).toMatchSnapshot();
});
