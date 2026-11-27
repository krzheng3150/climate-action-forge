import InquiryForm from './InquiryForm.jsx'

export default function InquirySection() {
  return (
    <section id="contact" className="inquiry-section">
      <div className="inquiry-wrapper">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Want to work together? Drop us a line.
        </p>
        <InquiryForm />
      </div>
    </section>
  )
}
