import { fireEvent, screen } from '@testing-library/react';
import Sidebar from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('to be', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggle = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggle);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        screen.debug();
    });
});
