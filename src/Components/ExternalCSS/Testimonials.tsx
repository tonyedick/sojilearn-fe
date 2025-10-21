import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './main.css';

const testimonials = [
  {
    content: "The counsellors at Sojilearn were extremely polite and reassuring, making the application process smooth and hassle-free.",
    name: "Becky Tonlagha",
    university: "Coventry University, UK",
    country: "🇬🇧",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    content: "I decided to pursue an MS, and got recommended Sojilearn by a friend. They assisted with admission and helped me secure funding for tuition and living expenses.",
    name: "Rufai Taofik",
    university: "Northeastern University, Toronto, Canada",
    country: "🇨🇦",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    content: "Sojilearn helped me secure student loan to cover tuition and living expenses in the US.",
    name: "Justice Nnaemeka",
    university: "Khoury College of Sciences, Boston, USA",
    country: "🇺🇸",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    content: "The personalized approach and professional guide helped me find the perfect school. I couldn't be happier with the results!",
    name: "Leonard Atedo",
    university: "Coventry University, UK",
    country: "🇬🇧",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const Testimonials = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const openVideoModal = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
    setVideoModalOpen(true);
  };

  return (
    <section id="testimonials" className="tw-py-16 tw-bg-gray-50">
      <div className="tw-max-w-7xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8">
        <div className="tw-flex tw-items-center tw-justify-between tw-mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="tw-text-2xl tw-text-gray-600 tw-mb-2">Success Stories</h2>
            <h2 className="tw-text-3xl tw-font-bold tw-mb-4">
              Ready <span className="theme-cl">Dreamers</span> to <span className="theme-cl">Achievers</span>
            </h2>
          </motion.div>
          <div className="tw-flex tw-gap-4">
            <button className="swiper-button-prev !tw-static !tw-w-12 !tw-h-8 !tw-bg-white tw-rounded-full tw-shadow-lg !tw-m-0 after:!tw-hidden hover:!tw-bg-blue-800 tw-group">
              <ChevronLeft className="tw-h-4 tw-w-4 tw-theme-cl group-hover:tw-text-white" />
            </button>
            <button className="swiper-button-next !tw-static !tw-w-12 !tw-h-8 !tw-bg-white tw-rounded-full tw-shadow-lg !tw-m-0 after:!tw-hidden hover:!tw-bg-blue-800 tw-group">
              <ChevronRight className="tw-h-4 tw-w-4 tw-theme-cl group-hover:tw-text-white" />
            </button>
          </div>
        </div>

        <div className="tw-relative">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 24,
              },
            }}
            className="tw-testimonials-swiper !tw-pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="tw-bg-white tw-rounded-xl tw-shadow-lg tw-overflow-hidden tw-h-full">
                  <div className="tw-relative tw-h-[320px]">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="tw-w-full tw-h-full tw-object-cover"
                    />
                    <div className="tw-absolute tw-inset-0 tw-bg-black/40">
                      <div className="tw-p-4 tw-h-full tw-flex tw-flex-col">
                        <p className="tw-text-slate-100 tw-text-md tw-leading-relaxed tw-mb-auto tw-line-clamp-6 tw-max-w-[80%]">"{testimonial.content}"</p>
                        <button
                          onClick={() => openVideoModal(testimonial.video)}
                          className="tw-group tw-flex tw-items-center tw-gap-3 tw-mt-2 tw-bg-black/60 tw-rounded-full tw-pr-6 hover:tw-bg-white/20 tw-transition-all tw-duration-300"
                        >
                          <div className="tw-w-10 tw-h-10 tw-bg-white tw-rounded-full tw-flex tw-items-center tw-justify-center">
                            <Play className="tw-h-4 tw-w-4 tw-text-black tw-ml-1" />
                          </div>
                          <span className="tw-text-sm tw-font-medium tw-text-white group-hover:tw-text-white">
                            Watch story
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="tw-p-3 tw-bg-white mt-3">
                    <div className="tw-flex tw-items-center tw-gap-2">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="tw-w-8 tw-h-8 tw-rounded-full tw-object-cover"
                      />
                      <div>
                        <p className="tw-font-medium tw-text-gray-900 tw-text-sm" style={{marginBottom: "1px"}}>{testimonial.name}</p>
                        <p className="tw-text-xs tw-text-gray-600">
                          {testimonial.university} {testimonial.country}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="tw-fixed tw-inset-0 tw-bg-black/75 tw-flex tw-items-center tw-justify-center tw-z-50">
          <div className="tw-relative tw-w-full tw-max-w-4xl tw-mx-4">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="tw-absolute tw--top-10 tw-right-0 tw-text-white hover:tw-text-gray-300"
            >
              Close
            </button>
            <div className="tw-relative tw-pb-[56.25%] tw-h-0">
              <iframe
                title="Testimonial Video"
                src={currentVideo}
                className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;