export default function ServicesStyles() {
  return (
    <style>{`
      body,
      .srv-page {
        font-family: Raleway, sans-serif;
      }

      .srv-reveal {
        opacity: 0;
        transform: translateY(var(--y, 30px));
        transition:
          opacity .7s ease var(--delay, 0ms),
          transform .7s ease var(--delay, 0ms);
      }

      .srv-reveal[data-vis="1"] {
        opacity: 1;
        transform: translateY(0);
      }

      @keyframes srvHeroZoom {
        from {
          transform: scale(1);
        }
        to {
          transform: scale(1.06);
        }
      }

      .srv-hero-bg {
        animation: srvHeroZoom 12s ease-in-out infinite alternate;
      }

      @keyframes srvSpin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .srv-spin {
        animation: srvSpin 24s linear infinite;
      }

      .srv-spin-r {
        animation: srvSpin 18s linear infinite reverse;
      }

      .srv-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 28px;
      }

      @media (max-width: 1024px) {
        .srv-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 640px) {
        .srv-grid {
          grid-template-columns: 1fr;
        }

        .srv-hero-h1 {
          font-size: 3rem !important;
        }

        .srv-card {
          text-align: left !important;
          padding: 32px 24px !important;
        }

        .srv-card-icon {
          margin-left: 0 !important;
          margin-right: auto !important;
        }

        .srv-card-tags {
          justify-content: flex-start !important;
        }
      }
    `}</style>
  );
}