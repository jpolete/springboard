
Best Practices

- If validation is performed on the frontend, be sure to include `aria-live="assertive"` and `role="alert"` so that assistive technology announces the error summary when it appears.
- If validating server-side, ensure the error summary is at the top of the page and that you provide a "skip link" to jump straight to the page content so that users of assistive technology don't have to traverse the header content all over again.