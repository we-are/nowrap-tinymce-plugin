/**
 *  A TinyMCE plugin that adds a button that enable users to define parts of the text that can't be "line-breaked",
 *  like a company name that should not be on multiple lines (ex: Coca-Cola)
 *  
 *  More infos here : https://github.com/we-are/nowrap-tinymce-plugin
 *  
 *  @license LGPL
 *  @copyright WE_ARE interactive 2016
 *  @author William McMurray <wmcmurray@weareinteractive.ca>
 */

tinymce.PluginManager.add('nowrap', function(editor, url) {
  // make the span styled in the editor
  editor.contentStyles.push('span.nowrap {white-space: nowrap; color: #414F6D;}');

  // register our nowrap span
  editor.on('init', function(evt){
    editor.formatter.register('nowrap', {inline : 'span', attributes: {class: 'nowrap'}});
  });

  // add a button in the toolbar
  // NOTE: not automatically added to the UI, you'll need to add it yourself during 'tinymce.init({...})'
  editor.addButton('nowrap', {
    text: 'No wrap',
    icon: false,
    onclick: function() {
      editor.formatter.toggle('nowrap');
    },
    onPostRender: function() {
      var ctrl = this;
      editor.on('NodeChange', function(e) {
        ctrl.active(e.element.className == "nowrap");
      });
    }
  });
});