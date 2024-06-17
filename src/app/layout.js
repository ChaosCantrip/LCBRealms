import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";

import "@styles/global/master.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
