import moment from "moment";

import mergeImage from "./merge.png";
import hudsonTweet from "./hudson-tweet.png";
import { useEffect, useRef, useState } from "react";

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};

const App = () => {
  const [isMerge, setIsMerge] = useState(false);
  const [mergeTime, setMergeTime] = useState("");
  const [timeLeft, setTimeLeft] = useState("");

  useInterval(() => {
    const checkIfMerge = async () => {
      const resp = await fetch(
        "https://ultrasound.money/api/v2/fees/merge-estimate"
      ).then((res) => res.json());
      if (resp?.blocksLeft <= 0) {
        setIsMerge(true);
        document.title = "YES IT IS!! 🎉";
      } else {
        setMergeTime(resp?.estimatedDateTime);
      }
    };

    checkIfMerge();
  }, 15000);

  useInterval(() => {
    if (isMerge || !mergeTime) return;

    const dur = moment.duration(moment(mergeTime).diff(moment()));
    setTimeLeft(
      `${String(dur.hours()).padStart(2, "0")}:${String(dur.minutes()).padStart(
        2,
        "0"
      )}:${String(dur.seconds()).padStart(2, "0")}`
    );
  }, 1000);

  return (
    <div>
      <header className="header">
        <div className="hero">
          <p
            class="font-black"
            style={{
              fontSize: "12rem",
              marginBottom: isMerge ? "0px" : "-50px",
            }}
          >
            {isMerge ? "Yes!! 🎉" : "No."}
          </p>
          <p class="text-xl mb-8 font-semibold">
            {isMerge
              ? "Welcome to the world, Ethereum PoS!"
              : "(But it will be soon)"}
          </p>
          {!isMerge && <p class="text-2xl mb-24 font-semibold">{timeLeft}</p>}
        </div>

        <p class="text-4xl mb-8">Why the merge matters 🌿</p>
        <ul class="mb-24">
          <li className="mb-2 text-xl underline">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://ethereum.org/en/upgrades/merge/"
            >
              Learn about the merge
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
        {!isMerge && (
          <div>
            <p class="text-4xl mb-8">
              Check out any of the sources below for an updated timeline:
            </p>
            <ul class="mb-12">
              <li className="mb-2 text-xl">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://ultrasound.money/"
                  class="underline"
                >
                  https://ultrasound.money
                </a>
              </li>
              <li className="mb-2 text-xl">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://bordel.wtf/"
                  class="underline"
                >
                  https://bordel.wtf
                </a>
              </li>
              <li className="mb-2 text-xl">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://797.io/themerge/"
                  class="underline"
                >
                  https://797.io/themerge
                </a>
              </li>
            </ul>
          </div>
        )}

        <p class="text-4xl mb-4">Guide to lots of stuff happening 👇</p>
        <a
          href="https://twitter.com/hudsonjameson/status/1570127028887715840?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1570127028887715840%7Ctwgr%5E54b7645c4e70b864a4be7005bb94af026ba8bc0b%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fpublish.twitter.com%2F"
          target="_blank"
          rel="noreferrer"
        >
          <img src={hudsonTweet} class="max-w-full m-8" alt="merge" />
        </a>

        <img src={mergeImage} class="max-w-screen m-8 mt-24" alt="merge" />
      </header>
    </div>
  );
};

export default App;
