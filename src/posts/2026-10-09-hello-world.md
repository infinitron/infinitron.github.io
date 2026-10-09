---
title: Hello, world
date: 2026-10-09
tags: [meta]
summary: The blog is live. Here is how posts get onto this page.
---

This site is static, so the blog is too. Every markdown file in `src/posts/` is turned into a post when the site is built.

## Adding a post

1. Copy `src/posts/_template.md` to something like `src/posts/2026-11-01-my-post.md`.
2. Fill in the front matter and write the post.
3. Run `npm run build` and publish the result as usual.

Posts are sorted by date, newest first. Set `draft: true` in the front matter to keep a post out of the build while you work on it.

Replace this post with your own whenever you like.
