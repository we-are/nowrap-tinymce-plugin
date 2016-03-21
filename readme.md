nowrap TinyMCE plugin
=========================

Add a button that enable users to define parts of the text that can't be "line-breaked", like a company name that should not be on multiple lines (ex: Coca-Cola). It creates a `<span class="nowrap">...</span>` around those parts of text.


How to use
-----

1. load the plugin file `<script src="/path/to/your/javascripts/nowrap.tinymce.plugin.js">`
2. place the `nowrap` button somewhere in your editors toolbar like so :
  ```js
  tinymce.init({
    toolbar: 'undo redo | bold italic | nowrap'
  });
  ```
  
3. add this CSS in your front-end to render the outputed spans correctly :
  ```css
  .nowrap {white-space: nowrap;}
  ```
