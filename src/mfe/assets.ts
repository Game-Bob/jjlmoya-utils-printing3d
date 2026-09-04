import packageMetadata from "../../package.json";
import type { Brand } from "../identity/brands";

const UTILITY_ASSET_ROOT = "/_utilities/printing3d";

export const TABLETOP_ASSET_VERSION = encodeURIComponent(
    import.meta.env.PUBLIC_APP_VERSION ?? packageMetadata.version,
);

const withAssetVersion = (path: string): string => `${path}?version=${TABLETOP_ASSET_VERSION}`;

export const getUtilityAssetPath = (assetName: string): string =>
    withAssetVersion(`${UTILITY_ASSET_ROOT}/${assetName}`);

const BRAND_ASSETS = {
    gamebob: {
        favicon: "favicon.ico",
        faviconSized: "favicon-48.webp",
        appleTouchIcon: "apple-touch-icon-brand.webp",
    },
    jjlmoya: {
        favicon: "favicon-jjlmoya.ico",
        faviconSized: "favicon-jjlmoya-32.webp",
        appleTouchIcon: "apple-touch-icon-jjlmoya.webp",
    },
} as const satisfies Record<Brand, Record<"favicon" | "faviconSized" | "appleTouchIcon", string>>;

export const getBrandAssetPath = (
    brand: Brand,
    asset: keyof (typeof BRAND_ASSETS)[Brand],
): string => getUtilityAssetPath(BRAND_ASSETS[brand][asset]);

export const getUtilityOgImage = (englishSlug: string): string =>
    withAssetVersion(`/_utilities/printing3d/images/${englishSlug}.webp`);

export const getUtilityCssPath = (englishSlug: string): string =>
    withAssetVersion(`/_utilities/printing3d/styles/${englishSlug}.css`);

export const CATEGORY_OG_IMAGE = getUtilityOgImage("printing3d");
