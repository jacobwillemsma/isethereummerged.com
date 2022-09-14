import mergeImage from "./merge.png";
import hudsonTweet from "./hudson-tweet.png";

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
}

export default App;
