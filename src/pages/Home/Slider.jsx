import React from "react";
import { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styled from "styled-components";

import img2 from "../../assets/img/img2.jpg";

const Slider = () => {
  return (
    <Container>
      <SliderContainer>
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <SliderBox>
              <img src={img2} alt="" />
              <SliderBoxDesc>
                <h1>Black Clover</h1>
              </SliderBoxDesc>
            </SliderBox>
          </SwiperSlide>

          <SwiperSlide>
            <SliderBox>
              <img src={img2} alt="" />
              <SliderBoxDesc>
                <h1>Black Clover</h1>
              </SliderBoxDesc>
            </SliderBox>
          </SwiperSlide>

          <SwiperSlide>
            <SliderBox>
              <img src={img2} alt="" />
              <SliderBoxDesc>
                <h1>Black Clover</h1>
              </SliderBoxDesc>
            </SliderBox>
          </SwiperSlide>

          <SwiperSlide>
            <SliderBox>
              <img src={img2} alt="" />
              <SliderBoxDesc>
                <h1>Black Clover</h1>
              </SliderBoxDesc>
            </SliderBox>
          </SwiperSlide>
        </Swiper>
      </SliderContainer>
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  height: 35vh;
  position: relative;
`;

const SliderContainer = styled.div`
  height: 100%;

  // swiper container
  .swiper {
    height: 100%;
    padding-bottom: 3rem;
  }

  // pagination container
  .swiper-pagination {
    position: absolute;
    bottom: 0;
    // the dots
    .swiper-pagination-bullet {
      background-color: var(--primary);
    }
  }
`;

const SliderBox = styled.div`
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }
`;

const SliderBoxDesc = styled.div`
  position: absolute;
  right: 0;
  color: var(--white);
  z-index: 2;
  left: 0;
  bottom: 10%;
  text-align: center;

  h1 {
    padding: 0 5vw;
    font-size: 3.2rem;
    word-wrap: break-word;
  }
`;
