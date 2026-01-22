import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../css/ServiceSection.css';

const services = [
  {
    title: 'INTERIOR PAINTING',
    text: "Clean, detailed interior work with crisp lines and a flawless finish.",
    bullets: [
      'Walls & ceilings',
      'Trim/baseboards/crown molding',
      'Doors & door frames',
      'Cabinets (kitchen/bath)',
      'Drywall repair / patching before paint',
      'Popcorn ceiling removal (if applicable)',
      'Stain-blocking (water spots, smoke, etc.)'
    ]
  },
  {
    title: 'EXTERIOR PAINTING',
    text: 'Durable exterior coatings built to handle Florida sun, heat, and storms.',
    bullets: [
      'Full exterior house painting',
      'Trim, fascia, soffit',
      'Garage doors & front doors',
      'Shutters',
      'Exterior staining (decks, fences, pergolas)',
      'Power washing / soft wash prep',
      'Caulking & sealing gaps'
    ]
  },
  {
    title: 'PREP & SURFACE WORK',
    text: 'The difference is in the prep. We protect your space and do it right.',
    bullets: [
      'Sanding / scraping / priming',
      'Pressure washing',
      'Minor wood repair / rot replacement (if applicable)',
      'Stucco crack repair (minor)',
      'Masking and protection (floors, furniture, landscaping)'
    ]
  },
  {
    title: 'COMMERCIAL PAINTING',
    text: 'Reliable crews, clean job sites, and timelines you can plan around.',
    bullets: [
      'Offices, retail, restaurants',
      'Warehouses / units',
      'Repaints for turnovers',
      'After-hours / weekend jobs'
    ]
  }
];

export default function ServiceSection() {
  const swiperRef = useRef<HTMLDivElement>(null);
  const hoverBgRef = useRef<HTMLDivElement>(null);
  const swiperInstanceRef = useRef<Swiper | null>(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const updateHoverBg = (slideEl: HTMLElement | null) => {
      if (!slideEl || !hoverBgRef.current || !swiperRef.current) return;

      const rect = slideEl.getBoundingClientRect();
      const containerRect = swiperRef.current.getBoundingClientRect();

      hoverBgRef.current.classList.add('active');
      hoverBgRef.current.style.width = `${rect.width}px`;
      hoverBgRef.current.style.height = `${rect.height}px`;
      hoverBgRef.current.style.transform = `translateX(${rect.left - containerRect.left}px) translateY(${rect.top - containerRect.top}px)`;
    };

    const setActiveSlide = (slideEl: HTMLElement | null) => {
      if (!swiperRef.current) return;
      swiperRef.current
        .querySelectorAll<HTMLElement>('.home-service-slide')
        .forEach((el) => el.classList.remove('active'));
      slideEl?.classList.add('active');
      updateHoverBg(slideEl);
    };

    const initActiveFromSwiper = () => {
      if (!swiperRef.current) return;
      const activeSlide = swiperRef.current.querySelector<HTMLElement>(
        '.swiper-slide-active .home-service-slide'
      );
      setActiveSlide(activeSlide);
    };

    const swiper = new Swiper(swiperRef.current, {
      modules: [EffectCoverflow, Navigation, Pagination],
      effect: 'coverflow',
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      keyboard: true,
      spaceBetween: 30,
      slidesPerView: 'auto',
      speed: 300,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false
      },
      breakpoints: {
        480: {
          spaceBetween: 20,
          centeredSlides: true
        }
      },
      simulateTouch: true,
      navigation: {
        nextEl: '.home-service-arrow--next',
        prevEl: '.home-service-arrow--prev'
      },
      pagination: {
        el: '.home-service-pagination',
        clickable: true
      }
    });

    swiperInstanceRef.current = swiper;

    // Init first active slide once Swiper has laid out.
    const initTimeout = window.setTimeout(() => {
      initActiveFromSwiper();
    }, 100);

    // Hover handlers (scoped to this section).
    const onEnter = (event: Event) => {
      const target = event.currentTarget as HTMLElement | null;
      if (!target) return;
      setActiveSlide(target);
    };

    const onLeave = (event: Event) => {
      const target = event.currentTarget as HTMLElement | null;
      target?.classList.remove('active');
      hoverBgRef.current?.classList.remove('active');
    };

    const slideEls = Array.from(
      swiperRef.current.querySelectorAll<HTMLElement>('.home-service-slide')
    );
    slideEls.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    swiper.on('slideChange', () => {
      swiperRef.current
        ?.querySelectorAll<HTMLElement>('.home-service-slide')
        .forEach((el) => el.classList.remove('active'));
    });

    swiper.on('slideChangeTransitionEnd', () => {
      initActiveFromSwiper();
    });

    return () => {
      window.clearTimeout(initTimeout);
      slideEls.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      swiperInstanceRef.current?.destroy(true, true);
      swiperInstanceRef.current = null;
    };
  }, []);

  return (
    <section className="home-service-section">
      <div className="home-service-wrapper">
        <div className="home-service-header">
          <h2 className="home-service-heading">OUR SERVICES</h2>
          <p className="home-service-subtext">
            Professional painting services for residential and commercial properties.
          </p>
        </div>

        <div className="home-service-carousel">
          <div className="home-service-hover-bg" ref={hoverBgRef} />

          <div className="home-service-swiper swiper" ref={swiperRef}>
            <div className="swiper-wrapper">
              {services.map((service) => (
                <div className="swiper-slide" key={service.title}>
                  <div className="home-service-slide">
                    <div className="home-service-slide-header">
                      <span className="home-service-slide-title">{service.title}</span>
                    </div>
                    <p className="home-service-slide-text">{service.text}</p>
                    <ul className="home-service-slide-list">
                      {service.bullets.map((item) => (
                        <li key={item} className="home-service-slide-list-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="home-service-slide-image" aria-hidden="true" />
                  </div>
                </div>
              ))}
            </div>

            <div className="home-service-controls">
              <button
                type="button"
                className="home-service-arrow home-service-arrow--prev"
                aria-label="Previous service"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <button
                type="button"
                className="home-service-arrow home-service-arrow--next"
                aria-label="Next service"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </button>
            </div>

            <div className="home-service-pagination swiper-pagination" />
          </div>
        </div>
      </div>
    </section>
  );
}