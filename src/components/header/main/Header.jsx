import logo from '@/assets/images/logo2.png';
import { Img } from '@/components/common';
export function Header() {
    return (
        <div className="bg-special-green lg:px-20 p-2 lg:py-4">
            <div className="aspect-square h-[80px]  ">
                <Img src={logo} className="w-full h-full " fit="cover" />
            </div>
        </div>
    );
}
