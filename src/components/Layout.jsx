import Footer from "./Footer";
import Header from "./Header";

// src/layouts/Layout.jsx
export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            {/* main content */}
            <main className="flex-1 w-full mx-auto max-w-screen-xl">
                {children}
            </main>

            <Footer />
        </div>
    );
}
