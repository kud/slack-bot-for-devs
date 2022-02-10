import "dotenv/config"
import bolt from "@slack/bolt"
const App = bolt.App

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  // Socket Mode doesn't listen on a port, but in case you want your app to respond to OAuth, you still need to listen on some port
  port: process.env.PORT || 3000,
})

export default app
