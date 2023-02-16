export default async function getRandomJoke() {
    const data = await fetch("https://official-joke-api.appspot.com/random_joke", { cache: "no-store" });
    const joke = await data.json();
    return joke;
}