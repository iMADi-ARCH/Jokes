"use client"

import styles from './joke.module.css';
import { useRouter } from 'next/navigation';
import { Suspense, useState, useTransition } from 'react';
import getRandomJoke from '@/libs/getRandomJoke';
import LoadingComp from '../LoadingComp';

type props = {
    setup?: string,
    category?: string
    punchline?: string,
    message?: string,
}

export default function Joke({ category, setup, punchline, message }: props) {
    let router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [isFetching, setIsFetching] = useState(false);

    // Create inline loading UI
    const isMutating = isFetching || isPending;

    async function handleChange() {
        setIsFetching(true);
        // Mutate external data source
        let joke = await getRandomJoke();
        category = joke.category;
        setup = joke.setup;
        punchline = joke.punchline;
        setIsFetching(false);

        startTransition(() => {
            // Refresh the current route and fetch new data from the server without
            // losing client-side browser or React state.
            router.refresh();
        });
    }

    if (category === "error") {
        setup = message;
    }

    return (
        isMutating ? <LoadingComp /> :
            <div className={styles.container}>
                <h2 className={styles.setup}>{setup}</h2>
                <h3 className={styles.punchline}>{punchline}</h3>
                <div className={styles.actions}>
                    <p className={styles.category}>{category}</p>
                    <button className={styles.resetbtn} onClick={handleChange}>&#10148;</button>
                </div>
            </div>
    )
}