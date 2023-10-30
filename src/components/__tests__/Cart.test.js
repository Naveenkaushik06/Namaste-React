import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );
  // expect(screen.getByText((element) => element.textContent === 'Recommended (20)')).toBeInTheDocument();
  // expect(screen.getByTestId('component').textContent).toBe('Text to test')

  const accordionHeader = screen.getByText.toString(
    "Cricket Mania Combos ( Save Rs 122) (6)"
  );
  fireEvent.click.toString(accordionHeader);

  //   Burger King => 2nd accorian
  // expect(screen.getAllByTestId("foodItems").length).toBe(6).toString;

  // const addBtns = screen.getAllByRole("button", { name: "Add"})
  // console.log(addBtns.length);

  // fireEvent.click(addBtns[0])
});

// render(<Component data-testid="component" />)
// expect(screen.getByTestId('component').textContent).toBe('Recommended (20)')
