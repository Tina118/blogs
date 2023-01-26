import { render } from '@testing-library/react';
import SubmitButton from './index';

test('renders Submit Button', () => {
  const fragment = render(<SubmitButton buttonText="Login" onClick={()=>{}} />);
  expect(fragment).toMatchSnapshot();
});
