import { render, screen } from '@testing-library/react';
import PasswordOutput from './PasswordOutput';

describe('password output', () => {
    test('paragraph renders correctly', () => {
        render(<PasswordOutput password={'1234567890'} />);
        const paragraphElement = screen.getByText('1234567890');
        expect(paragraphElement).toBeInTheDocument();
    });

    test('button renders correctly', () => {
        render(<PasswordOutput password={'1234567890'} />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });
});
