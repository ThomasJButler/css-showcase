import Link from "next/link"
import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { DemoGrid } from "@/components/demo-grid"
import { DemoCard } from "@/components/demo-card"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "CSS Forms | CSS Showcase",
  description:
    "Beautiful CSS form designs — from elegant inputs to delightful validation. Forms that users actually enjoy filling out!",
}

export default function FormsPage() {
  return (
    <>
      <PageHero
        title="Forms Made Beautiful"
        subtitle="Transform boring forms into delightful experiences. No JavaScript required — just pure CSS magic that makes users actually want to fill them out!"
      />

      {/* ───── Input Fields ───── */}
      <Section
        title="Input Fields"
        intro="Elegant input designs that guide users naturally through your forms."
        id="inputs"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Classic Inputs"
            code={`.form-input {
    width: 100%;
    padding: 0.75rem;
    background: var(--colour-background);
    border: 2px solid var(--colour-border);
    border-radius: 0.5rem;
    font-size: 1rem;
    color: var(--colour-text);
    transition: all 0.2s ease;
}

.form-input:focus {
    outline: none;
    border-color: var(--colour-primary);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}`}
          >
            <form className={styles.demoForm}>
              <div className={styles.formGroup}>
                <label htmlFor="classic-text" className={styles.formLabel}>Name</label>
                <input type="text" id="classic-text" className={styles.formInput} placeholder="Enter your name" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="classic-email" className={styles.formLabel}>Email</label>
                <input type="email" id="classic-email" className={styles.formInput} placeholder="your@email.com" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="classic-password" className={styles.formLabel}>Password</label>
                <input type="password" id="classic-password" className={styles.formInput} placeholder="••••••••" />
              </div>
            </form>
          </DemoCard>

          <DemoCard
            title="Floating Labels"
            code={`.form-floating {
    position: relative;
}

.form-floating label {
    position: absolute;
    top: 50%;
    left: 0.75rem;
    transform: translateY(-50%);
    color: var(--colour-text-muted);
    pointer-events: none;
    transition: all 0.2s ease;
    background: var(--colour-background);
    padding: 0 0.25rem;
}

.form-floating input:focus ~ label,
.form-floating input:not(:placeholder-shown) ~ label {
    top: 0;
    transform: translateY(-50%);
    font-size: 0.75rem;
    color: var(--colour-primary);
}`}
          >
            <form className={styles.demoForm}>
              <div className={`${styles.formGroup} ${styles.formFloating}`}>
                <input type="text" id="float-name" className={styles.formInput} placeholder=" " />
                <label htmlFor="float-name">Full Name</label>
              </div>
              <div className={`${styles.formGroup} ${styles.formFloating}`}>
                <input type="email" id="float-email" className={styles.formInput} placeholder=" " />
                <label htmlFor="float-email">Email Address</label>
              </div>
              <div className={`${styles.formGroup} ${styles.formFloating}`}>
                <input type="tel" id="float-phone" className={styles.formInput} placeholder=" " />
                <label htmlFor="float-phone">Phone Number</label>
              </div>
            </form>
          </DemoCard>

          <DemoCard
            title="Underline Style"
            code={`.form-underline input {
    background: transparent;
    border: none;
    border-bottom: 2px solid var(--colour-border);
    border-radius: 0;
    padding-left: 0;
}

.form-underline-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--colour-primary);
    transition: width 0.3s ease;
}

.form-underline input:focus ~ .form-underline-bar {
    width: 100%;
}`}
          >
            <form className={styles.demoForm}>
              <div className={`${styles.formGroup} ${styles.formUnderline}`}>
                <label htmlFor="underline-name">Name</label>
                <input type="text" id="underline-name" className={styles.formInput} placeholder="Your name" />
                <span className={styles.formUnderlineBar} />
              </div>
              <div className={`${styles.formGroup} ${styles.formUnderline}`}>
                <label htmlFor="underline-email">Email</label>
                <input type="email" id="underline-email" className={styles.formInput} placeholder="Your email" />
                <span className={styles.formUnderlineBar} />
              </div>
              <div className={`${styles.formGroup} ${styles.formUnderline}`}>
                <label htmlFor="underline-subject">Subject</label>
                <input type="text" id="underline-subject" className={styles.formInput} placeholder="Subject" />
                <span className={styles.formUnderlineBar} />
              </div>
            </form>
          </DemoCard>

          <DemoCard
            title="Textareas"
            code={`.form-textarea {
    width: 100%;
    min-height: 100px;
    padding: 0.75rem;
    border: 2px solid var(--colour-border);
    border-radius: 0.5rem;
    resize: vertical;
    font-family: inherit;
    transition: border-color 0.2s ease;
}

.form-textarea:focus {
    outline: none;
    border-color: var(--colour-primary);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.char-count {
    text-align: right;
    font-size: 0.75rem;
    color: var(--colour-text-muted);
}`}
          >
            <form className={styles.demoForm}>
              <div className={styles.formGroup}>
                <label htmlFor="textarea-basic" className={styles.formLabel}>Basic Textarea</label>
                <textarea id="textarea-basic" className={styles.formTextarea} rows={3} placeholder="Enter your message..." />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="textarea-auto" className={styles.formLabel}>Auto-expanding</label>
                <textarea id="textarea-auto" className={`${styles.formTextarea} ${styles.autoExpand}`} rows={1} placeholder="This grows as you type..." />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="textarea-char" className={styles.formLabel}>With Character Count</label>
                <textarea id="textarea-char" className={styles.formTextarea} rows={2} maxLength={100} placeholder="Limited to 100 characters..." />
                <span className={styles.charCount}>0/100</span>
              </div>
            </form>
          </DemoCard>

          <DemoCard
            title="Select & Dropdowns"
            code={`.form-select {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid var(--colour-border);
    border-radius: 0.5rem;
    appearance: none;
    cursor: pointer;
    background-image: url("data:image/svg+xml,...");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 20px;
    padding-right: 2.5rem;
}

.form-select:focus {
    outline: none;
    border-color: var(--colour-primary);
}`}
          >
            <form className={styles.demoForm}>
              <div className={styles.formGroup}>
                <label htmlFor="select-basic" className={styles.formLabel}>Country</label>
                <select id="select-basic" className={styles.formSelect} defaultValue="">
                  <option value="" disabled>Choose a country...</option>
                  <option value="uk">United Kingdom</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="select-custom" className={styles.formLabel}>Custom Styled</label>
                <div className={styles.formSelectWrapper}>
                  <select id="select-custom" className={`${styles.formSelect} ${styles.customSelect}`} defaultValue="">
                    <option value="" disabled>Select option...</option>
                    <option value="tea">Tea Time</option>
                    <option value="coffee">Coffee Break</option>
                    <option value="biscuits">Biscuits</option>
                  </select>
                </div>
              </div>
            </form>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Form Validation ───── */}
      <Section
        title="Form Validation"
        intro="Beautiful feedback that helps users succeed — all using CSS pseudo-classes like :valid, :invalid, and :placeholder-shown."
        id="validation"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Real-time Validation"
            code={`/* CSS-only validation states */
.form-input:valid:not(:placeholder-shown) {
    border-color: var(--colour-success);
}

.form-input:invalid:not(:placeholder-shown):not(:focus) {
    border-color: var(--colour-error);
}

/* Password strength indicator */
.password-strength {
    height: 4px;
    background: var(--colour-border);
    border-radius: 9999px;
    overflow: hidden;
}

.strength-bar {
    height: 100%;
    width: 0;
    transition: all 0.3s ease;
}

.strength-bar.weak { width: 33%; background: #ef4444; }
.strength-bar.medium { width: 66%; background: #f59e0b; }
.strength-bar.strong { width: 100%; background: #22c55e; }`}
          >
            <form className={`${styles.demoForm} ${styles.validationForm}`}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="val-username" className={styles.formLabel}>Username</label>
                  <input
                    type="text"
                    id="val-username"
                    className={styles.formInput}
                    pattern="[a-zA-Z0-9]{3,20}"
                    placeholder="3-20 characters, letters and numbers"
                  />
                  <span className={styles.formMessage} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="val-email" className={styles.formLabel}>Email</label>
                  <input
                    type="email"
                    id="val-email"
                    className={styles.formInput}
                    placeholder="valid@email.com"
                  />
                  <span className={styles.formMessage} />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="val-password" className={styles.formLabel}>Password</label>
                  <input
                    type="password"
                    id="val-password"
                    className={styles.formInput}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    placeholder="8+ chars, uppercase, lowercase, number"
                  />
                  <span className={styles.formMessage} />
                  <div className={styles.passwordStrength}>
                    <span className={styles.strengthBar} />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="val-confirm" className={styles.formLabel}>Confirm Password</label>
                  <input
                    type="password"
                    id="val-confirm"
                    className={styles.formInput}
                    placeholder="Repeat password"
                  />
                  <span className={styles.formMessage} />
                </div>
              </div>
            </form>
          </DemoCard>

          <DemoCard
            title="Success States"
            code={`.form-group.success .form-input {
    border-color: var(--colour-success);
}

.form-group.success .form-message {
    color: var(--colour-success);
    display: block;
}`}
          >
            <form className={styles.demoForm}>
              <div className={`${styles.formGroup} ${styles.success}`}>
                <label htmlFor="success-input" className={styles.formLabel}>Valid Input</label>
                <input type="text" id="success-input" className={styles.formInput} defaultValue="Perfect input!" readOnly />
                <span className={styles.formMessageVisible}>&#10003; Looking good!</span>
              </div>
              <div className={`${styles.formGroup} ${styles.success}`}>
                <label htmlFor="success-email" className={styles.formLabel}>Valid Email</label>
                <input type="email" id="success-email" className={styles.formInput} defaultValue="valid@email.com" readOnly />
                <span className={styles.formMessageVisible}>&#10003; Email verified</span>
              </div>
            </form>
          </DemoCard>

          <DemoCard
            title="Error States"
            code={`.form-group.error .form-input {
    border-color: var(--colour-error);
}

.form-group.error .form-message {
    color: var(--colour-error);
    display: block;
}`}
          >
            <form className={styles.demoForm}>
              <div className={`${styles.formGroup} ${styles.error}`}>
                <label htmlFor="error-input" className={styles.formLabel}>Invalid Input</label>
                <input type="text" id="error-input" className={styles.formInput} defaultValue="Bad input!" readOnly />
                <span className={styles.formMessageVisible}>&#10007; Please check this field</span>
              </div>
              <div className={`${styles.formGroup} ${styles.error}`}>
                <label htmlFor="error-required" className={styles.formLabel}>Required Field</label>
                <input type="text" id="error-required" className={styles.formInput} placeholder="This field is required" readOnly />
                <span className={styles.formMessageVisible}>&#10007; This field is required</span>
              </div>
            </form>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Advanced Controls ───── */}
      <Section
        title="Advanced Controls"
        intro="Checkboxes, radios, toggles, and more — all styled with pure CSS using hidden native inputs and custom visual elements."
        id="advanced"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Checkboxes"
            code={`.form-checkbox {
    position: absolute;
    opacity: 0;
}

.checkbox-mark {
    width: 20px;
    height: 20px;
    background: var(--colour-background);
    border: 2px solid var(--colour-border);
    border-radius: 0.25rem;
    position: relative;
    transition: all 0.2s ease;
}

.checkbox-mark::after {
    content: '';
    position: absolute;
    display: none;
    left: 6px; top: 2px;
    width: 5px; height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.form-checkbox:checked ~ .checkbox-mark {
    background: var(--colour-primary);
    border-color: var(--colour-primary);
}

.form-checkbox:checked ~ .checkbox-mark::after {
    display: block;
}`}
          >
            <form className={styles.demoForm}>
              <div className={styles.formGroup}>
                <label className={styles.checkboxWrapper}>
                  <input type="checkbox" className={styles.formCheckbox} defaultChecked />
                  <span className={styles.checkboxMark} />
                  <span className={styles.checkboxLabel}>I agree to the terms</span>
                </label>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.checkboxWrapper}>
                  <input type="checkbox" className={styles.formCheckbox} />
                  <span className={styles.checkboxMark} />
                  <span className={styles.checkboxLabel}>Send me newsletters</span>
                </label>
              </div>
              <div className={styles.formGroup}>
                <label className={`${styles.checkboxWrapper} ${styles.checkboxFancy}`}>
                  <input type="checkbox" className={styles.formCheckbox} />
                  <span className={styles.checkboxMark} />
                  <span className={styles.checkboxLabel}>Fancy animated checkbox</span>
                </label>
              </div>
            </form>
          </DemoCard>

          <DemoCard
            title="Radio Buttons"
            code={`.form-radio {
    position: absolute;
    opacity: 0;
}

.radio-mark {
    width: 20px; height: 20px;
    background: var(--colour-background);
    border: 2px solid var(--colour-border);
    border-radius: 50%;
    position: relative;
    transition: all 0.2s ease;
}

.radio-mark::after {
    content: '';
    position: absolute;
    display: none;
    width: 10px; height: 10px;
    background: white;
    border-radius: 50%;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
}

.form-radio:checked ~ .radio-mark {
    background: var(--colour-primary);
    border-color: var(--colour-primary);
}

.form-radio:checked ~ .radio-mark::after {
    display: block;
}`}
          >
            <form className={styles.demoForm}>
              <div className={styles.formGroup}>
                <div className={styles.radioGroup}>
                  <label className={styles.radioWrapper}>
                    <input type="radio" name="plan" className={styles.formRadio} value="basic" defaultChecked />
                    <span className={styles.radioMark} />
                    <span className={styles.radioLabel}>Basic Plan</span>
                  </label>
                  <label className={styles.radioWrapper}>
                    <input type="radio" name="plan" className={styles.formRadio} value="pro" />
                    <span className={styles.radioMark} />
                    <span className={styles.radioLabel}>Pro Plan</span>
                  </label>
                  <label className={styles.radioWrapper}>
                    <input type="radio" name="plan" className={styles.formRadio} value="enterprise" />
                    <span className={styles.radioMark} />
                    <span className={styles.radioLabel}>Enterprise</span>
                  </label>
                </div>
              </div>
            </form>
          </DemoCard>

          <DemoCard
            title="Toggle Switches"
            code={`.form-toggle {
    position: absolute;
    opacity: 0;
}

.toggle-slider {
    width: 48px;
    height: 24px;
    background: var(--colour-border);
    border-radius: 9999px;
    position: relative;
    transition: all 0.2s ease;
}

.toggle-slider::after {
    content: '';
    position: absolute;
    width: 18px; height: 18px;
    background: white;
    border-radius: 50%;
    top: 3px; left: 3px;
    transition: all 0.2s ease;
}

.form-toggle:checked ~ .toggle-slider {
    background: var(--colour-primary);
}

.form-toggle:checked ~ .toggle-slider::after {
    transform: translateX(24px);
}`}
          >
            <form className={styles.demoForm}>
              <div className={styles.formGroup}>
                <label className={styles.toggleWrapper}>
                  <input type="checkbox" className={styles.formToggle} />
                  <span className={styles.toggleSlider} />
                  <span className={styles.toggleLabel}>Enable notifications</span>
                </label>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.toggleWrapper}>
                  <input type="checkbox" className={styles.formToggle} defaultChecked />
                  <span className={styles.toggleSlider} />
                  <span className={styles.toggleLabel}>Dark mode</span>
                </label>
              </div>
              <div className={styles.formGroup}>
                <label className={`${styles.toggleWrapper} ${styles.toggleFancy}`}>
                  <input type="checkbox" className={styles.formToggle} />
                  <span className={styles.toggleSlider} />
                  <span className={styles.toggleLabel}>Fancy toggle</span>
                </label>
              </div>
            </form>
          </DemoCard>

          <DemoCard
            title="Range Sliders"
            code={`.form-range {
    width: 100%;
    height: 6px;
    background: var(--colour-border);
    border-radius: 9999px;
    appearance: none;
    cursor: pointer;
}

.form-range::-webkit-slider-thumb {
    appearance: none;
    width: 20px; height: 20px;
    background: var(--colour-primary);
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease;
}

.form-range:hover::-webkit-slider-thumb {
    transform: scale(1.2);
    box-shadow: 0 0 0 8px rgba(37, 99, 235, 0.1);
}

/* Gradient track */
.range-gradient {
    background: linear-gradient(to right,
        #3b82f6, #8b5cf6, #ec4899, #ef4444, #f59e0b);
}`}
          >
            <form className={styles.demoForm}>
              <div className={styles.formGroup}>
                <label htmlFor="range-basic" className={styles.formLabel}>Volume</label>
                <div className={styles.rangeRow}>
                  <input type="range" id="range-basic" className={styles.formRange} min={0} max={100} defaultValue={70} />
                  <span className={styles.rangeValue}>70</span>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="range-custom" className={styles.formLabel}>Brightness</label>
                <div className={styles.rangeRow}>
                  <input type="range" id="range-custom" className={`${styles.formRange} ${styles.rangeCustom}`} min={0} max={100} defaultValue={50} />
                  <span className={styles.rangeValue}>50</span>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="range-gradient" className={styles.formLabel}>Colour Temperature</label>
                <div className={styles.rangeRow}>
                  <input type="range" id="range-gradient" className={`${styles.formRange} ${styles.rangeGradient}`} min={0} max={100} defaultValue={30} />
                  <span className={styles.rangeValue}>30</span>
                </div>
              </div>
            </form>
          </DemoCard>

          <DemoCard
            title="File Upload"
            code={`.form-file {
    position: absolute;
    opacity: 0;
    width: 0; height: 0;
}

.file-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: var(--colour-primary);
    color: white;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
}

.file-drop-area {
    padding: 2rem;
    border: 2px dashed var(--colour-border);
    border-radius: 0.75rem;
    text-align: center;
    transition: all 0.2s ease;
}

.file-drop-area:hover {
    border-color: var(--colour-primary);
}`}
          >
            <form className={styles.demoForm}>
              <div className={styles.formGroup}>
                <label className={styles.fileUpload}>
                  <input type="file" className={styles.formFile} />
                  <span className={styles.fileButton}>
                    <span className={styles.fileIcon} aria-hidden="true">&#128193;</span>
                    <span className={styles.fileText}>Choose File</span>
                  </span>
                  <span className={styles.fileName}>No file chosen</span>
                </label>
              </div>
              <div className={styles.formGroup}>
                <label className={`${styles.fileUpload} ${styles.fileDrop}`}>
                  <input type="file" className={styles.formFile} multiple />
                  <div className={styles.fileDropArea}>
                    <span className={styles.fileDropIcon} aria-hidden="true">&#128228;</span>
                    <span className={styles.fileDropText}>Drop files here or click to browse</span>
                    <span className={styles.fileDropHint}>Multiple files allowed</span>
                  </div>
                </label>
              </div>
            </form>
          </DemoCard>

          <DemoCard
            title="Date & Time"
            code={`input[type="date"],
input[type="time"],
input[type="datetime-local"] {
    cursor: pointer;
}

input[type="date"]::-webkit-calendar-picker-indicator {
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s ease;
}

input[type="date"]:hover::-webkit-calendar-picker-indicator {
    opacity: 1;
}`}
          >
            <form className={styles.demoForm}>
              <div className={styles.formGroup}>
                <label htmlFor="date-input" className={styles.formLabel}>Date</label>
                <input type="date" id="date-input" className={styles.formInput} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="time-input" className={styles.formLabel}>Time</label>
                <input type="time" id="time-input" className={styles.formInput} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="datetime-input" className={styles.formLabel}>Date & Time</label>
                <input type="datetime-local" id="datetime-input" className={styles.formInput} />
              </div>
            </form>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Complete Form Examples ───── */}
      <Section
        title="Complete Form Examples"
        intro="Full forms showcasing everything together — patterns you can adapt for real-world projects."
        id="complete"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Contact Form"
            code={`/* Contact form layout */
.contact-form .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.contact-form .btn-primary {
    margin-top: 0.5rem;
    padding: 0.75rem 2rem;
    background: var(--colour-primary);
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
}

.contact-form .btn-primary:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
}`}
          >
            <form className={`${styles.demoForm} ${styles.contactForm}`}>
              <div className={styles.formRow}>
                <div className={`${styles.formGroup} ${styles.formFloating}`}>
                  <input type="text" id="contact-name" className={styles.formInput} placeholder=" " />
                  <label htmlFor="contact-name">Your Name</label>
                </div>
                <div className={`${styles.formGroup} ${styles.formFloating}`}>
                  <input type="email" id="contact-email" className={styles.formInput} placeholder=" " />
                  <label htmlFor="contact-email">Email Address</label>
                </div>
              </div>
              <div className={`${styles.formGroup} ${styles.formFloating}`}>
                <input type="text" id="contact-subject" className={styles.formInput} placeholder=" " />
                <label htmlFor="contact-subject">Subject</label>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact-message" className={styles.formLabel}>Message</label>
                <textarea id="contact-message" className={styles.formTextarea} rows={4} placeholder="How can we help you?" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.checkboxWrapper}>
                  <input type="checkbox" className={styles.formCheckbox} />
                  <span className={styles.checkboxMark} />
                  <span className={styles.checkboxLabel}>Send me a copy of this message</span>
                </label>
              </div>
              <button type="button" className={styles.btnSubmit}>Send Message</button>
            </form>
          </DemoCard>

          <DemoCard
            title="Sign Up Form"
            code={`/* Sign-up form with header & footer */
.form-header {
    text-align: center;
    margin-bottom: 1.5rem;
}

.password-requirements {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
}

.requirement {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    background: var(--colour-surface-alt);
    border-radius: 0.5rem;
    color: var(--colour-text-muted);
}

.requirement.met {
    background: var(--colour-success);
    color: white;
}

.form-footer {
    text-align: center;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--colour-border);
}`}
          >
            <form className={`${styles.demoForm} ${styles.signupForm}`}>
              <div className={styles.formHeader}>
                <h4>Create Your Account</h4>
                <p>Join thousands of happy users!</p>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="signup-first" className={styles.formLabel}>First Name</label>
                  <input type="text" id="signup-first" className={styles.formInput} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="signup-last" className={styles.formLabel}>Last Name</label>
                  <input type="text" id="signup-last" className={styles.formInput} />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="signup-email" className={styles.formLabel}>Email</label>
                <input type="email" id="signup-email" className={styles.formInput} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="signup-password" className={styles.formLabel}>Password</label>
                <input type="password" id="signup-password" className={styles.formInput} />
                <div className={styles.passwordRequirements}>
                  <span className={styles.requirement}>8+ characters</span>
                  <span className={styles.requirement}>Uppercase letter</span>
                  <span className={styles.requirement}>Lowercase letter</span>
                  <span className={styles.requirement}>Number</span>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.checkboxWrapper}>
                  <input type="checkbox" className={styles.formCheckbox} />
                  <span className={styles.checkboxMark} />
                  <span className={styles.checkboxLabel}>I agree to the Terms of Service</span>
                </label>
              </div>
              <button type="button" className={`${styles.btnSubmit} ${styles.btnBlock}`}>Create Account</button>
              <div className={styles.formFooter}>
                <p>Already have an account? <span className={styles.footerLink}>Sign in</span></p>
              </div>
            </form>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Form Design Tips ───── */}
      <Section
        title="Form Design Tips"
        id="tips"
      >
        <DemoGrid columns={1}>
          <DemoCard
            title="Best Practices for Beautiful Forms"
            code={`/* Ensure good focus states */
input:focus-visible {
    outline: 2px solid var(--colour-primary);
    outline-offset: 2px;
}

/* Touch target minimum */
input, select, textarea {
    min-height: 44px;
}

/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
    input, select, textarea {
        transition: none;
    }
}`}
          >
            <div className={styles.tipsGrid}>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon} aria-hidden="true">#</span>
                <h4>Clear Labels</h4>
                <p>Always use clear, descriptive labels. Users should know exactly what to enter.</p>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon} aria-hidden="true">*</span>
                <h4>Instant Feedback</h4>
                <p>Validate as users type, not just on submit. Help them succeed!</p>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon} aria-hidden="true">[ ]</span>
                <h4>Mobile First</h4>
                <p>Design for touch. Make tap targets at least 44&times;44 pixels.</p>
              </div>
            </div>
          </DemoCard>
        </DemoGrid>
      </Section>

      {/* ───── Continue Your Journey ───── */}
      <Section title="Continue Your Journey" id="next-steps">
        <p className="mb-6 text-[var(--text-secondary)]">
          Forms mastered! Style your data with beautiful tables, or explore card
          component patterns for content presentation.
        </p>
        <div className={styles.nextGrid}>
          <Link href="/tables" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              &#8801;
            </span>
            <div>
              <h3>Tables</h3>
              <p>Present data with style and clarity</p>
            </div>
          </Link>
          <Link href="/cards" className={styles.nextLink}>
            <span className={styles.nextIcon} aria-hidden="true">
              &#9744;
            </span>
            <div>
              <h3>Cards</h3>
              <p>Versatile content containers for any layout</p>
            </div>
          </Link>
        </div>
      </Section>
    </>
  )
}
