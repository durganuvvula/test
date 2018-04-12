// dummy script for AEM embedding

(function() {

console && console.log('Embedded dummy script called');

try {
    $(document).ready(function() {
      console && console.log('Embedded dummy script: jQuery found and ready');
    });
}
catch(e) {
  console && console.error('Embedded dummy script: error testing for jQuery', e);
}

})();
