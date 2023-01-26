import { render } from '@testing-library/react';
import SubmitButton from './index';

test('renders main App', () => {
  const fragment = render(<SubmitButton numberOfTotalPages={10} handlePagination={()=>{}} />);
  expect(fragment).toMatchSnapshot();
});
