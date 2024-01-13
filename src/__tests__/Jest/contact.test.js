//? TDD Method => Unit Testing
import { render, screen, fireEvent, userEvent } from "@testing-library/react";
import Form from "@/components/Contact/Form";
describe("Form Component From Contact Page", () => {
  beforeEach(() => {
    render(<Form />);
  });

  it("should sent an alert when you press the button Send Message", () => {
    const spy = jest.spyOn(window, "alert").mockImplementation(() => {});

    const email = screen.getByLabelText("Your email");
    fireEvent.change(email, { target: { value: "Roddy3889@gmail.com" } });

    const title = screen.getByLabelText("Title");
    fireEvent.change(title, { target: { value: "test" } });

    const textarea = screen.getByLabelText("Talk with us");
    fireEvent.change(textarea, { target: { value: "test de textarea" } });

    const button = screen.getByText("Send Message");
    fireEvent.click(button);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  test("shouldn't show alert when i let one input empty", () => {
    const spy = jest.spyOn(window, "alert").mockImplementation(() => {});
    const emailInput = screen.getByLabelText("Your email");
    fireEvent.input(emailInput, { target: { value: "" } });
    fireEvent.click(screen.getByText("Send Message"));
    expect(spy).not.toHaveBeenCalled();
  });
});
