// src/app/layout.tsx
import type {Metadata, Viewport} from "next";
import "./globals.css";
import Script from "next/script";
import dynamic from "next/dynamic";
import React from "react";
import {pretendard} from "@/src/app/utils/font/font";

export const viewport: Viewport = {
    themeColor: '#fff',
}

export const metadata: Metadata = {
    manifest: "/manifest.json",
    title: "nnzz",
    description: "배고픈 여러분!🤗 냠냠쩝쩝은 여러분의 점심 고민을 해결해 줄 쩝쩝 박사들의 사이드 프로젝트에요 !",
    openGraph: {
        title: "nnzz",
        description: "배고픈 여러분!🤗 냠냠쩝쩝은 여러분의 점심 고민을 해결해 줄 쩝쩝 박사들의 사이드 프로젝트에요 !",
        url: "https://www.nnzz.today",
        siteName: "nnzz",
        images: [
            {
                url: "/icon/app-icon-330x430.png",
                width: 330,
                height: 430,
                alt: "nnzz 로고",
            },
        ],
    },
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            {url: "/icon/app-icon-84x108.png", sizes: "84x108", type: "image/png"},
            {url: "/icon/app-icon-124x162.png", sizes: "124x162", type: "image/png"},
            {url: "/icon/app-icon-248x323.png", sizes: "248x323", type: "image/png"},
            {url: "/icon/app-icon-329x429.png", sizes: "329x429", type: "image/png"},
            {url: "/icon/app-icon-330x430.png", sizes: "330x430", type: "image/png"},
        ],
        apple: [
            {url: "/icon/app-icon-330x430.png", sizes: "330x430", type: "image/png"},
        ],
    },
    appleWebApp: {
        title: "nnzz",
        statusBarStyle: "default",
        capable: true,
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const ReactQueryProvider = dynamic(() => import('../app/provider/ReactQueryProvider'), {ssr: false});
    const SplashScreen = dynamic(() => import('../app/component/page/splash/SplashScreen'), {ssr: false});
    return (
        <html lang="ko">
        <body data-theme="light" className={`${pretendard.variable} font-pretendard w-full max-w-[640px] mx-auto overflow-hidden"`}>
        <ReactQueryProvider>
            <SplashScreen>
            {children}
            </SplashScreen>
        </ReactQueryProvider>
        <Script
            src="https://developers.kakao.com/sdk/js/kakao.js"
            strategy="lazyOnload"
        />
        </body>
        </html>
    );
}