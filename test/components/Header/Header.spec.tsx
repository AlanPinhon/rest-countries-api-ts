import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Header } from '../../../src/components/Header/Header';

describe('Tests in <Header/>', () => { 

  test('should show the initial state', () => {
    render(<Header/>);
    
    expect(screen.getByText('Where in the world?')).toBeTruthy();
    expect(screen.getByText('Dark Mode')).toBeTruthy();
  });

  test('should change theme color when clicking button', async () => {
    const user = userEvent.setup();
    render(<Header/>);
    
    const themeBtn = screen.getByRole('button') as HTMLButtonElement;
    await user.click(themeBtn);
    
    expect(screen.getByText('Light Mode')).toBeTruthy();
  });

});