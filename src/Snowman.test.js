import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

it('does not allow players to keep guessing after the game is over', function() {
  const { container } = render(<Snowman />);
  // click on 8 buttons where letters are not in 'apple' so 8 wrong answers
  fireEvent.click(container.querySelector('button[key="b"]'));
  fireEvent.click(container.querySelector('button[key="c"]'));
  fireEvent.click(container.querySelector('button[key="d"]'));
  fireEvent.click(container.querySelector('button[key="f"]'));
  fireEvent.click(container.querySelector('button[key="g"]'));
  fireEvent.click(container.querySelector('button[key="h"]'));
  fireEvent.click(container.querySelector('button[key="i"]'));
  fireEvent.click(container.querySelector('button[key="j"]'));

  expect(container.querySelector('button')).not.toBeInTheDocument();
  expect(container).toContainHTML("You lose");
  expect(container)
})