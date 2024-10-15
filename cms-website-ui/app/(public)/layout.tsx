import React from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header />
            <main className={"max-w-screen-lg m-auto"}>{children}</main>
            <Footer />
        </div>
    );
}
