export const Editor = () =>
<html lang="en">
    <head>
        <m:importMap src="./import_map.json"/>
        <m:use raw src="./src/cmInit.js"/>
        <m:use src="./src/global.css"/>
        <m:use raw src="./src/useSquircle.js"/>
    </head>
    <body class="hbox(fill) flex-wrap p(20) gap(20) monospace font(20)">
        <editor class="squircle-clip w(400~)  flex(1) bg(#0b0e14)">
            {/* Inject CodeMirror */}
        </editor>
        <preview class="clip w(400~) flex(1) p(10) squircle">
            Hello
        </preview>
    </body>
</html>

await Deno.writeTextFile("index.html", <Editor/>)