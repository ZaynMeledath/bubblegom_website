import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { NotFoundPage } from "./NotFoundPage";
import { PrivacyPolicyPage } from "./PrivacyPolicyPage";
import { TermsOfServicePage } from "./TermsOfServicePage";

describe("Static Pages", () => {
  it("renders NotFoundPage with 404 message and home link", () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>,
    );

    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Page not found")).toBeInTheDocument();
    const link = screen.getByRole("link", { name: /go home/i });
    expect(link).toHaveAttribute("href", "/");
  });

  it("renders PrivacyPolicyPage with sections and back link", () => {
    render(
      <MemoryRouter>
        <PrivacyPolicyPage />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: "Privacy Policy", level: 1 }),
    ).toBeInTheDocument();
    expect(screen.getByText("1. Overview")).toBeInTheDocument();
    expect(screen.getByText("2. Information We Collect")).toBeInTheDocument();

    const backLink = screen.getByRole("link", { name: /back to bubblegom/i });
    expect(backLink).toHaveAttribute("href", "/");
  });

  it("renders TermsOfServicePage with sections and back link", () => {
    render(
      <MemoryRouter>
        <TermsOfServicePage />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: "Terms of Service", level: 1 }),
    ).toBeInTheDocument();
    expect(screen.getByText("1. Acceptance of Terms")).toBeInTheDocument();
    expect(screen.getByText("2. About Bubblegom")).toBeInTheDocument();

    const backLink = screen.getByRole("link", { name: /back to bubblegom/i });
    expect(backLink).toHaveAttribute("href", "/");
  });
});
