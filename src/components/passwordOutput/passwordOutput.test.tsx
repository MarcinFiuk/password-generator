import { render, screen } from '@testing-library/react';
import PasswordOutput from './PasswordOutput';

describe('password output', () => {
    test('paragraph renders correctly', () => {
        render(<PasswordOutput password={'1234567890'} />);
        const paragraphElement = screen.getByRole('paragraph');
        expect(paragraphElement).toBeInTheDocument();
    });
});
