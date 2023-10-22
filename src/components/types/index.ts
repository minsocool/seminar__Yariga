export type SvgProps = JSX.IntrinsicElements['svg']
export interface ISidebarLink {
    icon: JSX.Element,
    title: string,
    link?: string,
    children?: {
        title: string,
        link: string
    }[]
}