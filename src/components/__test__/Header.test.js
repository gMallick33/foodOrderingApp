import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import Header from "../Header"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore"

it("should render Header Component with a button", () => {
    render(
            <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
            </BrowserRouter>
    );

    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
})