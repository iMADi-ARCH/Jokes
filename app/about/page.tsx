import Link from "next/link";

export default function About() {
    return (
        <main>
            <h1>About</h1>
            <p>This is a simple project made with Next JS 13. <br /> It uses the <code>/app</code> directory and server side components to increase performance.</p>
            <p>It uses <a href="https://github.com/15Dkatz/official_joke_api">official joke api by 15Dkatz</a> to get the jokes. </p>
        </main>
    )
}