pragma solidity >=0.4.21 <0.6.0;

import "./ERC721Mintable.sol";
import "./Verifier.sol";

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
contract SquareVerifier is Verifier {}
// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class

contract SolnSquareVerifier is CraveuERC721Token {

    SquareVerifier squareVerifier;

    constructor(address verifierAddress) public {
        squareVerifier = SquareVerifier(verifierAddress);
    }


// TODO define a solutions struct that can hold an index & an address

    struct Solution {
        uint256 tokenId;
        address to;
    }

// TODO define an array of the above struct

    Solution[] private solution;

// TODO define a mapping to store unique solutions submitted

    mapping(bytes32 => Solution) private solutions;

// TODO Create an event to emit when a solution is added

    event SolutionAdded(uint256 tokenId, address to);

// TODO Create a function to add the solutions to the array and emit the event

    function addSolution(uint256 _tokenId, address _to, bytes32 key) internal {
        Solution memory newSolution = Solution({tokenId: _tokenId, to: _to});
        solution.push(newSolution);
        solutions[key] = newSolution;
        emit SolutionAdded(_tokenId, _to);
    }

// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly

    function mintNFT(address to, 
                     uint256 tokenId, 
                     uint[2] memory a,
                     uint[2] memory a_p,
                     uint[2][2] memory b,
                     uint[2] memory b_p,
                     uint[2] memory c,
                     uint[2] memory c_p,
                     uint[2] memory h,
                     uint[2] memory k,
                     uint[2] memory input) public {

                         require(squareVerifier.verifyTx(a, a_p, b, b_p, c, c_p, h, k, input), "Verification failed!");

                         bytes32 key = keccak256(abi.encodePacked(a, a_p, b, b_p, c, c_p, h, k, input));

                         require(solutions[key].to == address(0), "Solution already exists");
                         addSolution(tokenId, to, key);
                         super.mint(to, tokenId);
                     }
}


























