This project uses an NFT marketplace as a medium to sell and resell sneakers. All NFTs are minted from the admin SnkrChain account, can be bought from the main and only these authorised NFTs are allowed to be traded within the platform. 
Doing so eliminates the counterfeiter's main motivation of counterfeiting shoes on the platform as the shoe value on SnkrChain is within the NFT and block chain rather than on the physical item, this ensure that the buyers still get the full value of the shoe they bought even if they receive a counterfeit.

All commands are run within the root folder of the project in command prompt.

Try running some of the following tasks to set up for the first time:

## Build Docker Image from base files
```Build Docker Image
docker build . -t snkrchaindocker
```

OR 

## Pull Docker Image (USE THIS)
```Pull Docker Image
docker pull le0riginz/snkrchaindocker:latest
```

## Run container and launch hardhat network
```Build HardHat Node
docker run -it -d -p 8545:8545 -p 3000:3000 --name SnkrChain le0riginz/snkrchaindocker:latest
docker logs SnkrChain
```
First 2 commands to build and run the docker container

docker logs node will list the generated ethereum accounts we can import into MetaMask

Admin Address used:0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266

Buyer accounts can be imported from any of the list besides the address listed above

## Run webapp client from docker
```Run web client
docker exec -it SnkrChain /bin/sh -c "cd /usr/src/app; yarn deploy:local"
docker exec -it SnkrChain /bin/sh -c "cd /usr/src/app; npm run dev"
```


An example use case of the application with all the steps listed above will be displayed more clearly in our video demonstration

