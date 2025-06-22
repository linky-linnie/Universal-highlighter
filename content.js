document.addEventListener("mouseup", () => {
  const selection = window.getSelection();
  const text = selection.toString();
  if (text.length > 0) {
    const range = selection.getRangeAt(0);
    const span = document.createElement("span");
    span.style.backgroundColor = "yellow";
    span.className = "my-highlighter";
    range.surroundContents(span);
    selection.removeAllRanges();

    // Optional: Save highlights
    chrome.storage.local.get(["highlights"], function(result) {
      const highlights = result.highlights || [];
      highlights.push(text);
      chrome.storage.local.set({ highlights });
    });
  }
});
