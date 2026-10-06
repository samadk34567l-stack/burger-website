import React from 'react';
import { Rocket, Leaf, ShieldCheck } from 'lucide-react';
import './Features.css';

const Features = () => {
  const featuresList = [
    { id: 1, icon: <Rocket size={40} />, title: "Lightning Fast Delivery", desc: "Your food delivered hot and fresh in under 30 minutes." },
    { id: 2, icon: <Leaf size={40} />, title: "100% Fresh Ingredients", desc: "We use only organic, locally sourced premium ingredients." },
    { id: 3, icon: <ShieldCheck size={40} />, title: "Secure Payments", desc: "Multiple payment options with 256-bit secure encryption." }
  ];

  return (
    <section className="features-sect">
      <div className="features-container">
        {featuresList.map(feature => (
          <div className="feature-card" key={feature.id}>
            <div className="icon-box">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
