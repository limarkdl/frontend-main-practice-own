import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
    beforeEach(() => {
        render(<Navbar />);
    });

    test('renders correctly', () => {
        expect(screen.getByText('🚧🦆🚧')).toBeInTheDocument();
    });

    test('button starts with "Log in" text', () => {
        expect(screen.getByText('Log in')).toBeInTheDocument();
    });

    test('clicking the button toggles the modal', () => {
        const button = screen.getByText('Log in');
        expect(screen.queryByTestId('modal')).not.toHaveClass('opened');

        fireEvent.click(button);
        expect(screen.getByTestId('modal')).toHaveClass('opened');

        fireEvent.click(button);
        expect(screen.queryByTestId('modal')).not.toHaveClass('opened');
    });
});
