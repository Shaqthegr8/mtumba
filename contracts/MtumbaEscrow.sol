// contracts/MtumbaEscrow.sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MtumbaEscrow {
    enum State { AWAITING_PAYMENT, AWAITING_DELIVERY, COMPLETE, DISPUTE }
    State public currentState;

    address public buyer;
    address payable public seller;
    uint public amount;
    address public arbiter;

    constructor(address _buyer, address payable _seller, address _arbiter) {
        buyer = _buyer;
        seller = _seller;
        arbiter = _arbiter;
        currentState = State.AWAITING_PAYMENT;
    }

    function deposit() external payable {
        require(msg.sender == buyer, "Only buyer can deposit");
        require(currentState == State.AWAITING_PAYMENT, "Already paid");
        amount = msg.value;
        currentState = State.AWAITING_DELIVERY;
    }

    function confirmDelivery() external {
        require(msg.sender == buyer, "Only buyer can confirm delivery");
        require(currentState == State.AWAITING_DELIVERY, "Cannot confirm delivery yet");
        seller.transfer(amount);
        currentState = State.COMPLETE;
    }

    function raiseDispute() external {
        require(msg.sender == buyer || msg.sender == seller, "Only buyer or seller can raise dispute");
        currentState = State.DISPUTE;
    }

    function resolveDispute(bool refundBuyer) external {
        require(msg.sender == arbiter, "Only arbiter can resolve dispute");
        require(currentState == State.DISPUTE, "No dispute raised");

        if (refundBuyer) {
            payable(buyer).transfer(amount);
        } else {
            seller.transfer(amount);
        }

        currentState = State.COMPLETE;
    }
}
