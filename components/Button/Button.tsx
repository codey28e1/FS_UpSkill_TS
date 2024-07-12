import React, { ComponentPropsWithoutRef, ReactNode } from 'react'
import { LinkProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
type commonType = {
    children: ReactNode,
    textOnly?: boolean,
    activeLink?: boolean
}
type Btn = ComponentPropsWithoutRef<"button"> & commonType & {to?: never}
type Lnk = LinkProps & commonType & {to: string}

function isLink(
    props: Btn | Lnk,
  ): props is Lnk {
    return "to" in props;
  }
const Button: React.FC<Btn | Lnk> = (props) => {
    if(isLink(props)){
        const {children, textOnly, activeLink, ...rest} = props
        return <Link {...rest} className={`button ${textOnly && "button--text-only"} ${activeLink && "active"}`}>{children}</Link>
    }
    const { children, textOnly, ...rest } = props;
  return (
    <button className={`button ${textOnly && "button--text-only"}`} {...rest}>
        {children}
    </button>
  )
}

export default Button