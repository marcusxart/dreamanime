import React, { useState, useEffect } from "react";
import { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import api from "../../fetch/gogoanimeFetch";
import { useWindowSize } from "../../hooks/useWindowSize";

import styled from "styled-components";

const Slider = () => {
  const [topAiring, setTopAiring] = useState([]);
  const { width } = useWindowSize();

  useEffect(() => {
    const FetchTopAiring = async () => {
      try {
        const res = await api.get("/top-airing");
        if (res && res.data) setTopAiring(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    FetchTopAiring();
  }, []);

  return (
    <Container>
      <SliderContainer>
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={width > 600 ? 2 : 1}
          autoplay
          pagination={{ clickable: true }}
        >
          {topAiring.map((data) => (
            <SwiperSlide key={data.animeId}>
              <SliderBox>
                <img src={data.animeImg} alt="" />
                <SliderBoxDesc>
                  <h1>{data.animeTitle}</h1>
                </SliderBoxDesc>
              </SliderBox>
            </SwiperSlide>
          ))}
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
    opacity: 0.8;
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
    text-shadow: 0.3rem 0.3rem var(--offset);
    font-size: 2.4rem;
    line-height: 2.2rem;
    text-transform: capitalize;
    word-wrap: break-word;
  }
`;
