// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'landing to login': function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.urlContains('#/login')
      .assert.title('BOOKAT | Login')
      .assert.elementPresent('img[alt="BOOKAT"]')
      .assert.elementPresent('#email_input')
      .assert.elementPresent('#password_input')
      .assert.elementPresent('#submit')
      .assert.containsText('#submit', 'LOGIN')
      .end();
  },
  'login > signup > reset': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.urlContains('#/login').assert.title('BOOKAT | Login')
      .click('#signup').assert.urlContains('#/signup').assert.title('BOOKAT | Signup')
      .click('#login').assert.urlContains('#/login').assert.title('BOOKAT | Login')
      .click('#reset').assert.urlContains('#/reset').assert.title('BOOKAT | Account Reset')
      .click('#login').assert.urlContains('#/login').assert.title('BOOKAT | Login')
      .click('#signup').assert.urlContains('#/signup').assert.title('BOOKAT | Signup')
      .click('#reset').assert.urlContains('#/reset').assert.title('BOOKAT | Account Reset')

      .end();
  },
};
