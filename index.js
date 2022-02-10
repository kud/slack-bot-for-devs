import app from "./src/app.js"

import caniuse from "./src/extensions/caniuse.js"
import justwatch from "./src/extensions/justwatch.js"

app.message("!caniuse", caniuse)
app.message("!justwatch", justwatch)

// Start your app
await app.start()

console.log("⚡️ Bolt app is running!")
