import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { useLang, useContact } from "../context/LanguageContext";

const API = `${process.env.REACT_APP_BACKEND_URL}/api/contact`;

export default function ContactModal() {
  const { t } = useLang();
  const { open, closeContact } = useContact();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", message: "" });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(API, form);
      toast.success(t.contact.success);
      setForm({ name: "", company: "", email: "", phone: "", service: "", message: "" });
      closeContact();
    } catch {
      toast.error(t.contact.error);
    } finally {
      setSending(false);
    }
  };

  const inputCls =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          data-testid="contact-modal-overlay"
          onClick={closeContact}
          className="fixed inset-0 z-[80] bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            data-testid="contact-modal"
            className="relative w-full max-w-lg bg-white rounded-3xl p-7 lg:p-9 my-8 shadow-2xl"
          >
            <button
              data-testid="contact-modal-close-btn"
              onClick={closeContact}
              aria-label="Close"
              className="absolute top-5 right-5 w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-ink hover:border-slate-400 transition"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-display font-extrabold tracking-tight text-ink text-3xl">{t.contact.title}</h3>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">{t.contact.sub}</p>

            <form onSubmit={submit} className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4" data-testid="contact-form">
              <input
                required
                data-testid="contact-form-name-input"
                className={inputCls}
                placeholder={t.contact.name}
                value={form.name}
                onChange={set("name")}
              />
              <input
                data-testid="contact-form-company-input"
                className={inputCls}
                placeholder={t.contact.company}
                value={form.company}
                onChange={set("company")}
              />
              <input
                required
                type="email"
                data-testid="contact-form-email-input"
                className={inputCls}
                placeholder={t.contact.email}
                value={form.email}
                onChange={set("email")}
              />
              <input
                data-testid="contact-form-phone-input"
                className={inputCls}
                placeholder={t.contact.phone}
                value={form.phone}
                onChange={set("phone")}
              />
              <select
                data-testid="contact-form-service-select"
                className={`${inputCls} sm:col-span-2 ${form.service ? "" : "text-slate-400"}`}
                value={form.service}
                onChange={set("service")}
              >
                <option value="" disabled>
                  {t.contact.service}
                </option>
                {t.contact.serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <textarea
                data-testid="contact-form-message-input"
                className={`${inputCls} sm:col-span-2 min-h-[96px] resize-none`}
                placeholder={t.contact.message}
                value={form.message}
                onChange={set("message")}
              />
              <button
                type="submit"
                disabled={sending}
                data-testid="contact-form-submit-btn"
                className="sm:col-span-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-green hover:bg-brand-green2 disabled:opacity-60 text-navy-950 text-sm font-bold px-7 py-4 transition-all duration-300"
              >
                {sending ? t.contact.sending : t.contact.submit}
                {!sending && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
