import { render } from "@testing-library/react";
import Search from "./Search";

// Mock the playlists data
jest.mock("../lib/data", () => ({
  playlists: [
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
    },
  ],
}));

jest.mock("../components/Search/SearchItemCard", () => {
  return {
    default: jest.fn().mockReturnValue(<div data-testid='test'>default search item</div>),
  };
});

describe("Search Component", () => {
  test("renders without crashing", () => {
    render(<Search />);
  });

  test('renders search input field', () => {
    const { getByPlaceholderText } = render(<Search />);
    const searchInput = getByPlaceholderText('Search');
    expect(searchInput).toBeInTheDocument;
  });

  test('renders correct number of search item cards', () => {
    const { getAllByTestId } = render(<Search />);
    const searchItemCards = getAllByTestId('test');
    expect(searchItemCards.length).toBe(2);
  });

  // You can add more tests as needed for user interactions and other functionalities
});
