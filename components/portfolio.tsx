"use client";

import { useState, useEffect } from "react";
import { useScramble } from "use-scramble";
import { useKeyboardShortcut } from '../hooks/keyboard-shortcuts';

const getDomainFromUrl = (url: string) => {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
};

export const Portfolio = () => {
  const portfolio = [
    {
      title: "ai-nc",
      icon: "https://www.ai-nc.com/images/branding/logo-silver-cropped.svg",
      description:
        "ai-nc's product 'Manufact' is making the making of things a little less shit for designers' designs, and the manufacturing firms that make them.",
      url: "https://www.ai-nc.com/",
      status: null,
    },
    {
      title: "ashby",
      icon: "/portfolio/ashby.png",
      description:
        "ashby helps scaling companies achieve their ambitious growth targets. with ashby, teams of all sizes can run a fast and efficient hiring process.",
      url: "https://www.ashbyhq.com/",
      status: null,
    },
    {
      title: "astral",
      icon: "/portfolio/astral.png",
      description:
        "astral's mission is to make the python ecosystem more productive by building high-performance developer tools, starting with ruff.",
      url: "https://www.astral.sh/",
      status: null,
    },
    {
      title: "baseten",
      icon: "/portfolio/baseten.png",
      description:
        "baseten provides all the infrastructure you need to deploy and serve ml models performantly, scalably, and cost-efficiently.",
      url: "https://www.baseten.co/",
      status: null,
    },
    {
      title: "beeps",
      icon: "/portfolio/beeps.png",
      description:
        "beeps is the on-call platform for next.js developers.",
      url: "https://beeps.dev/",
      status: null,
    },
    {
      title: "braintrust",
      icon: "/portfolio/braintrust.png",
      description:
        "braintrust is the enterprise-grade stack for building ai products. from evaluations, to prompt playground, to data management, braintrust takes uncertainty and tedium out of incorporating ai into your business.",
      url: "https://www.braintrust.dev/",
      status: null,
    },
    {
      title: "browserbase",
      icon: "/portfolio/browserbase.png",
      description:
        "browserbase is the all-in-one platform developers need to host, manage, and monitor headless browsers in the cloud.",
      url: "https://www.browserbase.com/",
      status: null,
    },
    {
      title: "default",
      icon: "/portfolio/default.png",
      description:
        "default is the all-in-one inbound lead platform that helps modern companies make the most of every lead by consolidating the usually fragmented inbound sales stack into one deeply integrated platform.",
      url: "https://www.default.com/",
      status: null,
    },
    {
      title: "diagram",
      icon: "/portfolio/diagram.png",
      description:
        "diagram is a design tools company reimagining ui design in the era of generative ai.",
      url: "https://diagram-figma.webflow.io/",
      status: "acquired by figma",
    },
    {
      title: "doss",
      icon: "/portfolio/doss.png",
      description:
        "doss is a lightweight erp and data platform that helps teams manage their operations from purchase order to point of sale.",
      url: "https://doss.com/",
      status: null,
    },
    {
      title: "graphite",
      icon: "/portfolio/graphite.png",
      description:
        "graphite is a fast, simple code review platform designed for engineers who want to write and review smaller pull requests, stay unblocked, and ship faster.",
      url: "https://graphite.dev/",
      status: null,
    },
    {
      title: "mainframe",
      icon: "/portfolio/mainframe.png",
      description:
        "mainframe's mission is to change the world's relationship with computers.",
      url: "https://mainfra.me/",
      status: null,
    },
    {
      title: "orb",
      icon: "/portfolio/orb.png",
      description:
        "orb is developer-first billing infrastructure built to help companies succeed with usage-based pricing.",
      url: "https://www.withorb.com/",
      status: null,
    },
    {
      title: "resend",
      icon: "/portfolio/resend.png",
      description:
        "resend is the email api for developers to build, test, and deliver transactional emails at scale.",
      url: "https://resend.com/",
      status: null,
    },
    {
      title: "sf compute",
      icon: "/portfolio/sfcompute.png",
      description:
        "sf compute runs affordable pre-training clusters for startups, grad students, and research labs.",
      url: "https://sfcompute.com/",
      status: null,
    },
    {
      title: "supabase",
      icon: "/portfolio/supabase.png",
      description:
        "supabase is an open source firebase alternative. start your project with a postgres database, authentication, instant apis, edge functions, realtime subscriptions, and storage.",
      url: "https://supabase.com/",
      status: null,
    },
    {
      title: "vercel",
      icon: "/portfolio/vercel.png",
      description:
        "vercel's frontend cloud provides the developer experience and infrastructure to build, scale, and secure a faster, more personalized web.",
      url: "https://vercel.com/",
      status: null,
    },
  ];

  const ITEM_HEIGHT = 112; // Height of each grid item in pixels
  const GRID_COLS = 4;
  const gridRows = Math.ceil(portfolio.length / GRID_COLS);
  const totalHeight = ITEM_HEIGHT * gridRows;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isIconicHovered, setIsIconicHovered] = useState(false);
  const [isGridView, setIsGridView] = useState(false);

  useKeyboardShortcut({
    handlers: [
      {
        key: 'l',
        handler: () => setIsGridView(!isGridView),
        description: 'Switch to list view'
      },
    ]
  });

  useEffect(() => {
    if (isIconicHovered) {
      const timer = setTimeout(() => {
        setIsIconicHovered(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isIconicHovered]);

  const renderGridIntersections = () => {
    const rows = Math.ceil(portfolio.length / 4);
    const intersections = [];
    const horizontalPoints = 4 + 1;
    const verticalPoints = rows + 1;

    for (let row = 0; row < verticalPoints; row++) {
      for (let col = 0; col < horizontalPoints; col++) {
        const isHighlighted = hoveredIndex !== null && (
          // Check if this intersection point is one of the four corners of the hovered item
          (row === Math.floor(hoveredIndex / 4) && col === hoveredIndex % 4) || // top-left
          (row === Math.floor(hoveredIndex / 4) && col === (hoveredIndex % 4) + 1) || // top-right
          (row === Math.floor(hoveredIndex / 4) + 1 && col === hoveredIndex % 4) || // bottom-left
          (row === Math.floor(hoveredIndex / 4) + 1 && col === (hoveredIndex % 4) + 1) // bottom-right
        );

        intersections.push(
          <div
            key={`intersection-${row}-${col}`}
            className={`absolute w-3 h-3 flex items-center justify-center transition-colors duration-200 ${
              isHighlighted ? 'text-[var(--color-primary)]' : 'text-gray-800 dark:text-gray-400'
            }`}
            style={{
              top: `${(row * 100) / rows}%`,
              left: col === 0 ? '0%' : 
                    col === horizontalPoints - 1 ? '100%' : 
                    `${(col * 100) / 4}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            +
          </div>
        );
      }
    }

    return intersections;
  };

  return (
    <div className="py-10">
      <div className={`flex justify-between items-center mb-8`}>
        <h2 className="text-lg font-bold cursor-default">
          early partner to{" "}
          <span 
            className={`inline-block transition-all duration-500 ${
              isIconicHovered ? 'scale-110' : 'scale-100'
            }`}
            onMouseEnter={() => setIsIconicHovered(true)}
            onMouseLeave={() => setIsIconicHovered(false)}
          >
            iconic
          </span>{" "}
          companies
        </h2>
        <button
          onClick={() => setIsGridView(!isGridView)}
          className="hidden md:block text-sm p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors [background-color:var(--color-background-light)] dark:[background-color:var(--color-background-dark)]"
        >
          {isGridView ? '[l] list view' : '[l] logo view'}
        </button>
      </div>

      <div className="relative" style={{ height: totalHeight }}>
        {/* Grid intersections - only show on md and up when in logo view */}
        {isGridView && (
          <div className="hidden md:block">
            {renderGridIntersections()}
          </div>
        )}
        
        {/* List view - show on mobile OR when list view is selected */}
        <div 
          className={`flex flex-col ${isGridView ? 'md:hidden' : ''}`}
          style={{ height: totalHeight }}
        >
          {portfolio.map((client, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm"
              style={{ height: `${totalHeight / portfolio.length}px` }}
            >
              <span className="text-gray-800 dark:text-gray-400">+</span>
              <div className="flex items-center gap-1">
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span className="text-sm md:hidden">
                    <span className="underline">{client.title}</span>
                    {client.status && (
                      <span className="text-sm text-gray-500"> ({client.status.toLowerCase()})</span>
                    )}
                  </span>
                  <span className="hidden md:inline">
                    {hoveredIndex === index ? (
                      <ScrambleText 
                        text={client.title === "diagram" ? "diagram.com" : getDomainFromUrl(client.url)} 
                        className="text-sm underline text-[var(--color-primary)]"
                      />
                    ) : (
                      <span>
                        <span className="text-sm underline">
                          {client.title}
                        </span>
                        {client.status && (
                          <span className="text-sm text-gray-500"> ({client.status.toLowerCase()})</span>
                        )}
                      </span>
                    )}
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Grid view - only show on md and up when grid view is selected */}
        {isGridView && (
          <div 
            className="hidden md:grid md:grid-cols-4"
            style={{ height: totalHeight }}
          >
            {portfolio.map((client, index) => (
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="cursor-pointer group"
                style={{ height: '112px' }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="h-full relative flex items-center justify-center">
                  <img
                    src={client.icon}
                    alt=""
                    className="h-8 w-auto object-contain group-hover:opacity-0 transition-opacity dark:invert hidden md:block"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center hidden md:flex">
                    {hoveredIndex === index ? (
                      <>
                        <ScrambleText text={client.title} className="text-2xl font-bold tracking-wide font-geist" />
                        {client.status && (
                          <span className="text-xs text-[var(--color-primary)] mt-1">
                            {client.status}
                          </span>
                        )}
                      </>
                    ) : (
                      <span className="text-2xl font-bold tracking-wide font-geist">
                        {client.title}
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ScrambleText = ({ text, className = "text-2xl font-bold tracking-wide font-geist" }: { text: string, className?: string }) => {
  const { ref } = useScramble({
    text,
    speed: 0.8,
    tick: 1,
    step: 1,
    scramble: 3,
    seed: 3,
  });

  return <span ref={ref} className={className} />;
};
