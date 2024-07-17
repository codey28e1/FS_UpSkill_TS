import { Lnk, Btn } from "../Button/Button"
export type bannerCTA = {
    content: string,
    isLink: boolean,
    backgroundColorHex?: string,
}
export type THeroBanner = {
    heading: string,
    subheading: string,
    CTAs: bannerCTA[]
}
export type HeroBannerProps = {
    content: THeroBanner
}