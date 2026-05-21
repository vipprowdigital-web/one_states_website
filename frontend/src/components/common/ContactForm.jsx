"use client";

import { motion, AnimatePresence } from "framer-motion";
import { GridPattern } from "./Patterns";
import { SectionReveal } from "./SectionReveal";
import { useState, useEffect } from "react";
import { fadeIn, fadeUp, slideLeft } from "./variants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useAppConfigStore } from "@/store/useAppConfigStore";
import Loader from "./Loader";

// ─── Validation ────────────────────────────────────────────────────────────────
const validate = (data) => {
  const errors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  else if (data.name.trim().length < 2) errors.name = "Name is too short";

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Enter a valid email address";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^[+]?[\d\s-]{8,15}$/.test(data.phone.trim())) {
    errors.phone = "Enter a valid phone number";
  }
  return errors;
};

// ─── ANIMATED FLOATING LABEL INPUT ───────────────────────────────────────────
function FloatingInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  textarea = false,
  required = false,
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || (value && value.length > 0);

  const baseClass =
    "w-full bg-transparent border-b-2 pt-6 pb-2 text-primary text-sm font-medium tracking-wide focus:outline-none transition-all duration-300 placeholder-transparent resize-none " +
    (error
      ? "border-b-red-500"
      : focused
        ? "border-b-secondary"
        : "border-b-primary/20 hover:border-b-primary/40");

  return (
    <div className="relative group flex flex-col w-full">
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          value={value}
          required={required}
          placeholder={label}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={onChange}
          className={baseClass}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          required={required}
          placeholder={label}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={onChange}
          className={baseClass}
        />
      )}
      <label
        className={`absolute left-0 font-bold tracking-widest uppercase transition-all duration-300 pointer-events-none ${
          active
            ? "top-0 text-xs text-secondary"
            : "top-5 text-xs text-primary/80"
        }`}
      >
        {label}
      </label>

      {!textarea && (
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-secondary"
          animate={{ width: focused ? "100%" : "0%" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      )}

      {error && (
        <span className="text-red-500 text-[10px] mt-1 font-bold uppercase tracking-wider">
          {error}
        </span>
      )}
    </div>
  );
}

// ─── CONTACT SECTION ─────────────────────────────────────────────────────────
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    services: [],
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fetchedServices, setFetchedServices] = useState([]);
  const { config, isLoading } = useAppConfigStore((state) => state);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/service/public/names`,
          {
            method: "GET",
          },
        );
        if (response.ok) {
          const data = await response.json();
          setFetchedServices(data.data || []);
        }
      } catch (e) {
        console.error("Error while making API call..", e);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const toggleServiceSelection = (item) => {
    setFormData((prev) => {
      const isSelected = prev.services.some((s) => s.title === item.title);
      const updatedServices = isSelected
        ? prev.services.filter((s) => s.title !== item.title)
        : [...prev.services, item];
      return { ...prev, services: updatedServices };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        ...formData,
        type: "Services",
        // services: formData.services,
        services: formData.services.map((item) => item._id),
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          services: [],
        });
      }
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (isLoading) return <Loader />;

  const CONTACT_INFO = [
    {
      icon: <MapPin className="w-4 h-4" strokeWidth={1.8} />,
      label: "Head Office",
      value: config?.companyAddress[0].address ?? "",
    },
    {
      icon: <Phone className="w-4 h-4" strokeWidth={1.8} />,
      label: "Phone",
      value: `+91 ${config?.phoneNumber.replace(/(\d{5})(\d+)/, "$1 $2")}`,
    },
    {
      icon: <Mail className="w-4 h-4" strokeWidth={1.8} />,
      label: "Email",
      value: config?.email,
    },
    // {
    //   icon: <Clock className="w-4 h-4" strokeWidth={1.8} />,
    //   label: "Working Hours",
    //   value: "Mon – Sat: 9:00 AM – 7:00 PM\nSunday: By Appointment",
    // },
  ];

  const socials = [
    // {
    //   name: "Instagram",
    //   link: "",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="1.8"
    //       className="w-5 h-5"
    //     >
    //       <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    //       <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    //       <circle cx="17.5" cy="6.5" r="1.5" />
    //     </svg>
    //   ),
    // },
    // {
    //   name: "Facebook",
    //   link: "",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 24 24"
    //       fill="currentColor"
    //       className="w-5 h-5"
    //     >
    //       <path d="M22 12a10 10 0 10-11.5 9.95v-7.05H8v-2.9h2.5V9.5c0-2.46 1.47-3.82 3.72-3.82 1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.61.76-1.61 1.54v1.85H16l-.4 2.9h-2.2v7.05A10 10 0 0022 12z" />
    //     </svg>
    //   ),
    // },
    {
      name: "LinkedIn",
      link: config?.linkedinLink,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.01 2.5 2.5 0 01.01-5.01zM3 8.98h3.96V21H3V8.98zM9.54 8.98h3.79v1.64h.05c.53-.95 1.82-1.95 3.74-1.95 4 0 4.74 2.63 4.74 6.05V21h-3.96v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21H9.54V8.98z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="relative bg-white overflow-hidden pt-20 md:py-28 py-10"
      id="contact"
    >
      <GridPattern id="contact-grid" color="white" opacity={0.04} />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.06, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute -bottom-40 -left-40 w-150 h-150 rounded-full border border-secondary"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.03, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute -bottom-20 -left-20 w-100 h-100 rounded-full border border-secondary"
      />

      <div className="max-w-7xl mx-auto lg:px-12 relative z-10">
        <SectionReveal className="px-6 mb-7 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.div
                variants={fadeIn}
                custom={0}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-8 h-0.5 bg-secondary" />
                <span className="text-secondary text-[10px] font-black tracking-[0.35em] uppercase">
                  Get In Touch
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={0.1}
                className="text-primary font-black text-3xl md:text-5xl leading-none tracking-tight"
              >
                Let&apos;s Build
                <br />
                <span className="text-secondary">Together.</span>
              </motion.h2>
            </div>
            <motion.p
              variants={fadeUp}
              custom={0.3}
              className="text-primary text-sm leading-relaxed max-w-xs"
            >
              Whether you&apos;re buying, selling, investing or just exploring —
              our experts are ready to guide you every step of the way.
            </motion.p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-primary/30">
          {/* Left Panel */}
          <SectionReveal className="lg:col-span-2 bg-white md:bg-primary relative overflow-hidden">
            <div className="relative z-10 p-7 md:p-10 lg:p-12 h-full flex flex-col justify-between">
              <div>
                <motion.p
                  variants={fadeUp}
                  custom={0}
                  className="text-primary md:text-white text-xs font-black tracking-[0.35em] uppercase mb-8"
                >
                  Contact Information
                </motion.p>

                <div className="flex flex-col gap-8">
                  {CONTACT_INFO.map((item, i) => (
                    <motion.div
                      key={item.label}
                      variants={slideLeft}
                      custom={i * 0.12}
                      className="flex gap-4 items-start group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center text-primary md:text-white shrink-0 border rounded-full transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-secondary text-xs font-black tracking-[0.25em] uppercase mb-1">
                          {item.label}
                        </p>
                        <p className="text-primary md:text-white/80 text-sm font-semibold leading-relaxed whitespace-pre-line">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div variants={fadeUp} custom={0.5} className="mt-12">
                <p className="md:text-white text-primary text-xs font-black tracking-[0.25em] uppercase mb-4">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <motion.a
                      key={s.name}
                      href={s.link}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 bg-secondary md:bg-white flex items-center justify-center text-white md:text-primary text-[10px] font-black tracking-wider rounded-full uppercase transition-colors duration-300"
                      target="_blank"
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </SectionReveal>

          {/* Right Panel - Form Layout */}
          <SectionReveal className="lg:col-span-3 relative">
            <div className="p-7 md:p-10 lg:p-14">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center justify-center h-full min-h-105 gap-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded-full"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ee7124"
                        strokeWidth="2.5"
                        className="w-10 h-10"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </motion.div>
                    <div>
                      <h3 className="text-primary font-black text-3xl tracking-tight mb-3">
                        Message Sent!
                      </h3>
                      <p className="text-primary/60 text-sm leading-relaxed max-w-xs mx-auto">
                        Our team will get back to you within 24 hours.
                        We&apos;re excited to help you find your perfect
                        property.
                      </p>
                    </div>
                    {/* <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSubmitted(false)}
                      className="border border-primary/20 text-primary/60 text-xs font-bold tracking-widest uppercase px-6 py-3 hover:border-secondary hover:text-secondary transition-colors duration-300"
                    >
                      Send Another
                    </motion.button> */}
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                  >
                    <motion.p
                      variants={fadeIn}
                      custom={0}
                      className="text-primary/70 text-sm font-black tracking-[0.35em] uppercase mb-10"
                    >
                      Send a Message
                    </motion.p>

                    <motion.div
                      variants={fadeUp}
                      custom={0.1}
                      className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
                    >
                      <FloatingInput
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                        required
                      />
                      <FloatingInput
                        label="Email Address"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        required
                      />
                    </motion.div>

                    <motion.div
                      variants={fadeUp}
                      custom={0.2}
                      className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
                    >
                      <FloatingInput
                        label="Phone Number"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        error={errors.phone}
                        required
                      />
                    </motion.div>

                    {/* Dynamic Fetched Service Chips */}
                    {!loading && fetchedServices.length > 0 && (
                      <motion.div
                        variants={fadeUp}
                        custom={0.3}
                        className="mb-8"
                      >
                        <p className="text-primary/80 text-xs font-black tracking-[0.3em] uppercase mb-4">
                          I&apos;m interested in
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {fetchedServices.map((item) => {
                            const isSelected = formData.services.some(
                              (s) => s.title === item.title,
                            );
                            return (
                              <motion.button
                                key={item.title}
                                type="button"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => toggleServiceSelection(item)}
                                className={`px-4 py-2 text-xs font-bold tracking-wider uppercase border transition-all duration-300 ${
                                  isSelected
                                    ? "bg-secondary border-secondary text-white"
                                    : "bg-primary/10 border-white/20 text-primary/80 hover:border-primary hover:text-primary"
                                }`}
                              >
                                {item.title}
                              </motion.button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}

                    <motion.div
                      variants={fadeUp}
                      custom={0.4}
                      className="mb-10"
                    >
                      <FloatingInput
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        textarea
                      />
                    </motion.div>

                    <motion.div variants={fadeUp} custom={0.5}>
                      <motion.button
                        type="submit"
                        disabled={submitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="relative bg-secondary text-white w-full py-4 font-black text-sm tracking-widest uppercase overflow-hidden group disabled:opacity-70"
                      >
                        <motion.div
                          className="absolute inset-0 bg-secondary-light"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.4 }}
                        />
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          {submitting ? (
                            <>
                              <svg
                                className="animate-spin w-4 h-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                              >
                                <path d="M21 12a9 9 0 11-6.219-8.56" />
                              </svg>
                              Sending…
                            </>
                          ) : (
                            <>
                              Send Message
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                className="w-4 h-4"
                              >
                                <path d="M7 17L17 7M17 7H7M17 7v10" />
                              </svg>
                            </>
                          )}
                        </span>
                      </motion.button>
                      <p className="text-primary text-xs text-center mt-4 tracking-wide">
                        We respect your privacy. No spam, ever.
                      </p>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { GridPattern } from "./Patterns";
// import { SectionReveal } from "./SectionReveal";
// import { useState, useEffect } from "react";
// import { fadeIn, fadeUp, slideLeft } from "./variants";
// import { MapPin, Phone, Mail, Clock } from "lucide-react";

// const CONTACT_INFO = [
//   {
//     icon: <MapPin className="w-4 h-4" strokeWidth={1.8} />,
//     label: "Head Office",
//     value: "14, Prestige Tower, MG Road,\nBengaluru — 560001",
//   },
//   {
//     icon: <Phone className="w-4 h-4" strokeWidth={1.8} />,
//     label: "Phone",
//     value: "+91 98765 43210",
//   },
//   {
//     icon: <Mail className="w-4 h-4" strokeWidth={1.8} />,
//     label: "Email",
//     value: "hello@skbuilders.in",
//   },
//   {
//     icon: <Clock className="w-4 h-4" strokeWidth={1.8} />,
//     label: "Working Hours",
//     value: "Mon – Sat: 9:00 AM – 7:00 PM\nSunday: By Appointment",
//   },
// ];

// // const CONTACT_INFO = [
// //   {
// //     icon: (
// //       <svg
// //         viewBox="0 0 24 24"
// //         fill="none"
// //         stroke="currentColor"
// //         strokeWidth="1.8"
// //         className="w-5 h-5"
// //       >
// //         <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
// //         <circle cx="12" cy="10" r="3" />
// //       </svg>
// //     ),
// //     label: "Head Office",
// //     value: "14, Prestige Tower, MG Road,\nBengaluru — 560001",
// //   },
// //   {
// //     icon: (
// //       <svg
// //         viewBox="0 0 24 24"
// //         fill="none"
// //         stroke="currentColor"
// //         strokeWidth="1.8"
// //         className="w-5 h-5"
// //       >
// //         <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.13 1.17 2 2 0 012.11 0h3a2 2 0 012 1.72c.13 1.01.36 2 .7 2.95a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.13-1.27a2 2 0 012.11-.45c.95.34 1.94.57 2.95.7A2 2 0 0122 16.92z" />
// //       </svg>
// //     ),
// //     label: "Phone",
// //     value: "+91 98765 43210",
// //   },
// //   {
// //     icon: (
// //       <svg
// //         viewBox="0 0 24 24"
// //         fill="none"
// //         stroke="currentColor"
// //         strokeWidth="1.8"
// //         className="w-5 h-5"
// //       >
// //         <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
// //         <polyline points="22,6 12,13 2,6" />
// //       </svg>
// //     ),
// //     label: "Email",
// //     value: "hello@skbuilders.in",
// //   },
// //   {
// //     icon: (
// //       <svg
// //         viewBox="0 0 24 24"
// //         fill="none"
// //         stroke="currentColor"
// //         strokeWidth="1.8"
// //         className="w-5 h-5"
// //       >
// //         <circle cx="12" cy="12" r="10" />
// //         <polyline points="12 6 12 12 16 14" />
// //       </svg>
// //     ),
// //     label: "Working Hours",
// //     value: "Mon – Sat: 9:00 AM – 7:00 PM\nSunday: By Appointment",
// //   },
// // ];

// const INTERESTS = [
//   "Residential Buy",
//   "Residential Rent",
//   "Commercial Buy",
//   "Commercial Lease",
//   "Investment Advisory",
//   "Property Management",
// ];

// // ─── Validation ────────────────────────────────────────────────────────────────
// const validate = (data) => {
//   const errors = {};
//   if (!data.name.trim()) errors.name = "Name is required";
//   else if (data.name.trim().length < 2) errors.name = "Name is too short";
//   if (!data.phone.trim()) errors.phone = "Phone number is required";
//   else if (!/^[+]?[\d\s-]{8,15}$/.test(data.phone.trim()))
//     errors.phone = "Enter a valid phone number";
//   if (!data.serviceName) errors.serviceName = "Please select a course";
//   return errors;
// };

// // ─── ANIMATED FLOATING LABEL INPUT ───────────────────────────────────────────

// function FloatingInput({
//   label,
//   type = "text",
//   name,
//   textarea = false,
//   required = false,
// }) {
//   const [focused, setFocused] = useState(false);
//   const [value, setValue] = useState("");
//   const active = focused || value.length > 0;

//   const baseClass =
//     "w-full bg-transparent border-b-2 border-primary/20 pt-6 pb-2 text-primary text-sm font-medium tracking-wide focus:outline-none transition-all duration-300 placeholder-transparent resize-none " +
//     (focused ? "border-b-secondary" : "hover:border-b-primary/40");

//   return (
//     <div className="relative group">
//       {textarea ? (
//         <textarea
//           name={name}
//           rows={4}
//           value={value}
//           required={required}
//           placeholder={label}
//           onFocus={() => setFocused(true)}
//           onBlur={() => setFocused(false)}
//           onChange={(e) => setValue(e.target.value)}
//           className={baseClass}
//         />
//       ) : (
//         <input
//           type={type}
//           name={name}
//           value={value}
//           required={required}
//           placeholder={label}
//           onFocus={() => setFocused(true)}
//           onBlur={() => setFocused(false)}
//           onChange={(e) => setValue(e.target.value)}
//           className={baseClass}
//         />
//       )}
//       <label
//         className={`absolute left-0 font-bold tracking-widest uppercase transition-all duration-300 pointer-events-none ${
//           active
//             ? "top-0 text-xs text-secondary"
//             : "top-5 text-xs text-primary/80"
//         }`}
//       >
//         {label}
//       </label>
//       {/* animated underline */}
//       {/* <motion.div
//         className="absolute bottom-0 left-0 h-0.5 bg-secondary"
//         animate={{ width: focused ? "100%" : "0%" }}
//         transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//       /> */}
//       {/* animated underline */}
//       {!textarea && (
//         <motion.div
//           className="absolute bottom-0 left-0 h-0.5 bg-secondary"
//           animate={{ width: focused ? "100%" : "0%" }}
//           transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//         />
//       )}
//     </div>
//   );
// }

// const socials = [
//   {
//     name: "Instagram",
//     link: "",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         className="w-5 h-5"
//       >
//         <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//         <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
//         <circle cx="17.5" cy="6.5" r="1.5" />
//       </svg>
//     ),
//   },
//   {
//     name: "Facebook",
//     link: "",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="currentColor"
//         className="w-5 h-5"
//       >
//         <path d="M22 12a10 10 0 10-11.5 9.95v-7.05H8v-2.9h2.5V9.5c0-2.46 1.47-3.82 3.72-3.82 1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.61.76-1.61 1.54v1.85H16l-.4 2.9h-2.2v7.05A10 10 0 0022 12z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Youtube",
//     link: "",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="currentColor"
//         className="w-5 h-5"
//       >
//         <path d="M23.5 6.2a2.9 2.9 0 00-2-2C19.5 4 12 4 12 4s-7.5 0-9.5.2a2.9 2.9 0 00-2 2C0 8.2 0 12 0 12s0 3.8.5 5.8a2.9 2.9 0 002 2C4.5 20 12 20 12 20s7.5 0 9.5-.2a2.9 2.9 0 002-2c.5-2 .5-5.8.5-5.8s0-3.8-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
//       </svg>
//     ),
//   },
// ];

// // ─── CONTACT SECTION ─────────────────────────────────────────────────────────

// export default function ContactForm() {
//   const [selected, setSelected] = useState([]);
//   const [submitted, setSubmitted] = useState(false);
//   const [submitting, setSubmitting] = useState(false);

//   const [loading, setLoading] = useState(false);
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const response = await fetch(`${baseUrl}/service/public/names`, {
//           method: "GET",
//         });
//         if (response.ok) {
//           const data = await response.json();
//           // console.log("Data from services: ", data);
//           setServices(data.data);
//         } else {
//           // console.error("Error fetching services...");
//         }
//       } catch (e) {
//         console.error(e);
//         // console.error("Error while making API call..", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchServices();
//   }, []);

//   const toggleInterest = (item) =>
//     setSelected((prev) =>
//       prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
//     );

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     setTimeout(() => {
//       setSubmitting(false);
//       setSubmitted(true);
//     }, 1800);
//   };

//   return (
//     <section
//       className="relative bg-white overflow-hidden md:py-28 py-10"
//       id="contact"
//     >
//       <GridPattern id="contact-grid" color="white" opacity={0.04} />

//       {/* Decorative accent */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.5 }}
//         whileInView={{ opacity: 0.06, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1.5 }}
//         className="absolute -bottom-40 -left-40 w-150 h-150 rounded-full border border-secondary"
//       />
//       <motion.div
//         initial={{ opacity: 0, scale: 0.5 }}
//         whileInView={{ opacity: 0.03, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1.5, delay: 0.2 }}
//         className="absolute -bottom-20 -left-20 w-100 h-100 rounded-full border border-secondary"
//       />

//       <div className="max-w-7xl mx-auto lg:px-12 relative z-10">
//         {/* Header */}
//         <SectionReveal className="px-6 mb-7 md:mb-16">
//           <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
//             <div>
//               <motion.div
//                 variants={fadeIn}
//                 custom={0}
//                 className="flex items-center gap-3 mb-4"
//               >
//                 <div className="w-8 h-0.5 bg-secondary" />
//                 <span className="text-secondary text-[10px] font-black tracking-[0.35em] uppercase">
//                   Get In Touch
//                 </span>
//               </motion.div>
//               <motion.h2
//                 variants={fadeUp}
//                 custom={0.1}
//                 className="text-primary font-black text-3xl md:text-5xl leading-none tracking-tight"
//               >
//                 Let&apos;s Build
//                 <br />
//                 <span className="text-secondary">Together.</span>
//               </motion.h2>
//             </div>
//             <motion.p
//               variants={fadeUp}
//               custom={0.3}
//               className="text-primary text-sm leading-relaxed max-w-xs"
//             >
//               Whether you&apos;re buying, selling, investing or just exploring —
//               our experts are ready to guide you every step of the way.
//             </motion.p>
//           </div>
//         </SectionReveal>

//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-primary/30">
//           {/* ── LEFT PANEL — Contact Info ──────────────────────────────── */}
//           <SectionReveal className="lg:col-span-2 bg-primary relative overflow-hidden">
//             <div className="relative z-10 p-7 md:p-10 lg:p-12 h-full flex flex-col justify-between">
//               <div>
//                 <motion.p
//                   variants={fadeUp}
//                   custom={0}
//                   className="text-white text-xs font-black tracking-[0.35em] uppercase mb-8"
//                 >
//                   Contact Information
//                 </motion.p>

//                 <div className="flex flex-col gap-8">
//                   {CONTACT_INFO.map((item, i) => (
//                     <motion.div
//                       key={item.label}
//                       variants={slideLeft}
//                       custom={i * 0.12}
//                       className="flex gap-4 items-start group"
//                     >
//                       <div className="w-10 h-10 flex items-center justify-center text-white shrink-0 border rounded-full transition-colors duration-300">
//                         {item.icon}
//                       </div>
//                       <div>
//                         <p className="text-secondary text-xs font-black tracking-[0.25em] uppercase mb-1">
//                           {item.label}
//                         </p>
//                         <p className="text-white/80 text-sm font-semibold leading-relaxed whitespace-pre-line">
//                           {item.value}
//                         </p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               {/* Social links */}
//               <motion.div variants={fadeUp} custom={0.5} className="mt-12">
//                 <p className="text-white text-xs font-black tracking-[0.25em] uppercase mb-4">
//                   Follow Us
//                 </p>
//                 <div className="flex gap-3">
//                   {socials.map((s) => (
//                     <motion.a
//                       key={s.name}
//                       href={s.link}
//                       whileHover={{
//                         scale: 1.1,
//                       }}
//                       whileTap={{ scale: 0.95 }}
//                       className="w-9 h-9 bg-white flex items-center justify-center text-primary text-[10px] font-black tracking-wider rounded-full uppercase transition-colors duration-300"
//                     >
//                       {s.icon}
//                     </motion.a>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </SectionReveal>

//           {/* ── RIGHT PANEL — Form ────────────────────────────────────── */}
//           <SectionReveal className="lg:col-span-3 relative">
//             <div className="p-7 md:p-10 lg:p-14">
//               <AnimatePresence mode="wait">
//                 {submitted ? (
//                   <motion.div
//                     key="success"
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//                     className="flex flex-col items-center justify-center h-full min-h-105 gap-6 text-center"
//                   >
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{
//                         delay: 0.2,
//                         type: "spring",
//                         stiffness: 200,
//                       }}
//                       className="w-20 h-20 bg-secondary flex items-center justify-center"
//                     >
//                       <svg
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="white"
//                         strokeWidth="2.5"
//                         className="w-10 h-10"
//                       >
//                         <polyline points="20 6 9 17 4 12" />
//                       </svg>
//                     </motion.div>
//                     <div>
//                       <h3 className="text-white font-black text-3xl tracking-tight mb-3">
//                         Message Received!
//                       </h3>
//                       <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto">
//                         Our team will get back to you within 24 hours.
//                         We&apos;re excited to help you find your perfect
//                         property.
//                       </p>
//                     </div>
//                     <motion.button
//                       whileHover={{ scale: 1.03 }}
//                       whileTap={{ scale: 0.97 }}
//                       onClick={() => setSubmitted(false)}
//                       className="border border-white/20 text-white/60 text-xs font-bold tracking-widest uppercase px-6 py-3 hover:border-secondary hover:text-secondary transition-colors duration-300"
//                     >
//                       Send Another
//                     </motion.button>
//                   </motion.div>
//                 ) : (
//                   <motion.form
//                     key="form"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     onSubmit={handleSubmit}
//                   >
//                     <motion.p
//                       variants={fadeIn}
//                       custom={0}
//                       className="text-primary/40 text-xs font-black tracking-[0.35em] uppercase mb-10"
//                     >
//                       Send a Message
//                     </motion.p>

//                     {/* Name + Email */}
//                     <motion.div
//                       variants={fadeUp}
//                       custom={0.1}
//                       className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
//                     >
//                       <FloatingInput label="Full Name" name="name" required />
//                       <FloatingInput
//                         label="Email Address"
//                         type="email"
//                         name="email"
//                         required
//                       />
//                     </motion.div>

//                     {/* Phone + Subject */}
//                     <motion.div
//                       variants={fadeUp}
//                       custom={0.2}
//                       className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
//                     >
//                       <FloatingInput
//                         label="Phone Number"
//                         type="tel"
//                         name="phone"
//                       />
//                     </motion.div>

//                     {/* Interest chips */}
//                     <motion.div variants={fadeUp} custom={0.3} className="mb-8">
//                       <p className="text-primary/80 text-xs font-black tracking-[0.3em] uppercase mb-4">
//                         I&apos;m interested in
//                       </p>
//                       <div className="flex flex-wrap gap-2">
//                         {services.map((item) => (
//                           <motion.button
//                             key={item.title}
//                             type="button"
//                             whileHover={{ scale: 1.03 }}
//                             whileTap={{ scale: 0.97 }}
//                             onClick={() => toggleInterest(item)}
//                             className={`px-4 py-2 text-xs font-bold tracking-wider uppercase border transition-all duration-300 ${
//                               selected.includes(item)
//                                 ? "bg-secondary border-secondary text-white"
//                                 : "bg-primary/10 border-white/20 text-primary/80 hover:border-primary hover:text-primary"
//                             }`}
//                           >
//                             {item.title}
//                           </motion.button>
//                         ))}
//                       </div>
//                     </motion.div>

//                     {/* Message */}
//                     <motion.div
//                       variants={fadeUp}
//                       custom={0.4}
//                       className="mb-10"
//                     >
//                       <FloatingInput
//                         label="Your Message"
//                         name="message"
//                         textarea
//                       />
//                     </motion.div>

//                     {/* Submit */}
//                     <motion.div variants={fadeUp} custom={0.5}>
//                       <motion.button
//                         type="submit"
//                         disabled={submitting}
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.97 }}
//                         className="relative bg-secondary text-white w-full py-4 font-black text-sm tracking-widest uppercase overflow-hidden group disabled:opacity-70"
//                       >
//                         {/* Hover fill */}
//                         <motion.div
//                           className="absolute inset-0 bg-secondary-light"
//                           initial={{ x: "-100%" }}
//                           whileHover={{ x: 0 }}
//                           transition={{ duration: 0.4 }}
//                         />
//                         <span className="relative z-10 flex items-center justify-center gap-3">
//                           {submitting ? (
//                             <>
//                               <svg
//                                 className="animate-spin w-4 h-4"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2.5"
//                               >
//                                 <path d="M21 12a9 9 0 11-6.219-8.56" />
//                               </svg>
//                               Sending…
//                             </>
//                           ) : (
//                             <>
//                               Send Message
//                               <svg
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2.5"
//                                 className="w-4 h-4"
//                               >
//                                 <path d="M7 17L17 7M17 7H7M17 7v10" />
//                               </svg>
//                             </>
//                           )}
//                         </span>
//                       </motion.button>
//                       <p className="text-primary text-xs text-center mt-4 tracking-wide">
//                         We respect your privacy. No spam, ever.
//                       </p>
//                     </motion.div>
//                   </motion.form>
//                 )}
//               </AnimatePresence>
//             </div>
//           </SectionReveal>
//         </div>
//       </div>
//     </section>
//   );
// }
