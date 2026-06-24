// ===== IMAGE PATH COLLECTOR =====

// Helper function to convert paths with base URL
const getImagePath = (path) => {
  const base = import.meta.env.BASE_URL || "/";
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

// All image paths in your project
const getAllImagePaths = () => {
  return [
    // ===== HOME PAGE IMAGES =====
    // Hero Slides
    "/assets/homepage_pic.jpeg",
    "/assets/home-theatre.jpg",
    "/assets/retaurant.jpg",
    "/assets/pub.jpg",
    "/assets/banquets.jpg",
    "/assets/hotels.jpg",
    "/assets/educational_Institute.jpg",
    "/assets/auditorium.jpg",

    // Partner Logos
    "/assets/antelope.jpg",
    "/assets/audio_tech.png",
    "/assets/audio_e.png",
    "/assets/audix.png",
    "/assets/avid-logo-png.png",
    "/assets/Behringer_Logo.png",
    "/assets/beta_three.png",
    "/assets/db_technologies.png",
    "/assets/Drawmer.png",
    "/assets/eve-audio.png",
    "/assets/genelec.png",
    "/assets/hercules.jpg",
    "/assets/heritage.png",
    "/assets/JBL-Logo.svg.png",
    "/assets/Konig_meyer.png",
    "/assets/krk.png",
    "/assets/lewitt.png",
    "/assets/lexicon.png",
    "/assets/Logo-Universal-Audio-.jpg",
    "/assets/manley.png",
    "/assets/neuman.png",
    "/assets/prism_sound.png",
    "/assets/RME.png",
    "/assets/rupert_neve.png",
    "/assets/senn.png",
    "/assets/slate-digi.png",
    "/assets/solid-state-logic.png",
    "/assets/sound_ref.png",
    "/assets/tegeler.png",
    "/assets/telefunken.png",
    "/assets/ultimate.png",
    "/assets/yamaha.png",

    // Projects
    "/assets/Room_for_squares.png",
    "/assets/Nilabjo_Niyogi_studio_Niyogi.jpeg",
    "/assets/Sunshine_studio_.jpeg",
    "/assets/JMR_Music_Studio.jpeg",
    "/assets/KRG_Kreative_studio_Kashni_raj_gupta.jpeg",
    "/assets/Chanchal_Roy_Studio_Sound_Of_silence.jpeg",
    "/assets/Bloopers_House_Studios.png",

    // Testimonials
    "/assets/Nepal_Shaw.jpeg",
    "/assets/Anupam_roy_studio_1.jpeg",
    "/assets/Rathijit_BhattaCharya.jpeg",
    "/assets/Yuvaan_De.jpeg",
    "/assets/Emon_chakraborty.jpeg",
    "/assets/Surojit_Chatterjee_singing.jpeg",
    "/assets/Snehaa_Bhattacharya.jpeg",
    "/assets/Srijit_Mukherjee.jpeg",
    "/assets/Shobhon _chatterjee.jpeg",
    "/assets/Shamid_Ch.jpeg",
    "/assets/Shamayan_Sarkar.jpeg",
    "/assets/Raja_chowdhury_1.jpeg",
    "/assets/Mr_Indradip_sengupta_1.jpeg",

    // Other Home Images
    "/assets/studio_replica.jpg",
    "/assets/Acoustix.png",
    "/assets/Das_m.png",

    // ===== CONTACT PAGE IMAGES =====
    "/assets/Home_Theater.jpg",
    "/assets/Auditorium_1.jpg",

    // ===== CONSULTANCY PAGE IMAGES =====
    "/assets/Equipment_selection.png",
    "/assets/Installation_services.jpg",
    "/assets/Acoustic_treatment_solutions.jpg",
    "/assets/Room_calibration.jpg",

    // ===== PROJECTS PAGE IMAGES =====
    "/assets/Bloopers_house.jpeg",
    "/assets/Vinayaka_Bar_&_Pub.jpeg",

    // Add any additional images here
  ];
};

// Get processed image paths with base URL
export const getProcessedImagePaths = () => {
  const rawPaths = getAllImagePaths();
  return rawPaths.map((path) => getImagePath(path));
};

// Export individual functions if needed
export { getAllImagePaths, getImagePath };

// Default export
export default getProcessedImagePaths;
