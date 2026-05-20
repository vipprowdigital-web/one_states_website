import Reveal from "./Reveal";

export default function AboutDesc() {
  return (
    <section className="relative overflow-hidden bg-white pt-30 pb-10 text-left md:py-35 md:text-center">
      <div className="md:max-w-5xl px-6 mx-auto">
        <Reveal delay={90}>
          <h1 className="mb-7 text-3xl font-extrabold leading-tighter tracking-[-0.02em] text-primary sm:text-3xl md:text-5xl">
            Building Hospitality Growth Through
            <br />
            <span className="text-secondary not-italic">
              Strategic Partnerships & Expansion Expertise
            </span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="text-base font-medium leading-8 text-(--primary)/65 md:mx-auto md:text-lg">
            We work closely with hospitality brands, hotel owners, developers,
            investors and commercial stakeholders to create scalable growth
            opportunities through strategic partnerships, market-focused
            advisory and long-term business alignment. With over 22+ years of
            leadership experience across hospitality, FMCG and large-scale
            business operations, OneStates Hospitality brings a strong
            understanding of expansion strategy, negotiations, relationship
            management and execution-focused growth.
          </p>
        </Reveal>
        <br />
        <Reveal delay={180}>
          <p className="text-base font-medium leading-8 text-(--primary)/65 md:mx-auto md:text-lg">
            Our leadership experience across organizations like PepsiCo, Marico,
            Himalaya and Hindustan Unilever has helped shape a practical and
            result-oriented approach towards business expansion and strategic
            consulting. Over the years, we have been associated with hospitality
            collaborations and strategic transactions, including projects with
            Espire Hospitality and Ananta Hotels and Resorts for hotel and
            destination resort developments. At OneStates Hospitality, we
            believe successful growth is built through trust, strong
            relationships, market understanding and long-term vision. Our focus
            is not only on facilitating transactions but on creating meaningful
            partnerships that deliver sustainable business value.
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="mb-7 mt-20 text-3xl font-extrabold leading-tighter tracking-[-0.02em] text-primary sm:text-3xl md:text-5xl">
            Our <span className="text-secondary not-italic">Mission</span>
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p className="text-base font-medium leading-8 text-(--primary)/65 md:mx-auto md:text-lg">
            To help hospitality brands, developers, investors and commercial
            businesses achieve sustainable growth through strategic
            partnerships, expansion opportunities and relationship-driven
            consulting solutions. We aim to create long-term business value by
            connecting the right people, projects and opportunities with
            practical execution and market-focused strategies.
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="mb-7 mt-20 text-3xl font-extrabold leading-tighter tracking-[-0.02em] text-primary sm:text-3xl md:text-5xl">
            Our <span className="text-secondary not-italic">Vision</span>
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p className="text-base font-medium leading-8 text-(--primary)/65 md:mx-auto md:text-lg">
            To become a trusted growth partner for hospitality brands,
            developers and investors by creating strategic collaborations and
            scalable business opportunities across India’s evolving hospitality
            and commercial sectors.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
