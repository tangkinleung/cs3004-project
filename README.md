# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

All commands are run within the root folder of the project in command prompt.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

Step to run
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
npm run dev

First terminal:
```Start docker
docker build . -t hhdocker
docker run -it -d -p 8545:8545 --name myhd hhdocker
docker logs myhd
docker exec -it myhd /bin/sh -c "cd /usr/src/app; yarn deploy:local"
docker exec -it myhd /bin/sh -c "cd /usr/src/app; npm run dev"
```
First 2 commands to build and run the docker container
docker logs myhd will list the generated ethereum accounts we can import into metamask

In another terminal:
```Run SnkrChain Client

npm run dev
```


