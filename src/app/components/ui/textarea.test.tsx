import { render, screen, fireEvent } from '@testing-library/react';
import Textarea from './textarea';

test('renders Textarea component', () => {
    render(<Textarea />);
    const textareaElement = screen.getByRole('textbox');
    expect(textareaElement).toBeInTheDocument();
});

test('allows user to type in Textarea', () => {
    render(<Textarea />);
    const textareaElement = screen.getByRole('textbox');
    fireEvent.change(textareaElement, { target: { value: 'Hello World' } });
    expect(textareaElement.value).toBe('Hello World');
});

test('validates Textarea input', () => {
    render(<Textarea required />);
    const textareaElement = screen.getByRole('textbox');
    fireEvent.blur(textareaElement);
    expect(textareaElement).toHaveAttribute('required');
});