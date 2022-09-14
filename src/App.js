import "./App.css";
import { TwitterTweetEmbed } from "react-twitter-embed";

import mergeImage from "./merge.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mergeImage} alt="merge" />
        <p class="text-9xl">No</p>
        <p class="text-2xl mb-24">(But it will be soon)</p>

        <p class="text-4xl mb-8">
          Check out any of the sources below for an updated timeline:
        </p>
        <ul>
          <li className="mb-2">
            <a href="https://ultrasound.money/">https://ultrasound.money</a>
          </li>
          <li className="mb-2">
            <a href="https://bordel.wtf/">https://bordel.wtf</a>
          </li>
          <li className="mb-2">
            <a href="https://797.io/themerge/">https://797.io/themerge</a>
          </li>
        </ul>

        <p></p>

        <p class="text-4xl mb-8">Watch the merge live</p>
        <a href="https://ethglobal.tv/the-merge">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Official Merge Watchparty
          </button>
        </a>

        <p class="text-4xl mb-8">Guide to lots of stuff happening 👇</p>
        <TwitterTweetEmbed tweetId={"1570127028887715840"} />
      </header>
    </div>
  );
}

export default App;
