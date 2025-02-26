import * as chai from 'chai';
import * as spies from 'chai-spies';
import { activate, deactivate } from '../../extension';
import { sleep, sleepTime, context } from '../test.common/common';
chai.use(spies);
const expect = chai.expect;

suite('Extension.ts tests', () => {
	test('activate', () => {
		const spy = chai.spy(activate);
		activate(context);
		expect(spy).to.be.have.been.called;
	});
	test('deactivate', () => {
		const spy = chai.spy(deactivate);
		deactivate();
		sleep(sleepTime);
		expect(spy).to.be.have.been.called;
	});
});
