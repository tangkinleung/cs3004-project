/* test/sample-test.js */
describe("SnkrChain", function() {
  it("Should create and execute Snkr sales", async function() {
    /* deploy the marketplace */
    const SnkrChain = await ethers.getContractFactory("SnkrChain")
    const snkrChain = await SnkrChain.deploy()
    await snkrChain.deployed()

    let listingPrice = await snkrChain.getListingPrice()
    listingPrice = listingPrice.toString()

    const auctionPrice = ethers.utils.parseUnits('1', 'ether')

    /* create two tokens */
    await snkrChain.createToken("https://www.mytokenlocation.com", auctionPrice, { value: listingPrice })
    await snkrChain.createToken("https://www.mytokenlocation2.com", auctionPrice, { value: listingPrice })

    const [_, buyerAddress] = await ethers.getSigners()

    /* execute sale of token to another user */
    await snkrChain.connect(buyerAddress).createMarketSale(1, { value: auctionPrice })

    /* resell a token */
    await snkrChain.connect(buyerAddress).resellToken(1, auctionPrice, { value: listingPrice })

    /* query for and return the unsold items */
    items = await snkrChain.fetchMarketItems()
    items = await Promise.all(items.map(async i => {
      const tokenUri = await snkrChain.tokenURI(i.tokenId)
      let item = {
        price: i.price.toString(),
        tokenId: i.tokenId.toString(),
        seller: i.seller,
        owner: i.owner,
        tokenUri
      }
      return item
    }))
    console.log('items: ', items)
  })
})