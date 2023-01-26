import { render } from '@testing-library/react';
import Pagination from './index';

test('renders Pagination', () => {
  const fragment = render(<Pagination numberOfTotalPages={10} handlePagination={()=>{}} />);
  expect(fragment).toMatchSnapshot();
});
