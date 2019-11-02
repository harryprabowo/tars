import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap'


import './index.scss'

export default function Footer({ children }) {
    return (
        <div>
            <div className='phantom' />
            <div className='style'>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Button</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </div>
    )
}