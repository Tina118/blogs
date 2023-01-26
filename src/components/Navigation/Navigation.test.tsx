import { render } from '@testing-library/react';
import Navigation from './index';

test('renders navigation', () => {
  const fragment = render(<Navigation handleLogout={()=>{}} handleSearch={()=>{}} value="hello" showSearch={true}/>);
  expect(fragment).toMatchSnapshot();
});
