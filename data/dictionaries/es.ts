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
    hour: string;
    min: string;
    items: {
      s1: string;
      s2: string;
      s3: string;
      s4: string;
      s5: string;
      s6: string;
      s7: string;
    };
    descriptions: {
      d1: string;
      d2: string;
      d3: string;
      d4: string;
      d5: string;
      d6: string;
      d7: string;
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
  reviews: {
    eyebrow: string;
    title: string;
    summary: string;
    source: string;
    ratingLabel: string;
    prevAria: string;
    nextAria: string;
    goToAria: string;
    regionAria: string;
    quotes: {
      r1: string;
      r2: string;
      r3: string;
      r4: string;
      r5: string;
      r6: string;
      r7: string;
      r8: string;
    };
  };
  booking: {
    title: string;
    body: string;
    cta: string;
    visitsLabel: string;
    visitsValue: string;
    howLabel: string;
    howValue: string;
  };
  contact: {
    titleBefore: string;
    titleItalic: string;
    area: string;
    address: string;
    instagram: string;
    booking: string;
    hours: string;
    hoursNote: string;
  };
  footer: {
    copyright: string;
  };
  social: {
    groupAria: string;
    instagram: string;
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
      "Cortes modernos, barba y diseños en Kendall, Miami. Reserva en Booksy. 5.0 de 16 reseñas.",
  },
  nav: {
    about: "Sobre mí",
    services: "Servicios",
    gallery: "Galería",
    contact: "Contacto",
    book: "Reservar en Booksy",
    brandAria: "Alex Barber",
    menuAria: "Menu",
    localeAria: "Idioma / Language",
  },
  hero: {
    line1: "Precisión",
    line2: "en cada",
    line3: "detalle.",
    sub: "Cortes modernos, barba y diseños. Kendall, Miami · desde $35.",
    cta: "Reservar en Booksy",
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
    pricingNote: "Precios en USD · Reserva en línea por Booksy",
    hour: "1 h",
    min: "min",
    items: {
      s1: "VIP Experience",
      s2: "Corte de cabello",
      s3: "Corte de cabello y barba",
      s4: "Barba",
      s5: "Diseños personalizados",
      s6: "Afeitado con toalla caliente",
      s7: "Depilado nasal con cera",
    },
    descriptions: {
      d1: "La experiencia más completa de Alex Barber. Incluye corte premium, diseño de barba, toalla caliente, perfilado con navaja, masaje relajante y productos premium para un acabado de lujo.",
      d2: "Corte personalizado según tu estilo, tipo de cabello y forma del rostro. Incluye perfilado y acabado profesional para un resultado limpio y preciso.",
      d3: "Servicio completo para renovar tu imagen. Incluye corte de cabello, diseño de barba, perfilado y acabado profesional.",
      d4: "Diseño y perfilado de barba con navaja para lograr una apariencia limpia, definida y acorde a tu estilo.",
      d5: "Diseños personalizados realizados con precisión. Ideal para quienes buscan un estilo único. Este servicio no incluye el corte de cabello.",
      d6: "Afeitado tradicional con toalla caliente, navaja y productos de calidad para una experiencia relajante y un acabado suave.",
      d7: "Eliminación rápida y segura del vello visible de la nariz con cera profesional. Un acabado limpio en solo unos minutos.",
    },
  },
  about: {
    eyebrow: "El barbero",
    title: "Detrás de cada corte hay un artesano.",
    p1: "Alexis Garcia — Alex Barber — atiende en Kendall, Miami, solo con cita. Clientes fieles llevan años volviendo por cortes limpios y atención puntual.",
    p2: "Su enfoque es el barbering moderno: degradados precisos, diseños personalizados, barba con navaja y experiencias premium con toalla caliente.",
    portraitLabel: "Retrato de Alex",
    workingLabel: "Alex trabajando",
  },
  reviews: {
    eyebrow: "Clientes",
    title: "Cinco estrellas. Sin excepción.",
    summary: "5.0 / 5 · 16 reseñas en Booksy",
    source: "Reseñas verificadas en Booksy · Staff: Alexis Garcia",
    ratingLabel: "5.0",
    prevAria: "Testimonio anterior",
    nextAria: "Testimonio siguiente",
    goToAria: "Ir al testimonio",
    regionAria: "Carrusel de testimonios",
    quotes: {
      r1: "Great love the place and Alex is a great barber no doubt about that.",
      r2: "Alex ha sido mi barbero desde hace tres años; es excelente en lo que hace y lo recomiendo al 100 %.",
      r3: "Es el mejor barbero de todo Miami.",
      r4: "Siempre puntual y una muy buena atención hacia los clientes!",
      r5: "Súper el mejor de west Kendall y Miami.",
      r6: "Super buena atención y buen barbero se los recomiendo.",
      r7: "El mejor barbero de miami LBMA.",
      r8: "Siempre el mejor servicio con Alex! Recomendado 100000%!",
    },
  },
  booking: {
    title: "Tu próximo corte empieza aquí.",
    body: "Citas solo en línea por Booksy. Elige tu servicio, tu hora y llega listo.",
    cta: "Reservar en Booksy",
    visitsLabel: "Cita",
    visitsValue: "Solo con reserva en Booksy",
    howLabel: "Cómo",
    howValue: "Agenda en línea y llega a tu hora",
  },
  contact: {
    titleBefore: "Kendall, Miami. ",
    titleItalic: "Solo con cita.",
    area: "Zona",
    address: "Dirección",
    instagram: "Instagram",
    booking: "Reservas",
    hours: "Horario",
    hoursNote: "Citas por Booksy · Hoy 08:00 AM – 08:00 PM",
  },
  footer: {
    copyright: "© 2026 Alex Barber",
  },
  social: {
    groupAria: "Redes sociales",
    instagram: "Instagram de Alex Barber",
  },
  locale: {
    es: "ES",
    en: "EN",
  },
};
