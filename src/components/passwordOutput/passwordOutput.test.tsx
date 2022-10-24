import { render, screen, act } from '@testing-library/react';
import event from '@testing-library/user-event';
import PasswordOutput from './PasswordOutput';

describe('password output', () => {
    test('paragraph renders correctly', () => {
        render(<PasswordOutput password={'1234567890'} />);
        const paragraphElement = screen.getByText('1234567890');
        expect(paragraphElement).toBeInTheDocument();
    });
    test("paragraph doesn't render when there in no props", () => {
        render(<PasswordOutput password={''} />);
        const paragraphElement = screen.queryByText('password');
        expect(paragraphElement).not.toBeInTheDocument();
    });

    test("replace text dosn't render when there is some props", () => {
        render(<PasswordOutput password={'1234567890'} />);
        const paragraphElement = screen.queryByText('P4$5W0rD!');
        expect(paragraphElement).not.toBeInTheDocument();
    });

    test('replace text (there is no props) renders correctly', () => {
        render(<PasswordOutput password={''} />);
        const paragraphElement = screen.getByText('P4$5W0rD!');
        expect(paragraphElement).toBeInTheDocument();
    });

    test('button renders correctly', () => {
        render(<PasswordOutput password={'1234567890'} />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });

    test('button to be disabled', () => {
        render(<PasswordOutput password={''} />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeDisabled();
    });

    test('button to be enabled', () => {
        render(<PasswordOutput password={'1234567890'} />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeEnabled();
    });

    test('text informing about copy appear on the screen', async () => {
        event.setup();
        render(<PasswordOutput password={'1234567890'} />);
        const copyButton = screen.getByRole('button');
        await event.click(copyButton);
        const copyConfirmation = screen.getByText(/copied/i);
        expect(copyConfirmation).toBeInTheDocument();
    });
});
