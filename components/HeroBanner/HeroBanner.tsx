import React from 'react'
import { HeroBannerProps } from './type'
import "./HeroBanner.css"
import Button from '../Button/Button'
import { CtaBtnMappingColor } from '../../src/dummy-sessions'
const HeroBanner: React.FC<HeroBannerProps> = (props) => {
    const {heading, subheading, CTAs = []} = props.content
  return (
    <div className='hero'>
        {heading && <h1 className='hero-heading'>{heading}</h1>}
        {subheading && <h2 className='hero-subheading'>{subheading}</h2>}
        <div className='hero-ctas'>
            {CTAs.length && CTAs.map((cta,i) => {
                return <Button style={{
                    backgroundColor: cta.backgroundColorHex || CtaBtnMappingColor[i]
                }} textOnly={cta?.isLink}>{cta.content}</Button>
            })}
        </div>
    </div>
  )
}

export default HeroBanner