import { render, screen } from '@testing-library/react';
import { updateGradient } from './rangeHelpers';

describe('range gradient', () => {
    test('returns number', () => {
        const result = updateGradient('1', '11', 11);
        expect(result).toBe(100);
    });
});
