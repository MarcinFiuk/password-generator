import { render, screen } from '@testing-library/react';
import StrengthBar from './StrengthBar';

describe('Strength Bar', () => {
    test('heading renders correctly', () => {
        render(<StrengthBar strength={1} />);
        const headingElement = screen.getByRole('heading', {
            name: 'STRENGTH',
        });
        expect(headingElement).toBeInTheDocument();
    });

    test('renders strength description correctly with strength level 1', () => {
        render(<StrengthBar strength={1} />);
        const strengthDescription = screen.getByText(/TOO WEAK!/i);
        expect(strengthDescription).toHaveTextContent('TOO WEAK!');
    });
    test('renders strength description correctly with strength level 2', () => {
        render(<StrengthBar strength={2} />);
        const strengthDescription = screen.getByText(/WEAK/i);
        expect(strengthDescription).toHaveTextContent('WEAK');
    });
    test('renders strength description correctly with strength level 3', () => {
        render(<StrengthBar strength={3} />);
        const strengthDescription = screen.getByText(/MEDIUM/i);
        expect(strengthDescription).toHaveTextContent('MEDIUM');
    });
    test('renders strength description correctly with strength level 4', () => {
        render(<StrengthBar strength={4} />);
        const strengthDescription = screen.getByText(/STRONG/i);
        expect(strengthDescription).toHaveTextContent('STRONG');
    });
    test('renders styles correctly base on strength level (0)', () => {
        render(<StrengthBar strength={0} />);
        const strengthBar = screen.getByTestId('first');
        expect(strengthBar).toHaveClass(
            'w-[10px] h-7 border-2 border-clrNeutral100 border-solid'
        );
    });
    test('renders styles correctly base on strength level (1)', () => {
        render(<StrengthBar strength={1} />);
        const strengthBar = screen.getByTestId('first');
        expect(strengthBar).toHaveClass(
            'w-[10px] h-7 border-2 border-clrNeutral100 border-solid bg-clrAccent600 border-clrAccent600'
        );
    });
    test('renders styles correctly base on strength level (2)', () => {
        render(<StrengthBar strength={2} />);
        const strengthBar = screen.getByTestId('first');
        expect(strengthBar).toHaveClass(
            'w-[10px] h-7 border-2 border-clrNeutral100 border-solid bg-clrAccent500 border-clrAccent500'
        );
    });
    test('renders styles correctly base on strength level (3)', () => {
        render(<StrengthBar strength={3} />);
        const strengthBar = screen.getByTestId('first');
        expect(strengthBar).toHaveClass(
            'w-[10px] h-7 border-2 border-clrNeutral100 border-solid bg-clrAccent400 border-clrAccent400'
        );
    });
    test('renders styles correctly base on strength level (4)', () => {
        render(<StrengthBar strength={4} />);
        const strengthBar = screen.getByTestId('first');
        expect(strengthBar).toHaveClass(
            'w-[10px] h-7 border-2 border-clrNeutral100 border-solid bg-clrPrimary400 border-clrPrimary400'
        );
    });
});
