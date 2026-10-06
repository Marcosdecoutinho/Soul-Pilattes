import { motion } from "framer-motion";
import { WhatsAppIcon } from "./shared";
import { WA_DEFAULT, STUDIO } from "../config";

export default function WhatsAppFloat() {
    return (
        <motion.a
            data-testid="float-whatsapp"
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Agendar aula experimental pelo WhatsApp — ${STUDIO.phoneLabel}`}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.5, type: "spring" }}
            className="animate-ring fixed bottom-5 right-5 z-[80] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#2BE06F] to-[#1BA855] text-white shadow-card transition-transform duration-300 hover:scale-110 md:bottom-7 md:right-7"
        >
            <WhatsAppIcon className="h-7 w-7" />
        </motion.a>
    );
}
