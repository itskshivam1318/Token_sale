var DappToken = artifacts.require("DappToken")


contract('DappToken', function (accounts) {

    it('sets the total supply upon deployment', async () => {
        const Token = await DappToken.deployed();
        const totalSupply = await Token.totalSupply();
        assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to 1,000,000.');
    })
})

