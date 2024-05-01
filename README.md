# Beginner workshop 3 day mini project inspired by Richard Gottleber's "JavaScript for Blockchain Developers" Master Class

https://cll-devrel.gitbook.io/javascript-for-blockchain-master-class/decentralized-news-service-contract

> If this looks too tricky for you, check out: https://docs.chain.link/quickstarts/deploy-your-first-contract

## Day 1: Build a simple decentralized news aggregator service

Following [Richard's tutorial](https://github.com/smartcontractkit/workshop-distributed-news), we create: 0x620ad97CD709fBD206E871927dF4Ae816786af37 

- contracts/functions.sol [verified and deployed on sepolia testnet](https://sepolia.etherscan.io/address/0x620ad97CD709fBD206E871927dF4Ae816786af37#code)

Use Chainlink functions to get the latest news from hackernews api, store the story on the blockchain, and display the stories on a webpage.

### Todo
- [x] Create a contract that uses Chainlink functions to get the latest news from hackernews api
- [ ] Store the story on the blockchain ?
- [ ] Display the stories on a webpage ?

### Steps to run the project:
The contract is good to go and hooked up to Chainlink Functions Subscriber.
To deploy and set up your Functions, you need to:
- Compile and deploy the contract on a testnet (this is on Sepolia)
- Create and fund a [Chainlink Functions Subscription](https://functions.chain.link/)
- Add your deployed contract address to your subscription as a "Consumer"
- Add your subscription ID to the contract
- Run the `sendRequest` function on the contract to get the latest news from Hackernews and save it to the blockchain
- Call ```function getAllArticles() public view returns (string[] memory) {
        string[] memory allArticles = new string[](articles.length);
        for (uint i = 0; i < articles.length; i++) {
            allArticles[i] = string(articles[i].url);
        }
        return allArticles;
    }``` to get the latest news' from the blockchain

## Day 2: evolve into Ceptor Club's World/Internet-Shaking Event Game Generator (WISE-GG)

Modify this simple pattern to do a second call, this time combining this and the RNG value between 0-10 to choose a prompt to give the OpenAI api.  This prompt gets us a unique, D&D 5e ready "World-shaking event" that we can use to inspire our next campaign. Or not. But if you do, there will be rewards (see Day 3).

## Day 3: Add a reward system to the WISE-GG

If the Magic Majority of your players correctly identify the type of event halfway through your game, everyone wins.

# hooty