// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Escrow {
    address public buyer;
    address public seller;
    address public arbiter; // An optional third party for dispute resolution
    uint public productId;
    uint public amount;
    bool public releaseToSeller;
    bool public releaseToBuyer;
    bool public refund;

    event FundsDeposited(uint amount, address indexed depositor);
    event FundsReleased(uint amount, address indexed receiver);

    constructor(address _seller, address _arbiter, uint _productId) {
        buyer = msg.sender;
        seller = _seller;
        arbiter = _arbiter;
        productId = _productId;
    }

    // Buyers can deposit funds into the escrow
    function depositFunds() public payable {
        require(msg.sender == buyer, "Only the buyer can deposit funds.");
        require(msg.value > 0, "Funds should be greater than 0.");
        amount += msg.value;
        emit FundsDeposited(msg.value, msg.sender);
    }

    // Buyer can confirm product delivery and satisfaction
    function confirmReceipt() public {
        require(msg.sender == buyer, "Only the buyer can confirm receipt.");
        require(releaseToSeller == false, "Funds have already been released.");
        require(releaseToBuyer == false, "Funds have already been refunded.");
        releaseToSeller = true;
        emit FundsReleased(amount, seller);
    }

    // Seller can withdraw funds after confirmation from the buyer
    function withdrawFunds() public {
        require(msg.sender == seller, "Only the seller can withdraw funds.");
        require(releaseToSeller == true, "Funds have not been released.");
        payable(seller).transfer(address(this).balance);
        emit FundsReleased(amount, seller);
    }

    // Buyer can request a refund
    function refundBuyer() public {
        require(msg.sender == buyer, "Only the buyer can request a refund.");
        require(releaseToSeller == false, "Funds have already been released.");
        require(releaseToBuyer == false, "Funds have already been refunded.");
        refund = true;
    }

    // Arbitrator can settle a dispute and release funds accordingly
    function settleDispute(bool _releaseToSeller) public {
        require(msg.sender == arbiter, "Only the arbiter can settle the dispute.");
        require(refund == true, "No dispute to settle.");
        releaseToSeller = _releaseToSeller;
        releaseToBuyer = !_releaseToSeller;
        emit FundsReleased(amount, _releaseToSeller ? seller : buyer);
    }
}
