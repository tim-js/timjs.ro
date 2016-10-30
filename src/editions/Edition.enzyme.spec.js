import React from 'react';
import { shallow, mount, render } from 'enzyme';

import {editionData} from 'editionStubData.js'
import Talk from './Talk';

import Edition from './Edition';

describe('Edition, with Enzyme', () => {
  it('should initially render the talks visible, with static render', () => {
    const wrapper = render(<Edition data={editionData} />);
    expect(wrapper.find('.talks-list').length).toEqual(1);
	});

  it('should initially render the talks visible, with full DOM render', () => {
    const wrapper = mount(<Edition data={editionData} />);
    expect(wrapper.find(Talk).length).toEqual(2);
	});

  it('should hide the talks when unchecking, with shallow rendering', () => {
    const wrapper = shallow(<Edition data={editionData} />);
    wrapper.instance().toggleTalks(false);
    expect(wrapper.state().displayTalks).toEqual(false);
	});

  it('should hide the talks when unchecking, with full DOM rendering', () => {
    const wrapper = mount(<Edition data={editionData} />);
    wrapper.find('input[type="checkbox"]').simulate('change', {'target': {'checked': false}});
    expect(wrapper.containsMatchingElement(<Talk/>)).toEqual(false);
	});
});
