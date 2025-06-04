document.getElementById("logoutButton").addEventListener("click", function() {
    firebase.auth().signOut()
        .then(function() {
            window.location.href = "index.html";
        })
        .catch(function(error) {
            alert("Logout failed. " + error.message);
        });
});
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
  const filter = this.value.toLowerCase();
  document.querySelectorAll('.nft-card').forEach(card => {
    const title = card.querySelector('.nft-title').textContent.toLowerCase();
    card.style.display = title.includes(filter) ? '' : 'none';
  });
});

// Scroll to latest-drop on Enter
searchInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    // Find the first visible nft-card
    const visibleCard = Array.from(document.querySelectorAll('.nft-card')).find(card => card.style.display !== 'none');
    if (visibleCard) {
      visibleCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      visibleCard.focus && visibleCard.focus();
    } else {
      // If none found, scroll to latest-drop section
      const latestDrop = document.querySelector('.latest-drop');
      if (latestDrop) {
        latestDrop.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
});
