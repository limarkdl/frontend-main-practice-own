import { render, screen } from '@testing-library/react';
import Modal from 'shared/ui/Modal/Modal';

describe('Modal', () => {
    test('should be true', () => {
        expect(true).toBe(true);
    });
    test('should be displayed', () => {
        render(<Modal isOpen />);
        expect(screen.getByTestId('modal')).toBeInTheDocument();
    });
});
