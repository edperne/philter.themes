import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Account from '@/views/Account.vue';

describe('Account.vue', () => {
  it('renders heading', () => {
    const userLogin = 'User Login/Registration';
    const wrapper = shallowMount(Account, {});
    expect(wrapper.text()).to.include(userLogin);
  });
});
