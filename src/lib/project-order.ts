// Orden de las obras en la home; "siguiente obra" lo reutiliza.
const order: Record<string, number> = {
  'depto-saavedra-2025': 1,
  'cocina-devoto-2026': 2,
  'villa-ortuzar-2026': 3,
  'bano-caballito-2026': 4,
  'bano-barracas-2026': 5,
  'cocina-palermo-2025': 6,
  'cocina-villa-urquiza-2025': 7,
  'ph-saavedra-2025': 8,
  'depto-corrientes-2025': 9,
  'bano-ph-saavedra-2025': 10,
  'bano-palermo-2025': 11,
  'bano-olivos-2025': 12,
  'placard-villa-urquiza-2025': 13,
  'placard-villa-pueyrredon-2025': 14,
  'local-palermo-2021': 15,
};

export const projectOrder = (slug: string) => order[slug] ?? 99;
