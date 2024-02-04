import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import { Header } from '../../../src/components/Header/Header';

describe('Tests in <Header/>', () => { 

  const mockMatchMedia = (prefersColorScheme:string) => {
    Object.defineProperty(window, 'matchMedia',{
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: query.includes(prefersColorScheme),
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    });
  }

  test('should show the initial state with light theme', () => {
    mockMatchMedia('(prefers-color-scheme: light)');

    render(<Header/>);

    expect(screen.getByText('Where in the world?')).toBeTruthy();
    expect(screen.getByText('Dark Mode')).toBeTruthy();
  });

  test('should change to theme dark color automatically', () => {
    mockMatchMedia('(prefers-color-scheme: light)');

    render(<Header/>);
    
    mockMatchMedia('(prefers-color-scheme: dark)');

    expect(screen.getByText('Where in the world?')).toBeTruthy();
    expect(screen.getByText('Dark Mode')).toBeTruthy();
  });

  test('should change to theme dark color when clicking button', async () => {
    mockMatchMedia('(prefers-color-scheme: light)');

    const user = userEvent.setup();
    render(<Header/>);   
    const themeBtn = screen.getByRole('button') as HTMLButtonElement;
    await user.click(themeBtn);
    
    expect(screen.getByText('Light Mode')).toBeTruthy();
  });

});