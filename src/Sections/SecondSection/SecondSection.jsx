import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

import { BIRDS } from "../../constants/birds";
import background from '../../assets/birds/birds-background.png'

export const SecondSection = () => {

    return (
        <section className='second-section'>
            <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
                {BIRDS.map((item) => (
                    <MouseParallaxChild factorX={0.3} factorY={0.5}>
                        <img src={item.bird} alt={item.alt} />
                    </MouseParallaxChild>
                ))}
            </MouseParallaxContainer>
            <img src={background} alt={'background'} />
        </section>
    )
}
