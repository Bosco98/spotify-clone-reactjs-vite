import { render ,screen} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchItemCard from './SearchItemCard';
import { colors } from '../../lib/colors';

describe('SearchItemCard Component', () => {
  const playlists = [
    {
      id: "1",
      albumId: 1,
      title: "Chill Lo-Fi Music",
      color: colors.yellow,
      cover:
        "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
      artists: ["NoSpirit", "Casiio"],
    },
    {
      id: "2",
      albumId: 2,
      title: "Lo-Fi Chill Session",
      color: colors.green,
      cover:
        "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
      artists: ["Kupla", "Blue Fox"],
    }
  ];

  test('renders SearchItemCard component with correct playlist information', () => {
    const { getByText, getByAltText } = render(
      <Router>
        <SearchItemCard playlist={playlists[0]} />
      </Router>
    );
    const playlist = playlists[0];
    expect(getByText(playlist.title)).toBeInTheDocument;
    expect(getByAltText(`Cover of ${playlist.title} by ${playlist.artists.join(', ')}`)).toBeInTheDocument;
  });

  test('renders SearchItemCard component with correct link', () => {
    render(
      <Router>
        <SearchItemCard playlist={playlists[1]} />
      </Router>
    );
    const a = screen.getByRole('img');
    expect(a.getAttribute('src')).toBe(playlists[1].cover);
    expect(a.getAttribute('class')).toBe('object-cover w-full h-full rounded-md');
  });
});
