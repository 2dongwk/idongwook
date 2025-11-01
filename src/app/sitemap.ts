import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  // 정적 페이지 예시 (필요 페이지 추가)
  const routes = ["", "/about"].map((p) => ({                             //✅추가
    url: `${base}${p}`,
    lastModified: new Date().toISOString(),
  }));

  // TODO: 블로그/프로젝트 등 동적 데이터가 있으면 여기서 fetch 후 push

  return routes;
}