import { render } from '@testing-library/react';
import MainSection from './MainSection';
import { MemoryRouter } from 'react-router-dom';

// Mock Greeting and PlayListItemCard components
jest.mock('../Greeting',()=> {
  return {
    default : jest.fn().mockReturnValue(
      <h1 className="text-4xl font-bold">Good Night</h1>
    )
  }
});
jest.doMock('../PlayListItemCard');

// Mock playlists data
jest.mock('../../lib/data', () => ({
   playlists : [
    {
      id: "1",
      albumId: 1,
      title: "Chill Lo-Fi Music",
      color: "#fff",
      cover:
        "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
      artists: ["NoSpirit", "Casiio"],
    },
    {
      id: "2",
      albumId: 2,
      title: "Lo-Fi Chill Session",
      color: "#fff",
      cover:
        "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
      artists: ["Kupla", "Blue Fox"],
    }
  ]
}));

describe('MainSection Component', () => {
  test('renders MainSection component with Greeting and PlayListItemCard', () => {
    const { getByText, getByAltText } = render(
    <MemoryRouter>
      <MainSection />
    </MemoryRouter>
    );

    // Ensure Greeting component is rendered
    const greetingElement = getByText('Good Night');
    expect(greetingElement).toBeInTheDocument;

    // Check if playlist items are rendered with correct titles and artists
    const playlistTitles = ['Chill Lo-Fi Music', 'Lo-Fi Chill Session'];
    const playlistArtists = ['NoSpirit, Casiio', 'Kupla, Blue Fox'];

    playlistTitles.forEach((title) => {
      const playlistTitleElement = getByText(title);
      expect(playlistTitleElement).toBeInTheDocument;
    });

    playlistArtists.forEach((artists) => {
      const playlistArtistElement = getByText(artists);
      expect(playlistArtistElement).toBeInTheDocument;
    });

    // Check if playlist item images are rendered with correct alt text
    const altTexts = [
      'Cover of Chill Lo-Fi Music by NoSpirit, Casiio',
      'Cover of Lo-Fi Chill Session by Kupla, Blue Fox',
    ];

    altTexts.forEach((alt) => {
      const imageElement = getByAltText(alt);
      expect(imageElement).toBeInTheDocument;
    });

  });
});
