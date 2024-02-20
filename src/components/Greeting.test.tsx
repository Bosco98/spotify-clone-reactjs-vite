import { render } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  let realDateNow: any;

  beforeEach(() => {
    realDateNow = Date.now.bind(global.Date);
  });

  afterEach(() => {
    global.Date.now = realDateNow;
  });

  const setMockDate = (mockDate: Date) => {
    jest.useFakeTimers().setSystemTime(mockDate);
  };

  it('renders "Good Afternoon" greeting in the afternoon', () => {
    setMockDate(new Date("2024-02-19T14:00:00"));
    const { getByText } = render(<Greeting />);
    expect(getByText("Good Afternoon")).toBeInTheDocument;
  });

  it('renders "Good Morning" greeting in the morning', () => {
    setMockDate(new Date("2024-02-19T08:00:00"));
    const { getByText } = render(<Greeting />);
    expect(getByText("Good Morning")).toBeInTheDocument;
  });

  it('renders "Good Night" greeting in the night', () => {
    setMockDate(new Date("2024-02-19T22:00:00"));
    const { getByText } = render(<Greeting />);
    expect(getByText("Good Night")).toBeInTheDocument;
  });
});
