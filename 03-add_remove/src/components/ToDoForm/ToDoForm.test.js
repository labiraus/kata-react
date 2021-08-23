import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToDoForm from './ToDoForm';

describe('<ToDoForm />', () => {
  test('it should mount', () => {
    render(<ToDoForm />);
    
    const toDoForm = screen.getByTestId('ToDoForm');

    expect(toDoForm).toBeInTheDocument();
  });
});