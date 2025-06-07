<script>
  function toggleDocs(serviceItem) {
    const docs = serviceItem.querySelector(".documents");
    if (docs) {
      docs.style.display = docs.style.display === "block" ? "none" : "block";
    }
  }

  function showAlert() {
    alert("Thank you! Our team will contact you soon.");
  }
</script>
