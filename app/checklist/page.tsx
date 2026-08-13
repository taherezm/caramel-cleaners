import type { Metadata } from "next";
import ArrowIcon from "../components/arrow-icon";
import FooterLinks from "../components/footer-links";
import LogoMark from "../components/logo-mark";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "What's Included: Cleaning Checklist",
  description:
    "Exactly what's included in a Routine, Deep, and Move-In/Move-Out clean from Caramel Cleaners. Serving Carmel, Westfield, Zionsville, Noblesville, and Fishers, Indiana.",
  alternates: {
    canonical: "/checklist/",
  },
};

const comparisonRows = [
  ["Baseboards", "Spot-dusted", "Hand-washed", "Hand-washed"],
  ["Doors, frames, and trim", "Spot-cleaned", "Hand-washed", "Hand-washed"],
  ["Walls", "Not included", "Spot-washed", "Spot-washed"],
  ["Tile and grout", "Surface cleaned", "Scrubbed", "Scrubbed"],
  ["Blinds", "Dusted", "Wiped slat by slat", "Wiped slat by slat"],
  [
    "Interior windows",
    "Sills only",
    "Reachable panes",
    "All accessible panes, sills, and tracks",
  ],
  [
    "Ceiling fans and vents",
    "Dusted within reach",
    "Detailed",
    "Removed and washed where accessible",
  ],
  ["Inside the oven", "Not included", "Not included", "Included"],
  ["Inside the refrigerator", "Not included", "Not included", "Included"],
  [
    "Inside cabinets and drawers",
    "Not included",
    "Not included",
    "Included",
  ],
  [
    "Inside closets and pantry",
    "Not included",
    "Not included",
    "Included",
  ],
  [
    "Under and behind furniture",
    "Not included",
    "Where safely movable",
    "Home is empty",
  ],
] as const;

const routineGroups = [
  {
    id: "routine-every-room",
    title: "Every room",
    items: [
      "Dust reachable surfaces: furniture tops and fronts, shelves, ledges, décor, picture frames, lamps and shades",
      "Dust ceiling fans and light fixtures within reach (two-step ladder maximum)",
      "Remove cobwebs from reachable corners and ceiling lines",
      "Clean mirrors and interior glass",
      "Wipe windowsills; dust blinds",
      "Spot-dust baseboards where dust or marks are visible",
      "Spot-clean fingerprints and smudges from doors, frames, and switch plates",
      "Vacuum carpet and rugs; vacuum and mop hard floors",
      "Empty trash and replace liner",
      "General straightening: cushions squared, pillows fluffed, chairs pushed in",
    ],
  },
  {
    id: "routine-kitchen",
    title: "Kitchen",
    items: [
      "Counters and backsplash cleaned and disinfected: small items moved and replaced",
      "Sink and faucet scrubbed, disinfected, and polished",
      "Stovetop and control panel degreased; grates wiped",
      "Microwave cleaned inside and out",
      "Exterior of refrigerator, oven, dishwasher, and range hood",
      "Cabinet and drawer fronts spot-cleaned at handles and splatter points",
      "Table and chairs wiped",
      "Trash can exterior wiped; trash emptied and re-lined",
      "Floors vacuumed and mopped, including visible edges",
    ],
  },
  {
    id: "routine-bathrooms",
    title: "Bathrooms",
    items: [
      "Tub, shower, and surround scrubbed and disinfected; glass cleaned",
      "Toilet disinfected inside and out: bowl, seat, lid, tank, base, and behind",
      "Sink, faucet, and counter disinfected",
      "Mirrors and chrome fixtures polished",
      "Vanity and cabinet fronts spot-cleaned",
      "Towels straightened and hung",
      "Trash emptied and re-lined",
      "Floors vacuumed and mopped, including behind the toilet",
    ],
  },
  {
    id: "routine-bedrooms",
    title: "Bedrooms",
    items: [
      "Beds made; linens changed if a fresh set is left out",
      "Nightstands, dressers, and headboards dusted",
      "Floors vacuumed, including under the bed where accessible",
    ],
  },
  {
    id: "routine-laundry-mudroom",
    title: "Laundry and mudroom",
    items: [
      "Washer and dryer exteriors and tops wiped",
      "Sink, counters, and shelving wiped",
      "Floors vacuumed and mopped",
    ],
  },
] as const;

const deepGroups = [
  {
    id: "deep-whole-home",
    title: "Whole home",
    items: [
      "Baseboards hand-washed full length in every room; not spot-dusted",
      "Doors, door frames, and trim hand-washed on both sides",
      "Window casings, chair rails, and crown molding wiped within reach",
      "Switch plates, outlet covers, and thermostats wiped",
      "Interior window glass, sills, and tracks cleaned (reachable panes)",
      "Blinds wiped slat by slat",
      "Air vent and return covers dusted and wiped",
      "Ceiling fan blades wiped top and bottom",
      "Light fixtures and lampshades detailed",
      "High dusting: ceiling corners, door tops, high shelving, tops of frames",
      "Furniture dusted underneath and behind, where one person can safely move it",
      "Upholstery vacuumed, including under cushions",
      "Floor edges, corners, and area under accessible furniture vacuumed",
      "Walls spot-washed for scuffs, splatter, and handprints",
      "Stair risers, railings, and spindles hand-wiped",
    ],
  },
  {
    id: "deep-kitchen",
    title: "Kitchen",
    items: [
      "Cabinet and drawer fronts fully degreased top to bottom",
      "Range hood exterior and filter face degreased",
      "Backsplash grout scrubbed",
      "Top of refrigerator cleaned; behind and beside it if the unit rolls out",
      "Burner grates, drip pans, and stove knobs removed and scrubbed",
      "Small appliance exteriors wiped (toaster, coffee maker, air fryer, kettle)",
      "Sink drain, disposal flange, and faucet base descaled",
      "Trash can cleaned inside and out",
    ],
  },
  {
    id: "deep-bathrooms",
    title: "Bathrooms",
    items: [
      "Tile and grout scrubbed throughout the shower and tub surround",
      "Hard water and soap scum removed from glass, fixtures, and tile",
      "Shower track, door frame, and caulk lines detailed",
      "Exhaust fan cover dusted and wiped",
      "Toilet base seal and bolt caps detailed",
      "Vanity fronts fully washed",
    ],
  },
] as const;

const moveGroups = [
  {
    id: "move-in-move-out-interiors",
    title: "Interiors",
    items: [
      "Inside all cabinets and drawers: tops, sides, and bottoms",
      "Inside the pantry, including every shelf",
      "Inside all closets: shelves, rods, walls, floors, and corners",
      "Inside the refrigerator and freezer, including shelves, drawers, and door gaskets",
      "Inside the oven, oven door glass, broiler drawer, and racks",
      "Inside the dishwasher, including gasket and filter",
      "Inside and behind the washer and dryer where accessible, including the lint trap housing",
      "Inside the microwave, including the turntable",
    ],
  },
  {
    id: "move-in-move-out-whole-home",
    title: "Whole home",
    items: [
      "Every baseboard, door, frame, and length of trim washed; no spot-cleaning",
      "Walls spot-washed throughout: scuffs, nail-hole dust, and adhesive residue removed",
      "All interior windows, sills, tracks, and accessible screens",
      "Light fixtures and globes removed and washed where safely accessible",
      "Vent and return covers removed and washed where accessible",
      "Switch plates, outlet covers, thermostats, and door keypads wiped",
      "Hard floors washed edge to edge; carpets vacuumed in full including edges and corners",
      "Garage swept, if empty and requested",
    ],
  },
] as const;

const notIncludedItems = [
  "Exterior windows above the ground floor",
  "Anything requiring a ladder taller than a two-step",
  "Carpet or upholstery shampoo and steam extraction",
  "Mold, biohazard, bodily fluids, pet waste, and litter boxes",
  "Moving furniture heavier than one person can safely slide",
  "Homes in hoarding or excessive-clutter condition; quoted separately after a walkthrough",
  "Insect or rodent debris",
  "Pest treatment, chemical application, or paint work",
  "Chandeliers and fixtures requiring disassembly",
  "Handling firearms, cash, medication, or items flagged as valuable",
] as const;

const beforeArrivalItems = [
  "Clear counters and floors of personal items where you want surfaces cleaned. We move small items and replace them; we don't relocate belongings.",
  "Secure pets.",
  "Flag anything fragile, antique, or off-limits.",
  "For move-in/move-out: the home should be empty, with utilities and water on.",
] as const;

type ScopeGroupProps = {
  id: string;
  title: string;
  items: readonly string[];
};

function ScopeGroup({ id, title, items }: ScopeGroupProps) {
  return (
    <div className="scope-group">
      <h3 id={id}>{title}</h3>
      <ul className="scope-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ComparisonValue({ value }: { value: string }) {
  const isIncluded = value !== "Not included";

  return (
    <span
      className={
        isIncluded
          ? "comparison-value comparison-value-included"
          : "comparison-value comparison-value-excluded"
      }
    >
      <span
        className="comparison-indicator"
        role="img"
        aria-label={isIncluded ? "Included" : "Not included"}
      >
        {isIncluded ? "✓" : "−"}
      </span>
      <span aria-hidden={!isIncluded}>{value}</span>
    </span>
  );
}

export default function ChecklistPage() {
  return (
    <>
      <a className="skip-link" href="#checklist-main">
        Skip to checklist
      </a>

      <div className="site-shell checklist-site-shell" id="top">
        <header className="site-header">
          <div className="brand">
            <LogoMark
              src="../brand-mark.png"
              className="logo-mark-header"
              href="../"
            />
            <a
              className="brand-name"
              href="../"
              aria-label="Caramel Cleaners home"
            >
              Caramel Cleaners
            </a>
          </div>

          <nav className="site-nav" aria-label="Primary navigation">
            <a href="../#how-it-works">How it works</a>
            <a href="../#services">Services</a>
            <a href="../#recurring">Recurring plans</a>
            <a href="./" aria-current="page">
              Checklist
            </a>
            <a href="../faq/">FAQ</a>
            <a
              href="../account/"
              data-analytics-event="client_portal_click"
            >
              Client login
            </a>
            <a href="../#contact">Contact</a>
          </nav>

          <a
            className="button button-small button-dark"
            href="../book/"
            data-analytics-event="book_now_click"
          >
            Book now <ArrowIcon />
          </a>
        </header>

        <main className="checklist-main" id="checklist-main">
          <section
            className="checklist-hero"
            aria-labelledby="checklist-heading"
          >
            <p className="section-kicker">Cleaning scope</p>
            <h1 id="checklist-heading">
              What&apos;s Included: Cleaning Checklist
            </h1>
            <p className="checklist-intro">
              Every tier below is cumulative: a Deep Clean includes everything
              in a Routine Clean, and a Move-In / Move-Out Clean includes
              everything in a Deep Clean. If a task isn&apos;t listed here, assume
              it isn&apos;t included, and ask us before you book. We&apos;d rather
              answer a question up front than surprise you on cleaning day.
            </p>
          </section>

          <nav className="checklist-page-nav" aria-label="Checklist sections">
            <div className="checklist-page-links">
              <a href="#quick-comparison">Compare</a>
              <a href="#routine-clean">Routine</a>
              <a href="#deep-clean">Deep</a>
              <a href="#move-in-move-out">Move-In / Move-Out</a>
              <a href="#not-included">Not included</a>
              <a href="#before-we-arrive">Before we arrive</a>
            </div>
            <a
              className="button button-small button-caramel checklist-book-cta"
              href="../book/"
              data-analytics-event="book_now_click"
            >
              Book now <ArrowIcon />
            </a>
          </nav>

          <div className="checklist-content">
            <section
              className="scope-section comparison-section"
              aria-labelledby="quick-comparison"
            >
              <div className="scope-section-heading">
                <h2 id="quick-comparison">Quick comparison</h2>
                <p className="checklist-scroll-note">
                  Swipe or scroll to compare all services.
                </p>
              </div>
              <div
                className="comparison-scroll"
                role="region"
                aria-label="Quick cleaning service comparison"
                tabIndex={0}
              >
                <table className="comparison-table">
                  <caption className="sr-only">
                    Tasks included in Routine, Deep, and Move-In/Move-Out
                    cleaning services
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Task</th>
                      <th scope="col">Routine</th>
                      <th scope="col">Deep</th>
                      <th scope="col">Move-In/Out</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map(([task, routine, deep, move]) => (
                      <tr key={task}>
                        <th scope="row">{task}</th>
                        <td>
                          <ComparisonValue value={routine} />
                        </td>
                        <td>
                          <ComparisonValue value={deep} />
                        </td>
                        <td>
                          <ComparisonValue value={move} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="scope-section" aria-labelledby="routine-clean">
              <div className="scope-section-heading">
                <h2 id="routine-clean">Routine Clean</h2>
                <p>
                  Recurring upkeep for a home that&apos;s already at a clean
                  baseline. New clients start with a Deep Clean.
                </p>
              </div>
              <div className="scope-groups">
                {routineGroups.map((group) => (
                  <ScopeGroup key={group.id} {...group} />
                ))}
              </div>
            </section>

            <section
              className="scope-section scope-section-featured"
              aria-labelledby="deep-clean"
            >
              <div className="scope-section-heading">
                <h2 id="deep-clean">Deep Clean</h2>
                <p>
                  Everything in a Routine Clean, plus the reset work below.
                  Recommended as a first visit, seasonally, before hosting, or
                  after a lapse in service.
                </p>
              </div>
              <div className="scope-groups">
                {deepGroups.map((group) => (
                  <ScopeGroup key={group.id} {...group} />
                ))}
              </div>
              <aside className="scope-callout">
                <p>
                  <strong>Not included in a Deep Clean:</strong> inside the oven,
                  inside the refrigerator, inside occupied cabinets and
                  closets, and upper-floor interior windows that require a
                  ladder. Some of these can be added when you book.
                </p>
              </aside>
            </section>

            <section
              className="scope-section"
              aria-labelledby="move-in-move-out"
            >
              <div className="scope-section-heading">
                <h2 id="move-in-move-out">Move-In / Move-Out Clean</h2>
                <p>
                  Deep Clean scope performed on an empty home, plus every
                  interior surface. Priced for an empty house. Furniture and
                  belongings should be out, and cabinets, closets, and
                  appliances emptied, before we arrive.
                </p>
                <p className="scope-plus-line">
                  Everything in a Deep Clean, plus:
                </p>
              </div>
              <div className="scope-groups">
                {moveGroups.map((group) => (
                  <ScopeGroup key={group.id} {...group} />
                ))}
              </div>
              <aside className="scope-callout">
                <p>
                  <strong>Not included:</strong> carpet or upholstery steam
                  cleaning, exterior windows, wall repair or painting, debris
                  and trash haul-away beyond normal household trash, appliance
                  disconnection, and mold remediation.
                </p>
              </aside>
            </section>

            <section
              className="scope-section scope-exclusion-panel"
              aria-labelledby="not-included"
            >
              <div className="scope-section-heading">
                <h2 id="not-included">Not included in any clean</h2>
                <p>
                  These fall outside every service tier. If your home needs any
                  of the following, tell us before booking and we&apos;ll either
                  quote it separately or refer you to the right specialist.
                </p>
              </div>
              <ul className="scope-list scope-exclusion-list">
                {notIncludedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section
              className="scope-section before-arrival-section"
              aria-labelledby="before-we-arrive"
            >
              <div className="scope-section-heading">
                <h2 id="before-we-arrive">Before we arrive</h2>
              </div>
              <ul className="scope-list before-arrival-list">
                {beforeArrivalItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="checklist-contact-line">
                Not sure which clean you need, or whether something is covered?
                Text or email us before you book:{" "}
                <a href="mailto:contact@caramelcleaners.com">
                  contact@caramelcleaners.com
                </a>{" "}
                or <a href="sms:+14632244181">(463) 224-4181</a>. We answer
                quickly.
              </p>
              <a
                className="button button-dark checklist-book-cta checklist-bottom-cta"
                href="../book/"
                data-analytics-event="book_now_click"
              >
                Book now <ArrowIcon />
              </a>
            </section>
          </div>
        </main>

        <footer className="site-footer checklist-footer">
          <div className="brand footer-brand">
            <LogoMark src="../brand-mark.png" className="logo-mark-footer" />
            <a className="brand-name" href="../">
              Caramel Cleaners
            </a>
          </div>
          <div className="footer-meta">
            <a href="mailto:contact@caramelcleaners.com">
              contact@caramelcleaners.com
            </a>
            <a href="sms:+14632244181">Text: (463) 224-4181</a>
            <a href="./" aria-current="page">
              Cleaning checklist
            </a>
            <a href="../faq/">Frequently asked questions</a>
            <FooterLinks rootHref="../" />
            <p>© 2026 Caramel Cleaners LLC. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
