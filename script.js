
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('trackForm').addEventListener('submit', function(e){
  e.preventDefault();
  var tn = document.getElementById('tn').value.trim();
  var res = document.getElementById('trackResult');
  if(!tn){ alert('Please enter a tracking number'); return; }
  // Simple demo — match known tracking number
  if(tn === 'SD202511260983'){
    res.style.display='block';
    res.innerHTML = '<p><strong>Status:</strong> In Transit</p><p><strong>Last Location:</strong> SwiftDrop Hub — Processing Center</p><p><strong>ETA:</strong> Within 24 hours</p>';
  } else {
    res.style.display='block';
    res.innerHTML = '<p>No tracking data found for <strong>'+tn+'</strong>. Please check the number and try again.</p>';
  }
});
