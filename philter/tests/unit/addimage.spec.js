import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Upload from '@/views/Upload.vue';

describe('Upload.vue', () => {
  it('renders heading', () => {
    const addImage = 'Add An Image';
    const wrapper = shallowMount(Upload, {});
    expect(wrapper.text()).to.include(addImage);
  });
});
