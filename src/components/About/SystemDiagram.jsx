export default function SystemDiagram() {
  return (
    <div className="system-illustration">
      <div className="diagram-caption">
        <span>HOW THE PIECES CONNECT</span>
        <span>FIG. 01</span>
      </div>
      <svg
        viewBox="0 0 580 310"
        role="img"
        aria-labelledby="system-diagram-title system-diagram-description"
      >
        <title id="system-diagram-title">
          From product interfaces to backend systems
        </title>
        <desc id="system-diagram-description">
          Web, mobile, and AI interfaces connect to an application and API
          layer. That layer connects to databases, background jobs, and
          real-time events.
        </desc>
        <defs>
          <pattern
            id="diagram-grid"
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r=".6" fill="currentColor" opacity=".18" />
          </pattern>
        </defs>
        <rect width="580" height="310" fill="url(#diagram-grid)" />
        <g
          className="diagram-connections"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M116 94V139H290V160M290 94V160M464 94V139H290M290 208V238H116V254M290 238V254M290 238H464V254" />
          <circle cx="290" cy="139" r="3" fill="currentColor" />
          <circle cx="290" cy="238" r="3" fill="currentColor" />
        </g>
        <g className="diagram-box">
          <rect x="44" y="40" width="144" height="54" rx="4" />
          <rect x="218" y="40" width="144" height="54" rx="4" />
          <rect x="392" y="40" width="144" height="54" rx="4" />
        </g>
        <g
          className="diagram-icons"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        >
          <rect x="62" y="57" width="24" height="17" rx="2" />
          <path d="M62 62h24M68 59.5h1M72 59.5h1" />
          <rect x="239" y="51" width="15" height="29" rx="3" />
          <path d="M244 76h5" />
          <rect x="411" y="55" width="22" height="22" rx="4" />
          <path d="M418 62h8v8h-8zM416 51v4m6-4v4m6-4v4m-12 22v4m6-4v4m6-4v4" />
        </g>
        <g className="diagram-labels">
          <text x="101" y="72">
            Web
          </text>
          <text x="271" y="72">
            Mobile
          </text>
          <text x="446" y="72">
            AI / agents
          </text>
        </g>
        <rect
          className="diagram-core"
          x="180"
          y="160"
          width="220"
          height="48"
          rx="4"
        />
        <text
          className="diagram-core-label"
          x="290"
          y="189"
          textAnchor="middle"
        >
          APPLICATION / API LAYER
        </text>
        <g className="diagram-box">
          <rect x="44" y="254" width="144" height="37" rx="3" />
          <rect x="218" y="254" width="144" height="37" rx="3" />
          <rect x="392" y="254" width="144" height="37" rx="3" />
        </g>
        <g className="diagram-bottom-labels" textAnchor="middle">
          <text x="116" y="277">
            Data & storage
          </text>
          <text x="290" y="277">
            Jobs & queues
          </text>
          <text x="464" y="277">
            Live events
          </text>
        </g>
        <text className="diagram-annotation" x="310" y="125">
          ONE PRODUCT. CONNECTED SYSTEMS.
        </text>
      </svg>
      <p className="diagram-note">A simple view of the layers I work across.</p>
    </div>
  );
}
