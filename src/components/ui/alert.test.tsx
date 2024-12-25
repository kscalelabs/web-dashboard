import * as React from 'react';
import { render, screen } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import { Alert, AlertTitle, AlertDescription } from './alert';

describe('Alert Component', () => {
  it('renders alert with default variant', () => {
    render(<Alert>Test Alert</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass('bg-background');
  });

  it('renders alert with destructive variant', () => {
    render(<Alert variant="destructive">Destructive Alert</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass('border-destructive/50');
  });

  it('renders alert with custom className', () => {
    const customClass = 'custom-test-class';
    render(<Alert className={customClass}>Custom Alert</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass(customClass);
  });

  it('renders alert with title and description', () => {
    render(
      <Alert>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>Alert Description</AlertDescription>
      </Alert>
    );
    
    expect(screen.getByText('Alert Title')).toBeInTheDocument();
    expect(screen.getByText('Alert Description')).toBeInTheDocument();
  });

  it('renders AlertTitle with custom className', () => {
    const customClass = 'custom-title-class';
    render(<AlertTitle className={customClass}>Custom Title</AlertTitle>);
    const title = screen.getByText('Custom Title');
    expect(title).toHaveClass(customClass);
    expect(title).toHaveClass('font-medium');
  });

  it('renders AlertDescription with custom className', () => {
    const customClass = 'custom-desc-class';
    render(<AlertDescription className={customClass}>Custom Description</AlertDescription>);
    const description = screen.getByText('Custom Description');
    expect(description).toHaveClass(customClass);
    expect(description).toHaveClass('text-sm');
  });
});
