import { useId, useState } from "react";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import "./FAQAccordion.css";

export default function FAQAccordion({ items, defaultOpenIndex = -1 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);
  const baseId = useId();

  return (
    <div className="faq-accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <Reveal as="div" key={item.q} delay={Math.min(index + 1, 5)} className="faq-item">
            <h3 className="faq-item__heading">
              <button
                type="button"
                id={buttonId}
                className="faq-item__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{item.q}</span>
                <Icon name="chevronDown" size={18} className={`faq-item__chevron ${isOpen ? "is-open" : ""}`} />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`faq-item__panel ${isOpen ? "is-open" : ""}`}
            >
              <div className="faq-item__panel-inner">
                <p className="text-muted">{item.a}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
