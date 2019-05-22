var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var SquareVerifier = artifacts.require('SquareVerifier');
var proof = require('./proof.json');

contract('SolnSquareVerifier', accounts => {

    const account_one = accounts[0];

    describe('Testing SolnSquareVerifier mint', async () => {
        
        beforeEach( async function () {
            let squareVerifier = await SquareVerifier.new(account_one);
            this.contract = await SolnSquareVerifier.new(squareVerifier.address, {from: account_one});
        })

        // Test if a new solution can be added for contract - SolnSquareVerifier
        it('2 solutions cannot be added for contract', async function () {
            let tokenId = 24;
            let result;
            try {
                await this.contract.mintNFT(
                    account_one,
                    tokenId,
                    proof.proof.A,
                    proof.proof.A_p,
                    proof.proof.B,
                    proof.proof.B_p,
                    proof.proof.C,
                    proof.proof.C_p,
                    proof.proof.H,
                    proof.proof.K,
                    proof.input,
                    {from: account_one}               
                );
                
                await this.contract.mintNFT(
                    account_one,
                    tokenId,
                    proof.proof.A,
                    proof.proof.A_p,
                    proof.proof.B,
                    proof.proof.B_p,
                    proof.proof.C,
                    proof.proof.C_p,
                    proof.proof.H,
                    proof.proof.K,
                    proof.input,
                    {from: account_one}               
                );
    
                result = true; 
            } catch (error) {
                result = false;
            }
            assert.equal(result, false, "2 solutions cannot be added for contract")
        })

         // Test if an ERC721 token can be minted for contract - SolnSquareVerifier

        it('ERC721 token can be minted', async function ()  {
            let tokenId = 7;
            await this.contract.mintNFT(
                        account_one,
                        tokenId,
                        proof.proof.A,
                        proof.proof.A_p,
                        proof.proof.B,
                        proof.proof.B_p,
                        proof.proof.C,
                        proof.proof.C_p,
                        proof.proof.H,
                        proof.proof.K,
                        proof.input,
                        {from: account_one}               
                    );

            let result = await this.contract.ownerOf(tokenId);
            assert.equal(result, account_one, "Is not the owner of token");
        })

    })
})

