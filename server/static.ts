import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  // For Vercel, use the dist/public directory
  // For local production, use relative path
  const distPath = process.env.VERCEL
    ? path.resolve(process.cwd(), "dist", "public")
    : path.resolve(__dirname, "..", "dist", "public");
  
  if (!fs.existsSync(distPath)) {
    // On Vercel, static files are served automatically, so we only need SPA fallback
    if (process.env.VERCEL) {
      // Just serve index.html for SPA routing
      app.use("*", (_req, res) => {
        const indexPath = path.resolve(process.cwd(), "dist", "public", "index.html");
        if (fs.existsSync(indexPath)) {
          res.sendFile(indexPath);
        } else {
          res.status(404).send("Not found");
        }
      });
      return;
    }
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist (SPA routing)
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
