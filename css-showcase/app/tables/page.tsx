import Link from "next/link"
import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "CSS Tables | CSS Showcase",
  description:
    "Master CSS Tables — create beautiful, responsive data tables with sorting, hover effects, and modern styling.",
}

export default function TablesPage() {
  return (
    <>
      <PageHero
        title="Tables That Tell Stories"
        subtitle="Transform boring data grids into beautiful, accessible tables. From zebra stripes to sticky headers — fundamental styling techniques that make your data shine."
      />

      {/* ───── Basic Table Styling ───── */}
      <Section
        title="Basic Table Styling"
        intro="Start with semantic HTML tables and enhance them with CSS for better readability and visual appeal."
        id="basic"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Clean & Simple"
            code={`.table {
    width: 100%;
    border-collapse: collapse;
    background: var(--colour-surface);
}

.table th,
.table td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid var(--colour-border);
}

.table th {
    font-weight: 600;
    color: var(--colour-text-secondary);
    background: var(--colour-surface-variant);
}`}
          >
            <div className={styles.tableWrapper}>
              <table className={styles.tableBasic}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Department</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sarah Johnson</td>
                    <td>Senior Developer</td>
                    <td>Engineering</td>
                    <td>&pound;85,000</td>
                  </tr>
                  <tr>
                    <td>Michael Chen</td>
                    <td>UX Designer</td>
                    <td>Design</td>
                    <td>&pound;65,000</td>
                  </tr>
                  <tr>
                    <td>Emma Davis</td>
                    <td>Product Manager</td>
                    <td>Product</td>
                    <td>&pound;95,000</td>
                  </tr>
                  <tr>
                    <td>James Wilson</td>
                    <td>Marketing Lead</td>
                    <td>Marketing</td>
                    <td>&pound;75,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DemoCard>

          <DemoCard
            title="Striped Rows"
            code={`/* Zebra striping */
.table-striped tbody tr:nth-child(even) {
    background: rgba(0, 0, 0, 0.02);
}

/* Dark theme */
.dark .table-striped tbody tr:nth-child(even) {
    background: rgba(255, 255, 255, 0.02);
}`}
          >
            <div className={styles.tableWrapper}>
              <table className={styles.tableStriped}>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Stock</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Laptop Pro</td>
                    <td>&pound;1,299</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>Wireless Mouse</td>
                    <td>&pound;49</td>
                    <td>45</td>
                  </tr>
                  <tr>
                    <td>USB-C Hub</td>
                    <td>&pound;79</td>
                    <td>23</td>
                  </tr>
                  <tr>
                    <td>Webcam HD</td>
                    <td>&pound;129</td>
                    <td>8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DemoCard>

          <DemoCard
            title="Hover Effects"
            code={`/* Row hover effect */
.table-hover tbody tr {
    transition: background 0.2s ease;
}

.table-hover tbody tr:hover {
    background: var(--colour-primary-light);
    cursor: pointer;
}

/* Status badges */
.badge {
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.875rem;
    font-weight: 500;
}`}
          >
            <div className={styles.tableWrapper}>
              <table className={styles.tableHover}>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Due</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Design Review</td>
                    <td><span className={`${styles.badge} ${styles.badgeSuccess}`}>Complete</span></td>
                    <td>Today</td>
                  </tr>
                  <tr>
                    <td>Code Refactor</td>
                    <td><span className={`${styles.badge} ${styles.badgeWarning}`}>In Progress</span></td>
                    <td>Tomorrow</td>
                  </tr>
                  <tr>
                    <td>Testing Phase</td>
                    <td><span className={`${styles.badge} ${styles.badgeInfo}`}>Pending</span></td>
                    <td>Next Week</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Styled Table Variations ───── */}
      <Section
        title="Styled Table Variations"
        intro="Different table styles for different contexts — from minimal to bold designs."
        id="styled"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Minimal Design"
            code={`/* Minimal table */
.table-minimal {
    border: none;
}

.table-minimal th {
    border-bottom: 2px solid var(--colour-primary);
    background: none;
}

.table-minimal td {
    border: none;
    padding: 1rem 0;
}`}
          >
            <div className={styles.tableWrapper}>
              <table className={styles.tableMinimal}>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Basic</th>
                    <th>Pro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Storage</td>
                    <td>10GB</td>
                    <td>100GB</td>
                  </tr>
                  <tr>
                    <td>Users</td>
                    <td>5</td>
                    <td>Unlimited</td>
                  </tr>
                  <tr>
                    <td>Support</td>
                    <td>Email</td>
                    <td>24/7 Phone</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td><strong>&pound;9/mo</strong></td>
                    <td><strong>&pound;29/mo</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DemoCard>

          <DemoCard
            title="Bordered Table"
            code={`/* Bordered table */
.table-bordered {
    border: 1px solid var(--colour-border);
}

.table-bordered th,
.table-bordered td {
    border: 1px solid var(--colour-border);
}

/* Utility classes */
.text-success { color: var(--colour-success); }
.text-error { color: var(--colour-error); }`}
          >
            <div className={styles.tableWrapper}>
              <table className={styles.tableBordered}>
                <thead>
                  <tr>
                    <th>Q1</th>
                    <th>Q2</th>
                    <th>Q3</th>
                    <th>Q4</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>&pound;125K</td>
                    <td>&pound;143K</td>
                    <td>&pound;156K</td>
                    <td>&pound;189K</td>
                  </tr>
                  <tr>
                    <td className={styles.textSuccess}>+12%</td>
                    <td className={styles.textSuccess}>+14%</td>
                    <td className={styles.textSuccess}>+9%</td>
                    <td className={styles.textSuccess}>+21%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DemoCard>

          <DemoCard
            title="Compact Table"
            code={`/* Compact spacing */
.table-compact th,
.table-compact td {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
}

.table-compact th:first-child,
.table-compact td:first-child {
    width: 3rem;
    text-align: center;
}`}
          >
            <div className={styles.tableWrapper}>
              <table className={styles.tableCompact}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Country</th>
                    <th>Capital</th>
                    <th>Population</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>United Kingdom</td>
                    <td>London</td>
                    <td>67.5M</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>France</td>
                    <td>Paris</td>
                    <td>67.4M</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Germany</td>
                    <td>Berlin</td>
                    <td>83.2M</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Spain</td>
                    <td>Madrid</td>
                    <td>47.4M</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Italy</td>
                    <td>Rome</td>
                    <td>59.1M</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Responsive Tables ───── */}
      <Section
        title="Responsive Tables"
        intro="Make tables work beautifully on all screen sizes with these responsive techniques."
        id="responsive"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Horizontal Scroll"
            code={`/* Scrollable wrapper */
.table-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

.table-scroll {
    min-width: 600px;
}

/* Visual scroll indicator */
.table-wrapper::after {
    content: '→';
    position: absolute;
    right: 0;
    top: 50%;
    /* Show when scrollable */
}`}
          >
            <div className={styles.scrollWrapper}>
              <table className={styles.tableScroll}>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Shipping</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#12345</td>
                    <td>John Smith</td>
                    <td>Laptop Pro 15&quot;</td>
                    <td>1</td>
                    <td>&pound;1,299</td>
                    <td><span className={`${styles.badge} ${styles.badgeSuccess}`}>Shipped</span></td>
                    <td>2024-01-15</td>
                    <td>Express</td>
                  </tr>
                  <tr>
                    <td>#12346</td>
                    <td>Emma Wilson</td>
                    <td>Wireless Keyboard</td>
                    <td>2</td>
                    <td>&pound;158</td>
                    <td><span className={`${styles.badge} ${styles.badgeWarning}`}>Processing</span></td>
                    <td>2024-01-16</td>
                    <td>Standard</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DemoCard>

          <DemoCard
            title="Stack on Mobile"
            code={`/* Mobile stack layout */
@media (max-width: 768px) {
    .table-responsive thead {
        display: none;
    }

    .table-responsive tr {
        display: block;
        margin-bottom: 1rem;
        border: 1px solid var(--colour-border);
        border-radius: 0.5rem;
    }

    .table-responsive td {
        display: block;
        text-align: right;
        padding-left: 50%;
        position: relative;
    }

    .table-responsive td::before {
        content: attr(data-label);
        position: absolute;
        left: 1rem;
        font-weight: 600;
    }
}`}
          >
            <div className={styles.tableWrapper}>
              <table className={styles.tableResponsive}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Name">Alex Johnson</td>
                    <td data-label="Email">alex@example.com</td>
                    <td data-label="Role">Administrator</td>
                    <td data-label="Status"><span className={`${styles.badge} ${styles.badgeSuccess}`}>Active</span></td>
                  </tr>
                  <tr>
                    <td data-label="Name">Sam Taylor</td>
                    <td data-label="Email">sam@example.com</td>
                    <td data-label="Role">Editor</td>
                    <td data-label="Status"><span className={`${styles.badge} ${styles.badgeWarning}`}>Pending</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DemoCard>

          <DemoCard
            title="Sortable Table"
            code={`/* Sortable headers */
.sortable {
    cursor: pointer;
    position: relative;
    padding-right: 2rem;
}

.sortable:hover {
    background: var(--colour-primary-light);
}

.sort-indicator::after {
    content: '↕';
    position: absolute;
    right: 0.5rem;
    opacity: 0.3;
}

.active-asc .sort-indicator::after {
    content: '↑';
    opacity: 1;
}

.active-desc .sort-indicator::after {
    content: '↓';
    opacity: 1;
}`}
          >
            <div className={styles.tableWrapper}>
              <table className={styles.tableSortable}>
                <thead>
                  <tr>
                    <th className={`${styles.sortable} ${styles.activeAsc}`}>Name <span className={styles.sortIndicator} /></th>
                    <th className={styles.sortable}>Score <span className={styles.sortIndicator} /></th>
                    <th className={styles.sortable}>Date <span className={styles.sortIndicator} /></th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alice Brown</td>
                    <td>95</td>
                    <td>2024-01-10</td>
                    <td>
                      <button className={styles.btnIcon} aria-label="Edit">&#9998;</button>
                      <button className={styles.btnIcon} aria-label="Delete">&#10005;</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Bob Davis</td>
                    <td>87</td>
                    <td>2024-01-12</td>
                    <td>
                      <button className={styles.btnIcon} aria-label="Edit">&#9998;</button>
                      <button className={styles.btnIcon} aria-label="Delete">&#10005;</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Carol White</td>
                    <td>92</td>
                    <td>2024-01-11</td>
                    <td>
                      <button className={styles.btnIcon} aria-label="Edit">&#9998;</button>
                      <button className={styles.btnIcon} aria-label="Delete">&#10005;</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DemoCard>

          <DemoCard
            title="Data Table with Filters"
            code={`/* Table filters */
.table-filters {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

.filter-input,
.filter-select {
    padding: 0.5rem 1rem;
    border: 1px solid var(--colour-border);
    border-radius: 0.25rem;
    background: var(--colour-surface);
}

.filter-input {
    flex: 1;
}

/* Highlighted search results */
.highlight-match {
    background: var(--colour-warning-light);
    padding: 0.125rem 0.25rem;
    border-radius: 0.125rem;
}`}
          >
            <div>
              <div className={styles.tableFilters}>
                <input type="search" className={styles.filterInput} placeholder="Search..." />
                <select className={styles.filterSelect} defaultValue="">
                  <option value="">All Categories</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="books">Books</option>
                </select>
              </div>
              <div className={styles.tableWrapper}>
                <table className={styles.tableData}>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Category</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Smartphone X</td>
                      <td>Electronics</td>
                      <td>&pound;699</td>
                    </tr>
                    <tr>
                      <td>Winter Jacket</td>
                      <td>Clothing</td>
                      <td>&pound;129</td>
                    </tr>
                    <tr>
                      <td>CSS Mastery</td>
                      <td>Books</td>
                      <td>&pound;35</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </DemoCard>

          <DemoCard
            title="Fixed Header Table"
            code={`/* Fixed header */
.table-fixed-wrapper {
    height: 200px;
    overflow-y: auto;
    border: 1px solid var(--colour-border);
}

.table-fixed-header thead th {
    position: sticky;
    top: 0;
    background: var(--colour-surface);
    z-index: 10;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`}
          >
            <div className={styles.fixedWrapper}>
              <table className={styles.tableFixed}>
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Revenue</th>
                    <th>Growth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>January</td>
                    <td>&pound;45,230</td>
                    <td className={styles.textSuccess}>+12%</td>
                  </tr>
                  <tr>
                    <td>February</td>
                    <td>&pound;48,650</td>
                    <td className={styles.textSuccess}>+8%</td>
                  </tr>
                  <tr>
                    <td>March</td>
                    <td>&pound;52,180</td>
                    <td className={styles.textSuccess}>+7%</td>
                  </tr>
                  <tr>
                    <td>April</td>
                    <td>&pound;51,990</td>
                    <td className={styles.textError}>-0.4%</td>
                  </tr>
                  <tr>
                    <td>May</td>
                    <td>&pound;55,420</td>
                    <td className={styles.textSuccess}>+6.6%</td>
                  </tr>
                  <tr>
                    <td>June</td>
                    <td>&pound;58,760</td>
                    <td className={styles.textSuccess}>+6%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Continue Your Journey ───── */}
      <Section title="Continue Your Journey" id="next-steps">
        <p className="mb-6 text-[var(--text-secondary)]">
          Tables mastered! Create flexible card layouts next, or style beautiful,
          accessible forms.
        </p>
        <div className={styles.nextGrid}>
          <Link href="/cards" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              &#9744;
            </span>
            <div>
              <h3>Card Components</h3>
              <p>Create flexible, reusable card layouts</p>
            </div>
          </Link>
          <Link href="/forms" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              &#123; &#125;
            </span>
            <div>
              <h3>Forms</h3>
              <p>Style beautiful, accessible forms</p>
            </div>
          </Link>
        </div>
      </Section>
    </>
  )
}
