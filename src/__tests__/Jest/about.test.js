//? TDD Method => Unit Testing
import { render, screen, waitFor } from "@testing-library/react";
import AboutPage from "@/app/about/page";
import userEvent from "@testing-library/user-event";


describe("About", () => {
  beforeEach(() => {
    render(<AboutPage />);
  });

  it("should have Welcome To text", () => {
    const myElem = screen.getByText("Welcome To");
    expect(myElem).toBeInTheDocument();
  });

  it("should show me my linkedin when i press the link Go to LinkedIn", async () => {
    const myLinks = screen.getAllByRole("link", { name: /Go to LinkedIn/i });
    const myLink = myLinks[0];
    userEvent.click(myLink);
    await screen.findByText("Roddy Rafael Tejeda Rosario");
    setTimeout(() => {
      expect(window.location.href).toBe(
        "https://www.linkedin.com/in/roddy-2125-rafael/"
      );
      done();
    }, 3000);
  });

  it("should start the video if i click on it", async () => {
    const iframeElement = screen.getByTestId('YouTube'); //? data-testid="YouTube"
    userEvent.click(iframeElement);
    //? userEvent.click(screen.getByRole('button', { name: /play/i }));
    await waitFor(() => {
      expect(iframeElement.paused).toBeFalsy();
    });
  })
});
