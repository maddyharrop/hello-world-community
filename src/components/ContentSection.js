import React from 'react';

function ContentSection({ title, content }) {
  return (
    <section className="ContentSection">
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
}

export default ContentSection;
