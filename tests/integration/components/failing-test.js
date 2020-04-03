import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Failing tests', function(hooks) {
  setupRenderingTest(hooks);

  test('something={{action.value}}', async function(assert) {

    this.set('action', { foo: 'bar' });
    await render(hbs`<ActionComponent @action={{this.action}} />`);

    assert.dom('[data-something="bar"]').exists();
  });

  test('something={{task.value}}', async function(assert) {

    this.set('task', { foo: 'bar' });
    await render(hbs`<TaskComponent @task={{this.task}} />`);

    assert.dom('[data-something="bar"]').exists();
  });
});
