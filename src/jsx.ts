export declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any
        "m:use": {
            src: string,
            raw?: boolean,
        }
    }
    interface ElementAttributesProperty {
        props: any;
    }
    type Element = string
}

type Factory<T> =
    (
        tag: T | string,
        attr: {
            [key: string]: any
            children?: T | string | (T | string)[]
        }
    ) => T | string

    const jsx: Factory<(arg: any) => JSX.Element> =
    (tag, att) => {
        if (typeof tag == "function")
            return tag(att)

        if (typeof tag == "string") {
            if (tag == "m:importMap") {
                return ``
                    +`<script type="importmap">`
                    +Deno.readTextFileSync(att.src)
                    +`</script>`
            }
            if (tag =="m:use") {
                if (att.src.endsWith(".css")) {
                    return ``
                        +`<link rel="stylesheet" `
                        +`href="${att.src}" `
                        +`type="text/css"></link>`
                }
                if (att.raw) {
                    return ``
                        +`<script type="module">`
                        +Deno.readTextFileSync(att.src)
                        +`</script>`
                }
                return ``
                    +`<script type="module" `
                    +`src="${att.src}"`
                    +`></script>`
            }
            let { children } = att
            if (!children) children = []
            if (!Array.isArray(children)) children = [children]

            const props =
                Object.entries(att)
                    .filter(([k]) => k != "children")
                    .map(([k, v]) => `${k}="${v}"`)
                    .join(" ")
        
            return ``
                +`<${tag} ${props}>`
                +`${children.join("")}`
                +`</${tag}>`
        }
        return ""
    }

export {
    jsx,
    jsx as jsxs,
    jsx as Fragment,
}