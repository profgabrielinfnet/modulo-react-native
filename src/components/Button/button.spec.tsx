import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import Button from "./index";
import { NativeBaseProvider } from "native-base";
import THEME from "../../theme";
test("should render the content correctly", () => {
  const mockedContent = 'botao';
  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };
  render(
    <NativeBaseProvider theme={THEME} initialWindowMetrics={inset}>
      <Button content={mockedContent} handleClick={() => {}} />
    </NativeBaseProvider>
  );
  const text = screen.getByText(mockedContent);
  expect(text).toBeTruthy();
});


test("should call handleFunction correctly", () => {
  const mockedContent = 'botao';
  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };
  const mockedFunction = jest.fn();
  render(
      <NativeBaseProvider theme={THEME} initialWindowMetrics={inset}>
        <Button content={mockedContent} handleClick={mockedFunction} />
      </NativeBaseProvider>
    );
  
  fireEvent.press(screen.getByText(mockedContent));
  expect(mockedFunction).toHaveBeenCalled();
});
