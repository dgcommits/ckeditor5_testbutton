console.log('[TestButton] Plugin loaded');

const Plugin = window.CKEditor5.core.Plugin;
const ButtonView = window.CKEditor5.ui.ButtonView;

class TestButton extends Plugin {
  static get pluginName() {
    return 'TestButton';
  }

  init() {
    console.log('[TestButton] Initializing');
    const editor = this.editor;

    editor.ui.componentFactory.add('TestButton', locale => {
      const view = new ButtonView(locale);
      view.set({
        label: 'Test Button',
        withText: true,
        tooltip: true
      });
      view.on('execute', () => {
        console.log('[TestButton] Clicked');
      });
      return view;
    });
  }
}

window.CKEditor5 = window.CKEditor5 || {};
window.CKEditor5.testbutton = {
  default: TestButton
};

export default TestButton;
