import mergeImage from "./merge.png";
import hudsonTweet from "./hudson-tweet.png";

const App = () => {
  return (
    <div>
      <header className="header">
        <div className="hero">
          <p class="font-black" style={{ fontSize: "12rem" }}>
            Yes!! 🎉
          </p>
          <p class="text-xl mb-24 font-semibold">
            Welcome to the world Ethereum PoS!
          </p>
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

        <p class="text-4xl mb-4">Guide to everything that happened 👇</p>
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
