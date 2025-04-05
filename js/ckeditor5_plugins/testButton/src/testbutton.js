class TestButton extends window.CKEDITOR5.core.Plugin {
  static get pluginName() {
    return 'TestButton';
  }

  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add('testbutton', locale => {
      const view = new window.CKEDITOR5.ui.ButtonView(locale);
      view.set({
        label: 'Test Button',
        tooltip: true,
        withText: true
      });
      view.on('execute', () => {
        console.log('✅ Test Button Clicked');
      });
      return view;
    });
  }
}

window.CKEditorPlugins = window.CKEditorPlugins || {};
window.CKEditorPlugins.TestButton = TestButton;
