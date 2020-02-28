import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | my-component', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    this.set('action', { foo: 'bar' });
    await render(hbs`<MyComponent @action={{this.action}} />`);

    assert.dom('[data-something="bar"]').exists();
  });
});
