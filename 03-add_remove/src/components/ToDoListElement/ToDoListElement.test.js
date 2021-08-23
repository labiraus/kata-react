import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToDoListElement from './ToDoListElement';

describe('<ToDoListElement />', () => {
  test('it should mount', () => {
    render(<ToDoListElement />);
    
    const toDoListElement = screen.getByTestId('ToDoListElement');

    expect(toDoListElement).toBeInTheDocument();
  });
});