var CraveuERC721Token = artifacts.require('CraveuERC721Token');


contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await CraveuERC721Token.new({from: account_one});
            // TODO: mint multiple tokens
            for (let i = 1; i < 10; i++) {
               await this.contract.mint(account_one, i, {from: account_one});
            }
        })

        it('should return total supply', async function () { 
            let supply = await this.contract.totalSupply();
            assert.equal(supply, 9, "Incorrect total supply");
        })

        it('should get token balance', async function () { 
            let balance = await this.contract.balanceOf(account_one);
            assert.equal(balance, 9, "Incorrect token balance");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let uri = await this.contract.tokenURI(1);
            assert.equal(uri, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", "Incorrect URI");
        })

        it('should transfer token from one owner to another', async function () { 
            let result = undefined;
            
            await this.contract.safeTransferFrom(account_one, account_two, 1);

            result = await this.contract.ownerOf(1);

            assert.equal(result, account_two, "Token Transfer Failed!");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await CraveuERC721Token.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let result = undefined;

            result = await this.contract.mint(account_two, 122, {from: account_two});

            assert.equal(result, false, "Only contract owner can mint tokens");
        })

        it('should return contract owner', async function () { 
            let result = await this.contract.owner();
            
            assert.equal(result, account_one, "Invalid contract owner");
        })

    });
})