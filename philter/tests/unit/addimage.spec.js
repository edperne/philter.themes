import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Addimage from '@/views/Addimage.vue';

describe('Account.vue', () => {
  it('renders heading', () => {
    const add_image = 'Add An Image';
    const wrapper = shallowMount(Addimage, {});
    expect(wrapper.text()).to.include(add_image);
  });
});