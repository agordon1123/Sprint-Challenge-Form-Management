import React from 'react';
import '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import { render } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('<LoginForm />', () => {
    it('renders without crashing', () => {
        render(<LoginForm />)
    });
});
