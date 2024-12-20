// 5-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;
    
    beforeEach(() => {
        // Create a fresh spy before each test
        consoleSpy = sinon.spy(console, 'log');
    });
    
    afterEach(() => {
        // Clean up the spy after each test
        consoleSpy.restore();
        sinon.restore(); // Restore all Sinon features
    });
    
    it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    });
    
    it('sendPaymentRequestToApi(10, 0) logs "The total is: 10" to the console', () => {
        sendPaymentRequestToApi(10, 0);
        expect(consoleSpy.calledOnce).to.be.true;
        expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    });
});