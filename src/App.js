import { TwitterTweetEmbed } from "react-twitter-embed";

import { Timeline, Tweet } from "react-twitter-widgets";

// Tweet (without options)

import mergeImage from "./merge.png";

function App() {
  return (
    <div>
      <header className="header">
        <div className="hero">
          <p
            class="font-black"
            style={{ fontSize: "12rem", marginBottom: "-50px" }}
          >
            No.
          </p>
          <p class="text-xl mb-24 font-semibold">(But it will be soon)</p>
        </div>

        <p class="text-4xl mb-8">
          Check out any of the sources below for an updated timeline:
        </p>
        <ul class="mb-12">
          <li className="mb-2 text-xl">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://ultrasound.money/"
            >
              https://ultrasound.money
            </a>
          </li>
          <li className="mb-2 text-xl">
            <a target="_blank" rel="noreferrer" href="https://bordel.wtf/">
              https://bordel.wtf
            </a>
          </li>
          <li className="mb-2 text-xl">
            <a target="_blank" rel="noreferrer" href="https://797.io/themerge/">
              https://797.io/themerge
            </a>
          </li>
        </ul>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://ethglobal.tv/the-merge"
        >
          <button class="bg-blue-500 hover:bg-blue-700 text-white text-4xl font-bold py-6 px-12 border border-blue-700 rounded-lg mb-24">
            Merge Watchparty
          </button>
        </a>

        <p class="text-4xl mb-4">Guide to lots of stuff happening 👇</p>
        <Tweet tweetId="1570127028887715840" />

        <img src={mergeImage} class="max-w-screen m-8 mt-24" alt="merge" />
      </header>
    </div>
  );
}

export default App;
