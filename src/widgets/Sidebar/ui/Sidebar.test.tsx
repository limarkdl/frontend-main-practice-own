import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Sidebar />
            </BrowserRouter>,
        );
    });

    test('renders correctly', () => {
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('starts in the collapsed state with ">" button text', () => {
        expect(screen.getByText('>')).toBeInTheDocument();
    });

    test('toggles to non-collapsed state and button text changes to "<"', () => {
        const button = screen.getByText('>');
        fireEvent.click(button);
        expect(screen.getByText('<')).toBeInTheDocument();
    });

    test('contains correct text in links', () => {
        expect(screen.getByText('MainLink')).toBeInTheDocument();
        expect(screen.getByText('AboutLink')).toBeInTheDocument();
    });

    test('contains ThemeSwitcher and LangSwitcher', () => {
        // Assuming you have test ids set on ThemeSwitcher and LangSwitcher
        expect(screen.getByTestId('theme-switcher')).toBeInTheDocument();
        expect(screen.getByTestId('lang-switcher')).toBeInTheDocument();
    });
});
