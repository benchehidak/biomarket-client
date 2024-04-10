import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/footer";
import "../public/assets/css/main.css";
import StoreProvider from "@/components/redux/StoreProvider";
import StorageWrapper from "@/components/ecommerce/storage-wrapper";
import "swiper/css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-modal/styles.css";
import BaseMegaMenu from "@/components/component/NavStoreUi";
import AuthProvider from "@/components/component/Provider";

// import MegaMenuNavigation from '@/components/component/NavStoreUi2';

// import QuickView from '@/components/ecommerce/QuickView';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BioMarket",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;1,700&family=Poppins:wght@100;200;300;400&family=Quicksand:wght@400;500;600;700&family=Tilt+Warp&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>
        <StoreProvider>
          <StorageWrapper>
            {/* <Header /> */}
            <BaseMegaMenu />

            {children}
            {/* <QuickView /> */}
            <Footer />
            <ToastContainer style={{ zIndex: 99999 }} />
          </StorageWrapper>
        </StoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
