import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import Title from ".";

describe("<Title />", () => {
  test("Incluye texto", () => {
    const wrapper = render(<Title />);
    expect(wrapper).toBeTruthy();

    // Get by h5
    const h5 = wrapper.container.querySelector("h5");
    expect(h5?.textContent).toBe("Tablero Kanban");
  });
});
