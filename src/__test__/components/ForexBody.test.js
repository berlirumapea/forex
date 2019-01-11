import React from 'react';
import ForexBody from '../../components/ForexBody';
import { shallow } from 'enzyme'
import ForexCurrencyCard from '../../components/ForexCurrencyCard';

describe('<ForexBody />', () => {
	it("renders a card", () => {
		const wrapper = shallow(<ForexBody />);
		const card = wrapper.find(ForexCurrencyCard);
		expect(card).toBeDefined();
	})
})
