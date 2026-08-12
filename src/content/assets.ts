/**
 * Higgsfield asset registry for portfolio imagery.
 * Local path is used on the site for fast loads.
 * mediaId / remoteUrl are Higgsfield library references.
 *
 * heroBackground & sectionBackground: generate via Higgsfield
 * (soul_location / recraft) once credits are available.
 */
export const HIGGSFIELD_ASSETS = {
  profilePhoto: {
    localPath: "/images/profile.png",
    mediaId: "a007321e-693e-45a0-b12c-1de104f50687",
    remoteUrl:
      "https://d2ol7oe51mr4n9.cloudfront.net/user_3HfKp4OTjI74eC0QJl7iMmAW8RJ/a007321e-693e-45a0-b12c-1de104f50687.png",
    label: "S. Suriya professional headshot",
  },
  heroBackground: {
    localPath: null as string | null,
    mediaId: null as string | null,
    remoteUrl: null as string | null,
    label: "Hero atmospheric blend background",
  },
  sectionBackground: {
    localPath: null as string | null,
    mediaId: null as string | null,
    remoteUrl: null as string | null,
    label: "Section ambient blend background",
  },
} as const;

export type HiggsfieldAssetKey = keyof typeof HIGGSFIELD_ASSETS;
