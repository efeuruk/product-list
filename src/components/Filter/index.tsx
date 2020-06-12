import React, { useState, useRef } from 'react'

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    // optional
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => string;
    person: Person;
}

export const Filters: React.FC<Props> = () => {
    // Hooks
    const [count, setCount] = useState<number | null>(5);
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={divRef}>
            <input ref={inputRef} />
        </div>
    )
}