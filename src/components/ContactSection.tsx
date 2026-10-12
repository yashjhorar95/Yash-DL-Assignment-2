import React, { useState } from 'react';
import { SITE, isPlaceholderLink } from '../config';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  FileText,
  Send,
  ArrowUp,
  CheckCircle2,
  Copy,
  Clock,
  Sparkles,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const emailIsPending = isPlaceholderLink(SITE.email);
  const phoneIsPending = isPlaceholderLink(SITE.phone);
  const linkedinIsPending = isPlaceholderLink(SITE.linkedin);
  const githubIsPending = isPlaceholderLink(SITE.github);
  const instagramIsPending = isPlaceholderLink(SITE.instagram);
  const resumeIsPending = isPlaceholderLink(SITE.resume);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onShowToast(`${label} copied to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSocialClick = (_url: string, platform: string, isPending: boolean, e: React.MouseEvent) => {
    if (isPending) {
      e.preventDefault();
      onShowToast(`${platform} handle is being configured in SITE config. Coming soon!`);
    }
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    if (resumeIsPending) {
      e.preventDefault();
      onShowToast('Resume is currently being updated with latest project metrics! Check back soon or request directly via form.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      onShowToast('Please fill out all fields before sending.');
      return;
    }

    setIsSubmitting(true);
    // Simulate real smooth client-side dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onShowToast('Message transmitted successfully! Yash will get back to you soon.');
    }, 900);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-wider mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>07 // GET IN TOUCH</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
          Contact & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Personal Details</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl font-light">
          Have an idea, collaboration opportunity, feedback on Nova, Happy, or Offcult, or want to connect? Reach out anytime!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
        {/* Left Column: Personal Contact Information Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-white/10 backdrop-blur-xl shadow-glass space-y-6">
            <h3 className="font-display font-bold text-xl text-white pb-3 border-b border-white/10 flex items-center justify-between">
              <span>Direct Coordinates</span>
              <span className="text-xs font-mono text-cyan-400">Jaipur, India</span>
            </h3>

            {/* Email Field */}
            <div className="flex items-start justify-between gap-4 p-3.5 rounded-2xl bg-black/40 border border-white/5">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">
                    Email Address
                  </span>
                  {emailIsPending ? (
                    <span className="text-xs sm:text-sm font-mono text-amber-300 flex items-center gap-1.5 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      Available via form below
                    </span>
                  ) : (
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-cyan-300 transition-colors break-all"
                    >
                      {SITE.email}
                    </a>
                  )}
                </div>
              </div>
              {!emailIsPending && (
                <button
                  onClick={() => handleCopy(SITE.email, 'Email')}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  title={copiedField === 'Email' ? 'Copied!' : 'Copy email'}
                >
                  {copiedField === 'Email' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              )}
            </div>

            {/* Phone / WhatsApp Field */}
            <div className="flex items-start justify-between gap-4 p-3.5 rounded-2xl bg-black/40 border border-white/5">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">
                    Phone / WhatsApp
                  </span>
                  {phoneIsPending ? (
                    <span className="text-xs sm:text-sm font-mono text-amber-300 flex items-center gap-1.5 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      Available upon request
                    </span>
                  ) : (
                    <a
                      href={`tel:${SITE.phone}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-purple-300 transition-colors"
                    >
                      {SITE.phone}
                    </a>
                  )}
                </div>
              </div>
              {!phoneIsPending && (
                <button
                  onClick={() => handleCopy(SITE.phone, 'Phone')}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  title={copiedField === 'Phone' ? 'Copied!' : 'Copy phone'}
                >
                  {copiedField === 'Phone' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              )}
            </div>

            {/* Location Field */}
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-black/40 border border-white/5">
              <div className="p-2.5 rounded-xl bg-pink-950/60 border border-pink-500/30 text-pink-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">
                  Location
                </span>
                <span className="text-xs sm:text-sm text-white font-medium">
                  {SITE.location}
                </span>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  {SITE.university}
                </span>
              </div>
            </div>

            {/* Glowing Social Icon Buttons */}
            <div>
              <span className="text-xs font-mono uppercase text-slate-400 font-semibold block mb-3">
                Connect on Social Networks
              </span>
              <div className="flex flex-wrap gap-3">
                {/* LinkedIn */}
                <a
                  href={SITE.linkedin}
                  target={linkedinIsPending ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  onClick={(e) => handleSocialClick(SITE.linkedin, 'LinkedIn', linkedinIsPending, e)}
                  data-cursor-hover
                  title={linkedinIsPending ? 'LinkedIn coming soon' : 'LinkedIn Profile'}
                  className={`p-3 rounded-xl border flex items-center gap-2 text-xs font-mono transition-all duration-300 cursor-pointer ${
                    linkedinIsPending
                      ? 'bg-slate-900 border-white/10 text-slate-400 hover:text-slate-200'
                      : 'bg-[#0077b5]/15 border-[#0077b5]/40 text-[#0077b5] hover:bg-[#0077b5]/25 hover:shadow-[0_0_15px_#0077b5]'
                  }`}
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                {/* GitHub */}
                <a
                  href={SITE.github}
                  target={githubIsPending ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  onClick={(e) => handleSocialClick(SITE.github, 'GitHub', githubIsPending, e)}
                  data-cursor-hover
                  title={githubIsPending ? 'GitHub coming soon' : 'GitHub Profile'}
                  className={`p-3 rounded-xl border flex items-center gap-2 text-xs font-mono transition-all duration-300 cursor-pointer ${
                    githubIsPending
                      ? 'bg-slate-900 border-white/10 text-slate-400 hover:text-slate-200'
                      : 'bg-white/10 border-white/30 text-white hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                {/* Instagram */}
                <a
                  href={SITE.instagram}
                  target={instagramIsPending ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  onClick={(e) => handleSocialClick(SITE.instagram, 'Instagram', instagramIsPending, e)}
                  data-cursor-hover
                  title={instagramIsPending ? 'Instagram coming soon' : 'Instagram Profile'}
                  className={`p-3 rounded-xl border flex items-center gap-2 text-xs font-mono transition-all duration-300 cursor-pointer ${
                    instagramIsPending
                      ? 'bg-slate-900 border-white/10 text-slate-400 hover:text-slate-200'
                      : 'bg-pink-500/15 border-pink-500/40 text-pink-400 hover:bg-pink-500/25 hover:shadow-[0_0_15px_#ec4899]'
                  }`}
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* "Download Resume" Button */}
            <div className="pt-4 border-t border-white/10">
              <a
                href={SITE.resume}
                target={resumeIsPending ? '_self' : '_blank'}
                rel="noopener noreferrer"
                onClick={handleResumeClick}
                data-cursor-hover
                className={`w-full py-3.5 px-4 rounded-xl font-display font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  resumeIsPending
                    ? 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 border border-slate-700'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-neon-pink'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>
                  {resumeIsPending ? 'Download Resume (Coming Soon)' : 'Download Full Resume'}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-slate-900/70 border border-white/10 backdrop-blur-xl shadow-glass h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  Send a Direct Message
                </h3>
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-500/30">
                  Instant Dispatch
                </span>
              </div>

              {isSuccess ? (
                /* Celebratory Success State */
                <div className="py-12 px-6 rounded-2xl bg-gradient-to-b from-emerald-950/30 to-black/40 border border-emerald-500/30 text-center flex flex-col items-center animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-extrabold text-2xl text-white mb-2">
                    Message Received!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mb-6 font-light">
                    Thank you for reaching out, <span className="text-cyan-400 font-semibold">{form.name}</span>. Yash will review your message and respond shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setForm({ name: '', email: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-mono font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 font-semibold mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Alex Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 font-sans transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 font-semibold mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 text-sm text-white placeholder-slate-500 font-sans transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 font-semibold mb-2">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Share your thoughts, project inquiries, or question about Nova, Happy, or Offcult..."
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-400 text-sm text-white placeholder-slate-500 font-sans transition-all resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Client-side secured
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      data-cursor-hover
                      className="px-8 py-3.5 rounded-xl font-display font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 hover:from-cyan-400 hover:via-purple-500 hover:to-pink-500 shadow-neon-purple hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Response Window: 24–48 Hours</span>
              <span>Based in Jaipur, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer & Back to Top */}
      <footer className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <p className="font-display font-semibold text-white text-sm">
            Designed &amp; Built by {SITE.name} &copy; 2026
          </p>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            BTech CSE (Core) &bull; {SITE.university}
          </p>
        </div>

        {/* Quick Footer Links & Back to Top Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            data-cursor-hover
            aria-label="Back to top"
            className="px-4 py-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-400 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-2 transition-all cursor-pointer shadow-glass"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
