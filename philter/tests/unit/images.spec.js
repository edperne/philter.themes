import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Images from '@/views/Images.vue';

describe('Account.vue', () => {
  it('renders heading', () => {
    const otherImages = 'Other Images';
    const wrapper = shallowMount(Images, {});
    expect(wrapper.text()).to.include(otherImages);
  });
});
