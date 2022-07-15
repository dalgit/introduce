<button onclick="moveToTop()">Top</button>
<button onclick="moveToTopSmooth()">Top Smooth</button>

<script>
var moveToTop = function() {
  document.body.scrollIntoView();
};

var moveToTopSmooth = function() {
document.body.scrollIntoView({ behavior: 'smooth' });
};
</script>