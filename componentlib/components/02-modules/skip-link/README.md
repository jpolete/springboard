# Skip Link

An unobtrusive skip link. The link should appear in source order before the header and navigation to give keyboard users and accessibility software users a quick link to jump to the main content.

The link is positioned offscreen so that it is invisible for sighted users. When it receives focus, though, it will appear on screen (for instance when a keyboard user begins tabbing through focusable elements). Likewise screenreaders will encounter it, allowing users to skip repetitive header and navigation items and jump straight to the unique page content.

```
<body>
  <a href="#main">Skip to main content</a>
  <header>
    // Navigation and repetive content here...
  </header>
  <main id="main">
    <h1>Article Title</h1>
    ...
  </main>
</body>
```

*Idea taken from "Inclusive Design Patterns" by Heydon Pickering.*
