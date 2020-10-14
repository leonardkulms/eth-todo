# summary
this is a decentralized web application. 
Basically, a web application with a blockchain as backend.

More a proof of concept than anything necessarily useful, this is how you get started:

1. get Ganache to run a local blockchain on your computer: https://www.trufflesuite.com/ganache
2. after cloning, in the eth-todo directory:

then:
1. npm install -g truffle
2. yarn install
3. truffle compile #this compiles the smart contracts

------- before moving on, you need to open ganache and initialize a blockchain (quickstart is enough) --------

truffle migrate # this migrates your smart contracts to the blockchain

In todoList-config.js, use the address of the second created contract (find it in ganache) as TODO_LIST_ADDRESS

1. cd eth-todo/client
2. yarn install
3. yarn start

voila! You have a web application running that stores todo-items on the blockchain!


