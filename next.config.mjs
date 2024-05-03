/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false //TODO: validar essa alteracao
};

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
    dest: "public",
    register: true
});

export default withPWA({
    ...nextConfig
});
