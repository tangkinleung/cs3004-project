This project uses an NFT marketplace as a medium to sell and resell sneakers. All NFTs are minted from the admin SnkrChain account, can be bought from the main and only these authorised NFTs are allowed to be traded within the platform. 
Doing so eliminates the counterfeiter's main motivation of counterfeiting shoes on the platform as the shoe value on SnkrChain is within the NFT and block chain rather than on the physical item, this ensure that the buyer's still get the full value of the shoe they bought even if they receive a counterfeit.

All commands are run within the root folder of the project in command prompt.

Try running some of the following tasks:

```Build Docker Image
docker build . -t hhdocker
```

First terminal (build hardhat node):
```Build Docker Image
docker run -it -d -p 8545:8545 --name node hhdocker
docker logs node
```
First 2 commands to build and run the docker container
docker logs myhd will list the generated ethereum accounts we can import into metamask

Second terminal (Run web app):
```Run web client
npx hardhat run scripts/deploy.js --network localhost
npm run dev
```

An example use case of the application with all the steps listed above will be displayed more clearly in our video demonstration
