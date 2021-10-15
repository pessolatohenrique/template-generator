import { render, screen } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import ViewListToggle from "./ViewListToggle";
import useView from "../hooks/useView";

describe("ViewListToggle", () => {
  it("should generate snapshot", () => {
    const { result } = renderHook(() => useView());
    const [isTable, isList, switchFormat] = result.current;

    const { container } = render(
      <ViewListToggle
        isTable={isTable}
        isList={isList}
        switchFormat={switchFormat}
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
