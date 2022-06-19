Introduction:
‘Sneakerhead’ is a culture of collecting rare luxurious sneakers[1]. These rare sneakers are often sold in a limited quantity and have a popular resale market that drives the prices of these sneakers to thousands of dollars based on their popularity. As these rare sneakers are tough to acquire due to supply and demand, some factories create knock-offs to supply the enormous demand of people who wish to own the shoes. In the market, some knock-offs use the same materials and manufacturing methods to replicate the look of authentic sneakers at a fraction of the cost. Some dishonest people would buy these high-quality knock-offs and sell them to other sneaker enthusiasts as authentic sneakers at a high price.

Motivation:
As mentioned in the introduction, our group is concerned about the rise in scams and counterfeit items in the market. The group desires to counter this issue, especially with the age of digital scams on the rise. The team is also aware of other similar solutions on the market and took inspiration from past works and improved upon them. The team would want to make use of and incorporate modern technologies like NFT to make it more secure and stand out from the current solutions. Therefore, the aim and motivation for the group are to find a way to make use of these technologies to solve the rising problems of digital scams.

Problem:
To fight the illegitimacy of these rare sneakers, online marketplaces such as StockX and GOAT offer paid services to sellers and buyers to verify the sneakers’ authenticity. In recent years, these platforms have been criticized for their unreliability in authenticating sneakers. One of the examples would be Nike suing StockX in February, quoting one of the reasons they are suing the platform because StockX was selling counterfeit sneakers despite its guarantee of authenticity[2]. The lawsuit caused a stir among sneaker enthusiasts who were shocked at this revelation.

Proposed Solution

Physical NFTs:

To improve the reliability and eliminate the hassle of verifying the authenticity of sneakers, the group came up with an idea using Blockchain and non-fungible tokens (NFT) to overcome the problem. The proposed idea is to incorporate the shoe with a unique ID of the sneaker’s NFT art. The user will need to have both the physical shoe and the NFT as proof of purchase. This solution covers the weakness of both Blockchain and physical copy. For Blockchain, we can show the ownership online, but we do not have the physical object to back it up. For physical items, there are high-quality replicas, which are the main reason for scams in modern times. 

Therefore, if the user were to sell their current pair of sneakers, they would need both the shoe and the NFT. In the case of the user giving a fake shoe or a different NFT that comes with the particular sneaker, they cannot resell the sneaker and own NFT anymore. The user will also be prohibited and banned from using the platform if they are found to be reselling fake shoes. 

Proposed blockchain architecture
A popular method of creating a blockchain network for NFT distribution and management would be the usage of the Ethereum blockchain.

Reasons as to why Ethereum makes it possible for NFTs to work so well is because Ethereum
products share the same "backend". This means that all Ethereum products are portable across products which would be good for NFT distribution. This means that a buyer can buy an NFT on one product and sell it on another easily. Moreover, Ethereum has proven to be quite reliable, meaning that the tokens will always be available to sell.

We can also make use of Docker to containerize and distribute the system image of an Ethereum node across several machines in order to reduce the setup time required on each node.

Challenges
Sellers could conceivably make a counterfeit and sell that along with the NFT and then sell the original without the NFT to go along with it. However, the idea is that buyers would not trust that the original was the original unless the NFT accompanied it. Therefore, the counterfeiters would not benefit from selling the authentic sneakers as the original(accompanied by the NFT) and the copy as a copy. Selling the original as if it were a copy (without the accompanying NFT) and a copy as if it were the original (accompanied by the NFT) would reduce the benefits the counterfeiters get.

Current 'State of The Art' solution
There are already available solutions in the market as of the date of the proposal being written. The current state of the art solution is used to identify paintings and the project is known as “The Currency Project”. There are a total of 10, 000 hand drawn pieces and behind each piece has the artist signature, a unique phrase and a watermark to uniquely identify each piece. The only difference with this solution is that the person has to buy the NFT first and has a year to decide to buy the physical piece. Once the physical piece is bought then the NFT will be destroyed. That is not the solution the team is looking for as NFT is able to hold crucial metadata. 

Another available solution that is closely related to the solution that the team is currently proposing is by stockX. They have a feature called ‘Vault NFT’ where physical copies of limited collection sneakers are tied to NFTs. These sneakers are stored in a safe vault and can be taken out anytime if the owner so chooses. These transactions will be recorded into the block and are analogous. The differences between stockX’s solution and the group is that stock’s solution is purely online and the group requires sneaker owners to have both the NFT and physical sneaker to trade.  

Setup:
1) Install Ganache
2) Ensure node.js installed
3) run 'npm install -g truffle@5.0.2' in cmd
4) Pull git
5) run 'npm install' in directory
6) Install MetaMask chrome extension
7) Run Ganache
8) First account, click on key icon on the right side and copy the private key
9) Add new network in MetaMask, with the following details
	- Network Name: Ganache
	- New RPC URL: HTTP://127.0.0.1:7545
	- Chain ID: 1337
	- Currency Symbol: ETH 
10) In MetaMask, click on profile icon (top right)
	- Click 'import account' > paste copied private key > 'import' 
11) run 'npm run start' in cmd - will start website
