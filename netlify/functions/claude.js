// ✅ AFTER
const response = await fetch("/.netlify/functions/claude", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
    // No API key needed here!
  },
  body: JSON.stringify({ model: "claude-sonnet-4-20250514", ... })
});
