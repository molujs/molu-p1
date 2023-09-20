const Editor = () =>
<html lang="en">
    <head>
        {
            async function () {
                if (!("paintWorklet" in CSS)) {
                  await import("css-paint-polyfill")
                }
            
                CSS.paintWorklet.addModule(
                  `https://www.unpkg.com/css-houdini-squircle/squircle.min.js`
                )
              }
        }
        <m:use src="./main.ts"/>
        <m:use src="./global.css"/>
    </head>
</html>

console.log(<Editor/>)