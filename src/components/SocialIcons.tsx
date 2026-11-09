import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect, useState } from "react";
import HoverLinks from "./HoverLinks";
import { config } from "../config";

const SocialIcons = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    if (!social) return;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;
      if (!link) return;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        document.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <>
      <div className="icons-section">
        <div className="social-icons" data-cursor="icons" id="social">
          <span>
            <a
              href={config.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>
          </span>
          <span>
            <a
              href={config.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </span>
          <span>
            <a
              href={`mailto:${config.contact.email}`}
              title="Email"
            >
              <FaEnvelope />
            </a>
          </span>
          <span>
            <a
              href={`tel:${config.contact.phone.replace(/\s+/g, "")}`}
              title="Phone"
            >
              <FaPhone />
            </a>
          </span>
        </div>
        <button
          className="resume-button"
          onClick={() => setShowResumeModal(true)}
          style={{ background: "none", border: "none" }}
          data-cursor="disable"
        >
          <HoverLinks text="RESUME" />
          <span>
            <TbNotes />
          </span>
        </button>
      </div>

      {showResumeModal && (
        <div
          className="resume-modal-overlay"
          onClick={() => setShowResumeModal(false)}
        >
          <div
            className="resume-modal"
            onClick={(e) => e.stopPropagation()}
            data-cursor="disable"
          >
            <div className="resume-modal-header">
              <h3>Select Resume / CV</h3>
              <button
                className="resume-modal-close"
                onClick={() => setShowResumeModal(false)}
              >
                &times;
              </button>
            </div>
            <p className="resume-modal-subtitle">
              Xem trực tiếp trên trình duyệt (PDF) hoặc mở qua Google Drive:
            </p>

            <div className="resume-cards">
              <div className="resume-card">
                <div className="resume-card-info">
                  <h4>Full-Stack Developer</h4>
                  <p>React · Next.js · Node.js · .NET Core · AWS · Microservices</p>
                </div>
                <div className="resume-card-actions">
                  <a
                    href={config.contact.cvLinks.fullstackPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-btn-pdf"
                  >
                    Xem PDF ↗
                  </a>
                  <a
                    href={config.contact.cvLinks.fullstackDrive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-btn-drive"
                  >
                    Google Drive ↗
                  </a>
                </div>
              </div>

              <div className="resume-card">
                <div className="resume-card-info">
                  <h4>AI Engineer</h4>
                  <p>Python · PaddleOCR · LLMs · Whisper · Docker · AWS</p>
                </div>
                <div className="resume-card-actions">
                  <a
                    href={config.contact.cvLinks.aiPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-btn-pdf"
                  >
                    Xem PDF ↗
                  </a>
                  <a
                    href={config.contact.cvLinks.aiDrive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-btn-drive"
                  >
                    Google Drive ↗
                  </a>
                </div>
              </div>

              <div className="resume-card">
                <div className="resume-card-info">
                  <h4>Data Engineer</h4>
                  <p>Python · SQL · PostgreSQL · AWS SQS · ETL Pipelines · LLM</p>
                </div>
                <div className="resume-card-actions">
                  <a
                    href={config.contact.cvLinks.dataPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-btn-pdf"
                  >
                    Xem PDF ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialIcons;
