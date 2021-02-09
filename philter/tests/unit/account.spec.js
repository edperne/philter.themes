import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Account from '@/views/Account.vue';

describe('Account.vue', () => {
  it('renders heading', () => {
    const user_login = 'User Login/Registration';
    const wrapper = shallowMount(Account, {});
    expect(wrapper.text()).to.include(user_login);
  });
});