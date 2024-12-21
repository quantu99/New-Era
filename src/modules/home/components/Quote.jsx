'use client';
import quote1 from '@/assets/images/quote1.webp';
import quote2 from '@/assets/images/quote2.webp';
import quote3 from '@/assets/images/quote3.webp';
import { Img } from '@/components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useRef } from 'react';
import { Autoplay } from 'swiper/modules';

export function Quote() {
    const quoteArr = [
        {
            content:
                " Looking for a shoe that will make an impression? Look no further than the Woburn Brogues from Men's Era. These hi shine formal leather brogues are sure to turn heads with their chunky rubber studded fashion sole and detailed brogue pattern. Not to mention, they're incredibly comfortable with a cushioned Ortholiteจ inner-sole. So whether you're headed to the office or a night out on the town, the Woburn Brogues are perfect for any occasion.",
            image: quote1,
        },
        {
            content:
                "When it comes to spring and summer style, there's nothing quite like a great pair of leather Brogues and our Sully shoes are the perfect choice for any smart/casual occasion. Made from rich washed leather, they feature a long-wing brogue pattern that extends all the way to the heel. A cushioned Ortholiteจ inner provides added comfort and the contrasting rand around the sole gives this shoe a stylish lift. So when you're looking for the perfect finishing touch to your spring and summer wardrobe, reach for our Sully shoes. You'll be glad you did.",
            image: quote2,
        },
        {
            content:
                " Crane has been designed for the man who means business. Sleek, sophisticated and stylish, this formal leather Oxford shoe is perfect for making a great impression. With a 5-lace closing, toe-cap stitching and slim line resin sole, it's got all the features you need to look your best. Plus, the Ortholiteจ inner-sole provides cushioned comfort all day long. When you want to make the right impression, reach for 'Crane'.",
            image: quote3,
        },
    ];
    return (
        <div className="bg-special-green lg:px-20 p-2 lg:py-20 mx-auto">
            <div className="flex flex-col gap-20 lg:max-w-[1170px] mx-auto">
                {quoteArr.map((quote, index) => (
                    <div
                        key={index}
                        className={`flex justify-around ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
                    >
                        <div className="relative flex-1  max-w-[280px] border border-special-tan lg:w-[280px] lg:h-[335px]">
                            <Img className="w-full h-[90%] absolute -left-2 top-2" fit="cover" src={quote.image} />
                        </div>
                        <div className="relative flex-1 max-w-[50%] font-italia text-lg leading-[1.5rem] text-special-gold pt-10">
                            <p>{quote.content}</p>
                            <div className="font-spaceGrotesk absolute -top-[10px] -left-[50px]  text-special-tan size-20 rounded-[50%] border-dotted border-l border-t flex justify-center items-center border-special-tan">
                                <span className="text-6xl mt-[25px]">"</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SwiperQuote() {
    const swiperRef = useRef(null);
    const handlePrevSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNextSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    return (
        <Swiper
            ref={swiperRef}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Autoplay]}
        >
            <SwiperSlide>
                <div className="step step-1">
                    <div className="title">
                        <span>
                            <Lang text="Bước 1:" />
                        </span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                        <span>
                            <Lang text="Chọn mục " />
                            <b>
                                <Lang text="Chèn/liên kết " />
                            </b>
                            <Lang text="trên thanh công cụ" />
                        </span>
                        <div>
                            <img className="image-1" src={step1} alt="step-1" />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="step">
                    <div className="title">
                        <span>
                            <Lang text="Bước 2:" />
                        </span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                        <span>
                            <Lang text="Tại section " />
                            <b>
                                <Lang text="Thông tin liên kết" />,{' '}
                            </b>
                            <Lang text="hãy điền các thông tin quan trọng" />{' '}
                        </span>
                        <ul className="list">
                            <li className="list-item">
                                <span>
                                    <b>
                                        <Lang text="Display Text: " />
                                    </b>
                                    <Lang text="Nội dung của nút liên kết" />
                                </span>
                            </li>
                            <li className="list-item">
                                <span>
                                    <b>
                                        <Lang text="URL*: " />
                                    </b>
                                    <Lang text="Đường dẫn của liên kết mà bạn muốn người dùng hướng tới" />
                                </span>
                            </li>
                        </ul>
                        <div>
                            <img src={step2} alt="step-2" />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="step">
                    <div className="title">
                        <span>
                            <Lang text="Bước 3:" />
                        </span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                        <span>
                            <Lang text="Tại section " />
                            <b>
                                <Lang text="Mở rộng" />
                            </b>
                            , <Lang text="hãy thêm dòng" />{' '}
                            <b>
                                <Lang text="btn" />
                            </b>{' '}
                            <Lang text="ngay tại" />{' '}
                            <b>
                                <Lang text="Lớp StyleSheet" />
                            </b>
                        </span>
                        <div>
                            <img src={step3} alt="step-3" />
                        </div>
                        <span>
                            <Lang text="Sau khi hoàn thành xong, nhấn chọn" />{' '}
                            <b>
                                <Lang text="Đồng ý" />
                            </b>
                        </span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="step">
                    <div className="title">
                        <span>
                            <Lang text="Preview:" />
                        </span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                        <span>
                            <Lang text="Ta sẽ có được nút liên kết có nội dung:" />{' '}
                            <b>
                                <Lang text="Tạo CV ngay" />
                            </b>{' '}
                            <Lang text="như sau" />
                        </span>
                        <div>
                            <img src={step4} alt="step-4" />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
