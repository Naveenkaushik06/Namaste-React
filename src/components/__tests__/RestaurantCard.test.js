import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../../components/mocks/resCardMock.json"
import { screen, render } from "@testing-library/react"
import "@testing-library/jest-dom"

it("Should render RestaurantCard component with props Data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />)
    const name = screen.getByText("Burger King");

    expect(name).toBeInTheDocument();
})

// HomeWork below => test HOC with withAggregateDiscount

// it("Should render RestaurantCard component with withAggregateDiscount", () => {
//     render(<RestaurantCard resData={MOCK_DATA} />)

//     const discount = screen.getByText("aggregatedDiscountInfoV3",{ header: "EVERY ITEM", subHeader: "@ ₹129"});
//     expect(discount).toBeInTheDocument();
// })
