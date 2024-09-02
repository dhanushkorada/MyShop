import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders home page", () => {
	render(<App />);
	const linkElement = screen.getByText(/Welcome to My Shop/i);
	expect(linkElement).toBeInTheDocument();
});
