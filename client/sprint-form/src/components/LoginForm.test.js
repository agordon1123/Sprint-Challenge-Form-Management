import React from 'react';
import '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('<LoginForm />', () => {
    it('renders without crashing', () => {
        render(<LoginForm />)
    })

    it('renders a "submit" button', () => {
        const { getByText } = render(<LoginForm />)
        const submit = getByText(/submit/i)
        fireEvent.click(submit)
        expect(submit)
    })
});
