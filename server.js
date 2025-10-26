import express from "express";
import path from "path";

const app = express();
// serve static files from the dist directory
app.use(express.static(path.join(import.meta.dirname, "dist")));

// render all path, except for the static files, to /dist/index.html
app.use((req, res) => {
  res.sendFile(path.join(import.meta.dirname, "dist", "index.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;
