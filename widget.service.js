function getWidgetSnippet() {
    return `
<script>
  (function(){
    console.log("AI Widget Loaded!");
  })();
</script>`;
}

module.exports = { getWidgetSnippet };
