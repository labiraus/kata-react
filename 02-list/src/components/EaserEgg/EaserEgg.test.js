import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EaserEgg from './EaserEgg';

describe('<EaserEgg />', () => {
  test('it should mount', () => {
    render(<EaserEgg />);
    
    const easerEgg = screen.getByTestId('EaserEgg');

    expect(easerEgg).toBeInTheDocument();
  });
});