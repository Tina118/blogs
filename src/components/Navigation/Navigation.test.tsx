import { render } from '@testing-library/react';
import Navigation from './index';

test('renders main App', () => {
  const fragment = render(<Navigation handleLogout={()=>{}} handleSearch={()=>{}} value="hello" showSearch={true}/>);
  expect(fragment).toMatchSnapshot();
});
