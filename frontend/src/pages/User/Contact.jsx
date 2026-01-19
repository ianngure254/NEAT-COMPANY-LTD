import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Instagram, Facebook } from "lucide-react";
export default function Contact() {
  return (
    <section className="min-h-screen bg-linear-to-br from-orange-50 via-lime-50 to-emerald-50 px-4 py-40">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
            Get in Touch
          </h1>
          <p className="text-emerald-700 max-w-2xl mx-auto">
            Questions about our fresh juices, bulk orders, or partnerships?
            We’d love to hear from you 🍊
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <InfoCard
              icon={<MapPin />}
              title="Visit Us"
              text="Downtown Fresh Market, Nairobi"
            />
            <InfoCard
              icon={<Phone />}
              title="Call Us"
              text="+254 7XX XXX XXX"
            />
            <InfoCard
              icon={<Mail />}
              title="Email"
              text="hello@freshjuice.co"
            />
            <InfoCard
              icon={<Clock />}
              title="Working Hours"
              text="Mon – Sat: 8am – 7pm"
            />

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-emerald-800 mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <SocialIcon icon={<Instagram />} />
                <SocialIcon icon={<Facebook />} />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg space-y-6"
          >
            <h3 className="text-2xl font-semibold text-emerald-800">
              Send Us a Message
            </h3>

            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" type="email" />
            <Textarea placeholder="Your message or order details…" />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold py-3 rounded-xl hover:bg-emerald-700 transition"
            >
              Send Message <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md flex items-center gap-4">
      <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl">
        {icon}
      </div>
      <div>
        <p className="text-sm text-emerald-600">{title}</p>
        <p className="font-medium text-emerald-800">{text}</p>
      </div>
    </div>
  );
}

function Input({ placeholder, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border border-emerald-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
    />
  );
}

function Textarea({ placeholder }) {
  return (
    <textarea
      rows="5"
      placeholder={placeholder}
      className="w-full border border-emerald-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
    />
  );
}

function SocialIcon({ icon }) {
  return (
    <button className="p-4 bg-emerald-100 text-emerald-700 rounded-xl hover:bg-emerald-200 transition">
      {icon}
    </button>
  );
}
