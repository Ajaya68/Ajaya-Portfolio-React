import { useState } from "react";
import socialLinks from "../data/socialLinks";
import Reveal from "./Reveal";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = "b85a9274-5b58-44cd-92d8-8c4f5e756d53";

function Contact() {
  const [status, setStatus] = useState({
    type: null, // "success" | "error" | "info"
    message: "",
  });
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      setStatus({
        type: "error",
        message: "Please fill in all fields before submitting.",
      });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setSending(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
      });
      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "✓ Message sent! I'll get back to you soon.",
        });
        form.reset();
      } else {
        setStatus({
          type: "error",
          message: "✕ Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "✕ Something went wrong. Please try again.",
      });
    } finally {
      setSending(false);
    }
  }

  const toastColor =
    status.type === "success"
      ? "#34d399"
      : status.type === "error"
        ? "#f87171"
        : "var(--cyan-2)";

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <Reveal direction="left">
              <h2 className="section-title">Contact me for collaboration</h2>
            </Reveal>
            <Reveal delay={100} direction="left">
              <p className="section-sub">
                Reach out today to discuss your project needs and start
                collaborating on something amazing!
              </p>
            </Reveal>
            <Reveal delay={200} direction="left">
              <div className="socials mt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener"
                    aria-label={social.name}
                  >
                    <i className={`bi bi-${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="col-lg-7">
            <Reveal delay={120} direction="right">
              <form
                id="contactForm"
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="access_key" value={ACCESS_KEY} />
                <input
                  type="hidden"
                  name="subject"
                  value="New Portfolio Contact — Ajaya Mahanty"
                />
                <input type="hidden" name="redirect" value="false" />

                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="Ajaya Mahanty"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="form-control"
                      placeholder="Hi!"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      id="submit-btn"
                      className="btn-primary-cyan w-100 justify-content-center"
                      disabled={sending}
                    >
                      {sending ? "Sending..." : "Submit"}
                    </button>
                  </div>
                </div>

                {status.message && (
                  <div
                    id="formToast"
                    className="form-toast"
                    role="status"
                    aria-live="polite"
                    style={{ color: toastColor }}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
