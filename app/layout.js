import "./globals.css";
import AOSProvider from "@/components/AOSProvider";

export const metadata = {
  title: "Serene",
  description: "Feed Your Skin, Find Your Glow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
