if (!("paintWorklet" in CSS)) {
    await import("css-paint-polyfill")
}

CSS.paintWorklet.addModule(
    `https://www.unpkg.com/css-houdini-squircle/squircle.min.js`
)