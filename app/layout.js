import './globals.css';

export const metadata = {
  title: 'Cirujano Maxilofacial en Sabadell | Muelas del juicio e implantes dentales',
  description:
    'Unidad de Cirugía Oral y Maxilofacial en el Hospital Quirónsalud del Vallès. Especialistas en muelas del juicio, cordales incluidos e implantes dentales en Sabadell y el Vallès.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
