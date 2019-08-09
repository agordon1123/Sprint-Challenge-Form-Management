import React from 'react';
import '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import { render } from '@testing-library/react';
import UserCard from './UserCard';

describe('<UserCard />', () => {
    it('renders without crashing', () => {
        render(<UserCard />)
    })

    // it('renders "name, course, technique, ingredients" on DOM', () => {
    //     const { getByText } = render(<UserCard />)
    //     getByText(/name/i)
    //     getByText(/course/i)
    //     getByText(/technique/i)
    //     getByText(/ingredients/i)
    // })
});
