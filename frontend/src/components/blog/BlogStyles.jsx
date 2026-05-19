export default function BlogStyles() {
  return (
    <style>{`
      .blg-page,
      .blg-page * {
        font-family: Raleway, sans-serif;
      }

      .blg-reveal {
        opacity: 0;
        transform: translateY(var(--y, 28px));
        transition:
          opacity .65s ease var(--d, 0ms),
          transform .65s ease var(--d, 0ms);
      }

      .blg-reveal[data-vis="1"] {
        opacity: 1;
        transform: translateY(0);
      }

      @keyframes blgSpin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .blg-spin {
        animation: blgSpin 22s linear infinite;
      }

      .blg-spin-r {
        animation: blgSpin 18s linear infinite reverse;
      }

      @keyframes ticker {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }

      .blg-ticker-inner {
        animation: ticker 28s linear infinite;
      }

      .blg-ticker-inner:hover {
        animation-play-state: paused;
      }

      .feat-grid {
        grid-template-columns: 1fr 1fr;
      }

      .blg-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 28px;
      }

      .cat-pill {
        cursor: pointer;
        transition: all .25s ease;
      }

      .cat-pill:hover {
        border-color: #ee7124 !important;
        color: #ee7124 !important;
      }

      .cat-pill.active {
        background: #232627 !important;
        color: #fff !important;
        border-color: #232627 !important;
      }

      .nl-input:focus {
        outline: none;
        border-color: #ee7124 !important;
      }

      @media (max-width: 1024px) {
        .blg-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 768px) {
        .feat-grid {
          grid-template-columns: 1fr;
        }

        .nl-grid {
          grid-template-columns: 1fr !important;
        }
      }

      @media (max-width: 640px) {
        .blg-grid {
          grid-template-columns: 1fr;
        }

        .blog-hero-title {
          font-size: 2.7rem !important;
        }

        .blog-featured-content {
          padding: 32px 24px !important;
        }

        .blog-newsletter {
          padding: 48px 24px !important;
          border-radius: 22px !important;
        }
      }
    `}</style>
  );
}