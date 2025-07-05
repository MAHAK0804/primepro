import Image from "next/image";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  const phoneNumber = "+919220496258"; // Replace with your WhatsApp number
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      className={styles.whatsappButton}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="/whatsapp.png"
        alt="WhatsApp"
        width={50}
        height={50}
        className={styles.whatsappIcon}
      />
    </a>
  );
}
