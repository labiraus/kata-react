import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToDoModal from './ToDoModal';

describe('<ToDoModal />', () => {
  test('it should mount', () => {
    render(<ToDoModal />);
    
    const toDoModal = screen.getByTestId('ToDoModal');

    expect(toDoModal).toBeInTheDocument();
  });
});