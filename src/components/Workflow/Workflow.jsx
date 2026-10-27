const steps = [
  [
    'Understand the problem',
    'Start with the people, the workflow, and what needs to get better. Work through the requirements before choosing the tools.',
  ],
  [
    'Build the connected pieces',
    'Design the interface, data model, APIs, and integrations together. Keep the implementation clear enough to change as the product grows.',
  ],
  [
    'Test, ship, and improve',
    'Check the complete journey, investigate edge cases, and follow the feature into its running environment. Refine it from real use.',
  ],
];

export default function Workflow() {
  return (
    <section
      className="workflow-section section-pad container"
      id="workflow"
      aria-labelledby="workflow-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            <span>04 /</span> APPROACH
          </p>
          <h2 id="workflow-title">How I work.</h2>
        </div>
      </div>
      <ol className="workflow-steps">
        {steps.map(([title, text], index) => (
          <li key={title}>
            <span>0{index + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
