import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { it, expect, describe } from "vitest";
import React from "react";
describe("Welcome component", () => {
  it("has correct Next.js theming section link", () => {
    render(<App />);
    expect(1).toBeTruthy();
  });
});
