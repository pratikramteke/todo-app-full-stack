import app from "./app.js"
import config from "./config/config.js"

app.listen(config.PORT, () =>
  console.log(`App is running at http://localhost:${config.PORT}`)
)
