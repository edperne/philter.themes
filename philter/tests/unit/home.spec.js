import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Home.vue', () => {
  it('renders welcome message', () => {
    const welcome_text = 'Welcome To Philter';
    const wrapper = shallowMount(Home, {});
    expect(wrapper.text()).to.include(welcome_text);
  });
});
