import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class TestButton extends Plugin {
  static get pluginName() {
    return 'TestButton';
  }

  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add('testbutton', locale => {
      const view = new ButtonView(locale);

      view.set({
        label: 'Test Button',
        withText: true,
        tooltip: true
      });

      view.on('execute', () => {
        console.log('✅ Test Button clicked!');
      });

      return view;
    });
  }
}
