import { Application } from "https://deno.land/x/oak@v12.6.1/mod.ts"

import { Editor } from "./Editor.tsx"

const app = new Application()

app.use(ctx => {
    console.log(ctx.request.url.pathname)
    ctx.response.headers.set("Content-Type", "text/html")
    ctx.response.body = Editor()
})

await app.listen({ port: 8000 })