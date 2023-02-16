import { Inter } from '@next/font/google'
import Joke from '@/components/Joke'
import getRandomJoke from '@/libs/getRandomJoke';


const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const joke = await getRandomJoke();
  console.log(joke);
  return (
    <>
      <Joke category={joke.type} setup={joke.setup} punchline={joke.punchline} message={joke.message} />
    </>
  )
}
