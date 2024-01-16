"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image.js";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { articles } from "./slide.js";
import { Title } from "../title/title.jsx";

export function Articles() {
  return (
    <>
      <section className="relative mt-16 md:mt-28">
        <Title
          title="Nos dernières actualités"
          subtitle="Découvrez nos articles"
        />
        <Swiper
          className="my-16"
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              navigation: {
                enabled: false,
              },
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
              navigation: {
                enabled: true,
              },
            },
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          grabCursor={true}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {articles.map((article, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="slide">
                  <Image
                    src={article.thumbnail}
                    loading="lazy"
                    alt={article.title}
                    className="w-full"
                  />
                  <div className="px-4 py-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-heading">
                        {article.title}
                      </h3>
                      <p className="text-body text-sm">{article.createdAt}</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-base text-body line-clamp-2">
                        {article.content}
                      </p>
                      <div className="mt-4 plus">
                        <span className="text-sm">Voir plus</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}
