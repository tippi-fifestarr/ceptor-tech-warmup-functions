# Challenge: Beginner Tech workshop, a 3 day mini project inspired by Richard Gottleber's ["JavaScript for Blockchain Developers" Master Class](https://www.youtube.com/watch?v=8iLuNx9jYSo).

https://cll-devrel.gitbook.io/javascript-for-blockchain-master-class/decentralized-news-service-contract

> If this looks too tricky for you, check out: https://docs.chain.link/quickstarts/deploy-your-first-contract

## Day 1: Build a simple decentralized news aggregator service

Following [Richard's tutorial](https://github.com/smartcontractkit/workshop-distributed-news), we create: 0x620ad97CD709fBD206E871927dF4Ae816786af37 

- contracts/functions.sol [verified and deployed on sepolia testnet](https://sepolia.etherscan.io/address/0x620ad97CD709fBD206E871927dF4Ae816786af37#code)

Use Chainlink functions to get the latest news from hackernews api, store the story on the blockchain, and display the stories on a webpage.

### Todo
- [x] Create a contract that uses Chainlink functions to get the latest news from hackernews api
- [x] Store the story on the blockchain
- [x] Display the stories on a webpage

### Steps to run the project:
The contract is good to go and hooked up to Chainlink Functions Subscriber.
To deploy and set up your Functions, you need to:
- Compile and deploy the contract on a testnet (this is on Sepolia)
- Create and fund a [Chainlink Functions Subscription](https://functions.chain.link/)
- Add your deployed contract address to your subscription as a "Consumer"
- Add your subscription ID to the contract
- Run the `sendRequest` function on the contract to get the latest news from Hackernews and save it to the blockchain
- Call the `getAllArticles` function to get the latest news from the blockchain
    ```solidity
    function getAllArticles() public view returns (string[] memory) {
            string[] memory allArticles = new string[](articles.length);
            for (uint i = 0; i < articles.length; i++) {
                allArticles[i] = string(articles[i].url);
            }
            return allArticles;
        }
    ```
- in `frontend/src/pages/index.astro` you can display the stories on a webpage
  ```astro
  async function fetchOGData(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const dom = new JSDOM(html);
    const doc = dom.window.document;
    let ogTitle =
      doc.querySelector('meta[property="og:title"]')?.content || url;
    const ogImage = doc.querySelector('meta[property="og:image"]')?.content;
    return { ogTitle, ogImage, url };
  } catch (error) {
    console.error("Error fetching OG data:", error);
    return { ogTitle: "No title", ogImage: "No image", url };
  }
}
```

## Day 2: RNG => evolve into something "Ceptory". 

- What if could add randomness to the predictable news aggregator service?
- Could we make TTRPGs easier, faster, more fun, or more transparent? 
- Enter Tippi Fifestarr
  
### WISE-GG? Real world news & star wars hero inspired local culture!
> Ceptor Club's World/Internet-Shaking Event 💯 Game Generator (WISE-GG)

Modify this simple pattern to do a second call, this time combining this and the RNG value between 0-10 to choose a prompt to give the OpenAI api.  This prompt gets us a unique, D&D 5e ready "World-shaking event" that we can use to inspire our next campaign. Or not. But if you do, there will be rewards (see Day 3).

1. Gamemaster inputs preferences, such as ["High Fantasy, very low-tech, noir, with a touch of steampunk"].
2. Random number gets us a random star wars hero, "Boba Fett".  
3. Send this to GPT-3.5 with Ceptor Sauce to get "Fomo Bet, Technological-Trappist and Famed Bounty Hunter. In D&D 5e, he is a level 20 rogue with a heart of gold and a penchant for the dramatic. He is known for his ability to track down and capture the most elusive of targets, and his reputation precedes him wherever he goes. He is a master of stealth, tech and subterfuge, and his skills are unmatched by any other in the galaxy. He is a force to be reckoned with, and those who cross him do so at their own peril."
4. News aggregator service gets us the latest news from hackernews api.
5. Send this to GPT-3.5 with Ceptor Sauce, "Fomo Bet..." + the random number to get a world-shaking event that kicks off a campaign. "Fomo Bet, appears before you stepping out of the shadow. You recognize this famed bounty hunter and technological-trappist from the leaderboards. He hands you a block, puts in a scrolls, and you watch magical vision emerge. A world shaking event unfolds, a great discovery, in the Far Eastern realms with red roofs, green oceans, and massive cities wrapping the foothills. Up, higher now, in a mountain monastery past monks practicing their martial artistry, a new type of energy source. One of the natural elements, the dominant one for that realm, floats in the air wrapped in ropes and vines. Orbiting the huge crystal, is a smaller gem, a different and contrasting color from the main one.  What are the colors of the gems, and what do you do?"

## Day 3: Add a reward system to the WISE-GG

If the Magic Majority of your players correctly identify the type of event halfway through your game, everyone wins.

# Description for github repo:

This is a 3-day mini project inspired by Richard Gottleber's "JavaScript for Blockchain Developers" Master Class. The project begins as a decentralized news aggregator service that uses Chainlink functions to get the latest news from hackernews api, store the story on the blockchain, and display the stories on a webpage.