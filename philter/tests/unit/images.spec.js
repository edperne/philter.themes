import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Images from '@/views/Images.vue';

describe('Account.vue', () => {
  it('renders heading', () => {
    const latest_images = 'Latest Images';
    const wrapper = shallowMount(Images, {});
    expect(wrapper.text()).to.include(latest_images);
  });
});