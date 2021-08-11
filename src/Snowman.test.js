import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

it('does not allow players to keep guessing after the game is over', function() {
  const { container } = render(<Snowman />);
  // click on 7 buttons where letters are not in 'apple' so 7 wrong answers
  // fireEvent.click(container.querySelector('button[key="b"]'));
  // fireEvent.click(container.querySelector('button[key="c"]'));
  // fireEvent.click(container.querySelector('button[key="d"]'));
  // fireEvent.click(container.querySelector('button[key="f"]'));
  // fireEvent.click(container.querySelector('button[key="g"]'));
  // fireEvent.click(container.querySelector('button[key="h"]'));
  // fireEvent.click(container.querySelector('button[key="i"]'));
  
  fireEvent.click(container.querySelectorAll('button')[1]);
  fireEvent.click(container.querySelectorAll('button')[2]);
  fireEvent.click(container.querySelectorAll('button')[3]);
  fireEvent.click(container.querySelectorAll('button')[5]);
  fireEvent.click(container.querySelectorAll('button')[6]);
  fireEvent.click(container.querySelectorAll('button')[7]);
  // fireEvent.click(container.querySelectorAll('button')[8]);

  expect(container.querySelector('button')).toHaveClass("hidden");
  expect(container).toContainHTML("You lose");

 
})

it("matches snapshot", function() {
  const { container } = render(<Snowman />);
  const tooManyWrongGuesses = new Set();
  const alpha = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; tooManyWrongGuesses.size <= Snowman.defaultProps.maxWrong + 1; i++ ) {
    if (!"apple".includes(alpha[i])) {
      tooManyWrongGuesses.add(alpha[i]);
    }
  } 
  
  Snowman.setGuessedLetters(tooManyWrongGuesses);
  
  expect(container).toMatchSnapshot();
});