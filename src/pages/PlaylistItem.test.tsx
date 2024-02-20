import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PlaylistItem from "./PlaylistItem";

describe("Playlist Item Component", () => {
  test("renders Playlist Items", () => {
    render(
      <MemoryRouter>
        <PlaylistItem />
      </MemoryRouter>
    );
  });

  // Need more test : TODO 
});
