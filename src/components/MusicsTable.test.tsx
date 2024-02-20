import { render } from '@testing-library/react';
import MusicsTable from './MusicsTable';

describe('MusicsTable Component', () => {
  const songs = [
    {
      id: 3,
      albumId: 1,
      title: "Skyline Serenade",
      image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
      artists: ["LoFi Dreamer"],
      album: "Chill Lo-Fi Music",
      duration: "3:50",
    },
    {
      id: 2,
      albumId: 1,
      title: "Coffee Daze",
      image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
      artists: ["LoFi Dreamer"],
      album: "Chill Lo-Fi Music",
      duration: "4:07",
    }
  ];

  test('renders MusicsTable component with correct song information', () => {
    const { getAllByText,getByText, getByAltText } = render(<MusicsTable songs={songs} />);
    songs.forEach(song => {
      expect(getByText(song.title)).toBeInTheDocument;
      expect(getAllByText(song.artists[0])).toBeInTheDocument;
      expect(getAllByText(song.album)).toBeInTheDocument;
      expect(getByText(song.duration)).toBeInTheDocument;
      expect(getByAltText(song.title)).toBeInTheDocument;
    });
  });
});
