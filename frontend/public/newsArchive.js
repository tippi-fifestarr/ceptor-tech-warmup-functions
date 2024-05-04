// Combined newsArchive.js
import { ethers, JsonRpcProvider } from "ethers";
import { config } from "dotenv";
import NewsArchiveABI from "./newsArchiveABI.json";

config();
console.log("Provider URL:", process.env.PROVIDER_URL);
console.log("Contract Address:", process.env.CONTRACT_ADDRESS);

const providerUrl = process.env.PROVIDER_URL;
const contractAddress = process.env.CONTRACT_ADDRESS;
const provider = new JsonRpcProvider(providerUrl);
const newsArchiveContract = new ethers.Contract(contractAddress, NewsArchiveABI, provider);

async function getAllArticles() {
  try {
    const articles = await newsArchiveContract.getAllArticles();
    return articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

async function sendRequest() {
  try {
    console.log("Sending request to contract...");
    await window.ethereum.enable();
    const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = web3Provider.getSigner();
    console.log("Signer address:", await signer.getAddress());
    const signedContract = new ethers.Contract(contractAddress, NewsArchiveABI, signer);
    console.log("Contract address:", signedContract.address);
    const transaction = await signedContract.sendRequest();
    await transaction.wait();
    return transaction.hash;
  } catch (error) {
    console.error("Error sending request:", error);
    return null;
  }
}

export { getAllArticles, sendRequest };
