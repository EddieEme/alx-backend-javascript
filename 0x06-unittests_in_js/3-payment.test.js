// 3-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        
        sendPaymentRequestToApi(100, 20);
        
        expect(calculateNumberSpy.calledOnce).to.be.true;
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
        
        calculateNumberSpy.restore();
    });
});
