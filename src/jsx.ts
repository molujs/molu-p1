export declare namespace JSX {
    interface IntrinsicElements {
        [elemName: string]: any
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
                +`<${tag}/>`
        }
        return ""
    }

export {
    jsx,
    jsx as jsxs,
    jsx as Fragment,
}