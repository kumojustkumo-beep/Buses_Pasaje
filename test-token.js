const jwt = require('jsonwebtoken');

const token = "PASTE_YOUR_TOKEN_HERE";   // ← Replace this line

console.log("Token length:", token ? token.length : 0);

try {
  const payload = jwt.verify(token, '6767676767676767676767676767676767676767676767676767676767676767');
  console.log("✅ Token is VALID");
  console.log("Payload:", payload);
} catch (e) {
  console.log("❌ Token is INVALID");
  console.log("Error:", e.message);
}