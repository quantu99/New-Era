import { Img } from '@/components';
import hero from '@/assets/images/hero.jpg';
import '../styles/Hero.scss';
export function Hero() {
    return (
        <div className="w-full relative">
            <div className="brightness-50 lg:h-[934px] object-top">
                <Img src={hero} className="w-full h-full object-top" fit="cover" />
            </div>
            <h1 className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-special-tan lg:text-[60px] w-full flex justify-center font-[300] font-italia">
                CLASSIC-ROMANTIC-TRENDY VIBES
            </h1>
            <button className="btn !hidden lg:!block ">
                <span className="font-italia">Shopping now</span>
            </button>
            <button className="absolute px-8 py-2 bg-white bottom-5 left-[34%] bg-golden lg:hidden font-italia">
                <span className="text-[14px] tracking-wide">Shopping now</span>
            </button>
        </div>
    );
}
