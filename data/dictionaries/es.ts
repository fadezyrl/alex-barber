export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    services: string;
    gallery: string;
    contact: string;
    book: string;
    brandAria: string;
    menuAria: string;
    localeAria: string;
  };
  hero: {
    line1: string;
    line2: string;
    line3: string;
    sub: string;
    cta: string;
    photoLabel: string;
  };
  work: {
    title: string;
    l1: string;
    taper: string;
    l2: string;
    l3: string;
    slots: {
      w1: string;
      w2: string;
      w3: string;
      w4: string;
    };
  };
  services: {
    title: string;
    pricingNote: string;
    items: {
      s1: string;
      s2: string;
      s3: string;
      s4: string;
      s5: string;
      s6: string;
    };
    descriptions: {
      d1: string;
      d2: string;
      d3: string;
      d4: string;
      d5: string;
      d6: string;
    };
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    portraitLabel: string;
    workingLabel: string;
  };
  details: {
    eyebrow: string;
    title: string;
    body: string;
    photoLabel: string;
  };
  booking: {
    title: string;
    body: string;
    cta: string;
    visitsLabel: string;
    visitsValue: string;
    howLabel: string;
    howValue: string;
    photoLabel: string;
  };
  contact: {
    titleBefore: string;
    titleItalic: string;
    area: string;
    instagram: string;
    booking: string;
    addressHours: string;
    toBeConfirmed: string;
  };
  footer: {
    copyright: string;
  };
  locale: {
    es: string;
    en: string;
  };
};

export const es: Dictionary = {
  meta: {
    title: "Alex Barber · Barbero profesional en Kendall, Miami",
    description:
      "Cortes modernos. Detalles afilados. Barbero profesional en Kendall, Miami.",
  },
  nav: {
    about: "Sobre mí",
    services: "Servicios",
    gallery: "Galería",
    contact: "Contacto",
    book: "Reservar cita",
    brandAria: "Alex Barber",
    menuAria: "Menu",
    localeAria: "Idioma / Language",
  },
  hero: {
    line1: "Precisión",
    line2: "en cada",
    line3: "detalle.",
    sub: "Cortes modernos. Detalles afilados. Miami.",
    cta: "Reservar cita",
    photoLabel: "Foto principal de Alex",
  },
  work: {
    title: "El trabajo habla.",
    l1: "SKIN FADE",
    taper: "TAPER",
    l2: "DISEÑO",
    l3: "BARBA",
    slots: {
      w1: "Corte principal",
      w2: "Detalle lateral",
      w3: "Vista trasera",
      w4: "Barba / contorno",
    },
  },
  services: {
    title: "El arte del corte.",
    pricingNote: "Precios: se confirman al reservar",
    items: {
      s1: "Corte moderno",
      s2: "Skin fade",
      s3: "Taper fade",
      s4: "Arreglo de barba",
      s5: "Corte y barba",
      s6: "Diseño creativo",
    },
    descriptions: {
      d1: "Un corte pensado para tu rostro y tu estilo, con acabado limpio y definido.",
      d2: "Degradado a piel, suave y preciso, de la base al largo que elijas.",
      d3: "Transición sutil y elegante en patillas y nuca, ideal para el día a día.",
      d4: "Contorno, perfilado y cuidado para una barba definida y ordenada.",
      d5: "El servicio completo: cabello y barba en una sola cita.",
      d6: "Líneas, patrones y detalles rasurados hechos a mano.",
    },
  },
  about: {
    eyebrow: "El barbero",
    title: "Detrás de cada corte hay un artesano.",
    p1: "Alex es barbero profesional en Kendall, Miami. Trabaja con cita previa para dedicar a cada cliente el tiempo que el corte merece.",
    p2: "Su enfoque es el barbering moderno: degradados limpios, líneas precisas y diseños creativos que respetan la forma de cada persona.",
    portraitLabel: "Retrato de Alex",
    workingLabel: "Alex trabajando",
  },
  details: {
    eyebrow: "Los detalles",
    title: "Más allá del corte estándar.",
    body: "Patrones rasurados, líneas nítidas y degradados al detalle.",
    photoLabel: "Diseño / línea en primer plano",
  },
  booking: {
    title: "Tu próximo corte empieza aquí.",
    body: "Atención solo con cita previa. Reserva en línea y elige tu momento con Alex.",
    cta: "Reserva tu cita",
    visitsLabel: "Cita",
    visitsValue: "Solo con reserva",
    howLabel: "Cómo",
    howValue: "Reserva en línea y llega a tu hora",
    photoLabel: "Detalle de corte",
  },
  contact: {
    titleBefore: "Kendall, Miami. ",
    titleItalic: "Solo con cita.",
    area: "Zona",
    instagram: "Instagram",
    booking: "Reservas",
    addressHours: "Dirección y horario",
    toBeConfirmed: "Por confirmar",
  },
  footer: {
    copyright: "© 2026 Alex Barber",
  },
  locale: {
    es: "ES",
    en: "EN",
  },
};
