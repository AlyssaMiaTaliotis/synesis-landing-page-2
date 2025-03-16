export default function Home() {
  return (
    <div className="bg-white">
      <div className="whitepaper-container">
        {/* Title Section */}
        <header className="mb-12 pt-8">
          <h1 className="whitepaper-title">Synesis</h1>
          <p className="whitepaper-subtitle">
            AI-powered medical intelligence delivering real-time treatment insights for physicians.
          </p>
        </header>

        {/* Abstract/Introduction */}
        <section className="whitepaper-section">
          <p className="whitepaper-text">
            Synesis provides personalized, cross-specialty treatment optimization that adapts to individual patients. 
            Unlike traditional systems that overwhelm doctors with generic alerts, Synesis delivers actionable, 
            context-aware insights that enhance clinical decision-making and improve patient outcomes.
          </p>
        </section>

        {/* Key Features */}
        <section className="whitepaper-section">
          <h2 className="whitepaper-section-title">Key Features</h2>
          
          <div className="whitepaper-feature">
            <h3 className="text-lg font-semibold mb-2">Personalized Insights</h3>
            <p>Synesis delivers tailored treatment recommendations based on comprehensive patient data analysis, 
            considering individual medical history, genetic factors, and response patterns to create highly 
            personalized care plans.</p>
          </div>
          
          <div className="whitepaper-feature">
            <h3 className="text-lg font-semibold mb-2">Cross-Specialty Integration</h3>
            <p>Our system seamlessly integrates across medical specialties, breaking down traditional silos 
            to provide a holistic view of patient care. This integration ensures that recommendations account for 
            all aspects of a patient&apos;s health profile.</p>
          </div>
          
          <div className="whitepaper-feature">
            <h3 className="text-lg font-semibold mb-2">Adaptive Learning</h3>
            <p>Through continuous refinement of recommendations based on outcomes and new medical research, 
            Synesis evolves with each patient interaction. The system incorporates the latest evidence-based 
            practices to maintain clinical relevance.</p>
          </div>
        </section>

        {/* The Advantage */}
        <section className="whitepaper-section">
          <h2 className="whitepaper-section-title">The Advantage</h2>
          <p className="whitepaper-text">
            Synesis represents a paradigm shift in clinical decision support. By focusing on actionable, 
            context-aware insights rather than generic alerts, the system reduces alert fatigue and increases 
            clinical utility. Physicians receive precisely the information they need at the point of care, 
            enhancing their ability to make informed decisions quickly and confidently.
          </p>
          <p className="whitepaper-text">
            The adaptive nature of Synesis means that it continuously improves its recommendations based on 
            real-world outcomes, creating a virtuous cycle of enhancement that benefits both providers and patients.
          </p>
        </section>

        {/* Team */}
        <section className="whitepaper-section">
          <h2 className="whitepaper-section-title">Research Team</h2>
          <p className="whitepaper-author">
            <strong>Alyssa Mia Taliotis</strong>
          </p>
          <p className="text-center mb-8">AI, ML Research at Harvard SEAS & MIT</p>
        </section>

        {/* Contact */}
        <section className="whitepaper-section">
          <h2 className="whitepaper-section-title">Contact Information</h2>
          <p className="text-center">
            For more information about Synesis and its applications in clinical settings, 
            please contact our research team via email.
          </p>
        </section>

        {/* Footer */}
        <footer className="whitepaper-footer">
          <p>&copy; 2025 Synesis</p>
        </footer>
      </div>
    </div>
  );
}
