// tinymce-config.js
import tinymce from 'tinymce/tinymce';
import 'tinymce/themes/silver';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';

tinymce.init({
  selector: 'textarea#editor', // ID atau kelas textarea yang akan digunakan untuk TinyMCE
  height: 500, // Tinggi editor
  plugins: ['paste', 'link', 'image'],
  toolbar: 'undo redo | formatselect | ' +
           'bold italic forecolor backcolor | ' +
           'alignleft aligncenter alignright alignjustify | ' +
           'bullist numlist outdent indent | ' +
           'link image',
});
