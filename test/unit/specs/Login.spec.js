import Vue from 'vue';
import Login from '@/views/auth/Login';

describe('Login.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Login);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('#submit').textContent.trim())
      .to.equal('Login');
  });
});
