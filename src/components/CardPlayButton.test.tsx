import { render, screen } from "@testing-library/react";
import CardPlayButton from "./CardPlayButton";
// import { usePlayerStore } from "../store/playerStore";

jest.mock("../store/playerStore", () => ({
  usePlayerStore: jest.fn().mockResolvedValue({
    currentMusic: 1,
    isPlaying: false,
    setIsPlaying: false,
    setCurrentMusic: 1,
  }),
}));

describe("CardPlayButton Component", () => {
  beforeEach(() => {
    jest.fn().mockReset();
  });

  test("renders play button by default", () => {
    const { container } = render(<CardPlayButton id="1" />);
    const svg = container.querySelector(
      // '[d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"]'
      '[role="img"]'
    ) as HTMLImageElement;
    expect(svg.innerHTML.toString()).toBe('<path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>');
    expect(screen.getAllByRole("button")).toBeInTheDocument;
  });

  // should be a test where you fire an event couldn't figure how to manage create<UsePlayerStoreState>()
 
});
