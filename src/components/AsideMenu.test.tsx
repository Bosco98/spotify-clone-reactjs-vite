import { render } from '@testing-library/react';
import AsideMenu from './AsideMenu';
import { MemoryRouter } from 'react-router-dom';

jest.doMock('./SideMenuItem');
jest.doMock('./SideMenuCard');

describe('AsideMenu Component', () => {
  test('renders AsideMenu component with SideMenuItem and SideMenuCard', () => {
    const { getByText } = render(
    <MemoryRouter>
      <AsideMenu />
    </MemoryRouter>
    );
    // Ensure SideMenuItem components are rendered
    const homeMenuItem = getByText('Home');
    const searchMenuItem = getByText('Search');
    expect(homeMenuItem).toBeInTheDocument;
    expect(searchMenuItem).toBeInTheDocument;

  });
});
