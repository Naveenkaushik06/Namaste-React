import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Res List for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardBeforeSearch = screen.getAllByTestId("resCard")
  expect(cardBeforeSearch.length).toBe(20)

  const searchBtn = screen.getByRole("button", { name: "Search"})

  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "burger" }});
  fireEvent.click(searchBtn);

//   screen should load 1 card

  const cardAfterSearch = screen.getAllByTestId("resCard");
  expect(cardAfterSearch.length).toBe(1)

});

it("Should Filter Top Rated Restaurant", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const cardBeforeFilter = screen.getAllByTestId("resCard")
    expect(cardBeforeFilter.length).toBe(20)

    const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants"})
    fireEvent.click(topRatedBtn);

    // screen should load 11 cards
    const cardAfterFilter = screen.getAllByTestId("resCard")
    // console.log(cardAfterFilter.length);
    expect(cardAfterFilter.length).toBe(15)
    
});