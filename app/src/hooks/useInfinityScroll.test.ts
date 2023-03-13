import { documentHeight, scrollY } from "./useInfinityScroll";
// Mock the document object
const mockDocument = {
  body: {
    scrollHeight: 500,
    offsetHeight: 400,
  },
  documentElement: {
    clientHeight: 300,
    scrollHeight: 600,
    offsetHeight: 450,
    scrollTop: 100,
  },
};
const mockWindow: { pageYOffset: number | undefined } = {
  pageYOffset: 50,
};

// Set the document object to the mock object
Object.defineProperty(global, "document", {
  value: mockDocument,
});

Object.defineProperty(global, "window", {
  value: mockWindow,
});

describe("documentHeight", () => {
  it("returns the maximum height of the document", () => {
    // Call the function and expect the result to be the maximum height
    expect(documentHeight()).toBe(600);
  });
});

describe("scrollY", () => {
  it("should return the Y scroll position of the window", () => {
    // Call the function and expect the result to be the scroll position
    expect(scrollY()).toBe(50);

    // Set the pageYOffset too undefined to test the IE 'quirks' case
    mockWindow.pageYOffset = undefined;

    // Call the function again and expect the result to be the scrollTop
    expect(scrollY()).toBe(100);
  });
});
