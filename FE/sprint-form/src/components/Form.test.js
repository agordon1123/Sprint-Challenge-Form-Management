import React from 'react';
import '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import { render } from '@testing-library/react';
import Form from './Form';

describe('<Form />', () => {
    it('renders without crashing', () => {
        render(<Form />)
    });
});
