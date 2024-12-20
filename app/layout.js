import Header from "./_components/Header";

import "@/app/_styles/globals.css";
import { ReservationProvider } from "./_components/ReservationContext";


export const metadata = {
  title: {
    template: "%s The Wild Oasis",
    default: "The Wild Oasis"
  },
};
export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-primary-950 text-primary-100 min-h-screen
       flex flex-col antialiased">
       

        <Header />
       
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
           <ReservationProvider>
            
            {children}
            </ReservationProvider> 
            </main>
        </div>
      </body>
    </html>
  );
}
