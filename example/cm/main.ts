import { basicSetup } from "codemirror"
import { EditorView, keymap } from "@codemirror/view"
import { indentWithTab } from "@codemirror/commands"

const editor = new EditorView({
    extensions: [
        basicSetup,
        keymap.of([indentWithTab]),
        EditorView.theme({
        "&": {
            color: "white",
            backgroundColor: "black",
        },
        "&.cm-focused .cm-cursor": {
            borderLeftColor: "white"
        },
        }, {dark: true})
    ],
    parent: document.querySelector("editor"),
})

import "adorable-css"