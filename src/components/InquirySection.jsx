import InquiryForm from './InquiryForm.jsx'

export default function InquirySection() {
  return (
    <section id="contact" className="inquiry-section">
      <div className="inquiry-wrapper">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Have a question, want to collaborate, or interested in our consultancy
          services? Send us an inquiry.
        </p>
        <InquiryForm />
      </div>
    </section>
  )
}
