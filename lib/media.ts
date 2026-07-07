/**
 * Cinematic media manifest.
 *
 * Each scene is designed for a Seedance 2.0 clip (Higgsfield MCP):
 * std mode · 1080p · 16:9 · ~8s · no audio · ultra realistic ·
 * cinematic lighting · premium color grading · shallow DOF · smooth camera.
 *
 * Drop the rendered clip into /public/videos/<id>.mp4 and set `video` —
 * every CinematicScene automatically upgrades from its procedural
 * backdrop to the film clip. Until then the procedural treatment plays.
 */

export type SceneId =
  | "hero"
  | "brand-identity"
  | "content-creation"
  | "content-writing"
  | "reels-video"
  | "photography"
  | "the-people"
  | "influencer-marketing"
  | "campaign-management"
  | "ecommerce-marketing"
  | "seo"
  | "web-design-development"
  | "graphic-design"
  | "paid-advertising"
  | "social-media-management"
  | "marketing-strategy";

export interface CinematicSceneDef {
  id: SceneId;
  title: string;
  /** Seedance 2.0 prompt — ready to generate. */
  prompt: string;
  /** Set to e.g. "/videos/hero.mp4" once the clip is rendered. */
  video: string | null;
  /** Procedural backdrop palette (dark-scene graded). */
  palette: [string, string, string];
}
export const scenes: Record<SceneId, CinematicSceneDef> = {
  "hero": {
    id: "hero",
    title: "The Monolith",
    prompt:
      "A gigantic abstract monolith made from black stone, smoked glass and brushed metal floating inside an enormous dark architectural space. Warm volumetric lighting slowly sweeps across the object. Tiny floating particles, soft fog, light rays. Camera slowly circles around the object. The monolith slowly transforms as if creativity is taking shape. Ultra realistic, cinematic lighting, premium color grading, shallow depth of field, smooth camera movement.",
    video: null,
    palette: ["#15141f", "#2a2240", "#d863a5"],
  },

  "brand-identity": {
    id: "brand-identity",
    title: "Brand Identity",
    prompt:
      "Luxury branding presentation inside a black gallery environment. Huge printed posters, premium packaging, brand guideline books, typography walls, logo explorations. Camera slowly dollies sideways between installations. Ultra realistic, cinematic lighting, premium color grading, shallow depth of field, smooth camera movement.",
    video: null,
    palette: ["#171522", "#332740", "#f79e83"],
  },

  "content-creation": {
    id: "content-creation",
    title: "Content Creation",
    prompt:
      "Luxury production studio. Professional cinema cameras, moving lights, directors, creative team preparing a commercial shoot. Slow cinematic crane movement, atmospheric haze, beautiful practical lighting. Ultra realistic, cinematic lighting, premium color grading, shallow depth of field, smooth camera movement.",
    video: null,
    palette: ["#151321", "#33203a", "#f38d90"],
  },

   "content-writing": {
    id: "content-writing",
    title: "Content Writing",
    prompt:
      "A modern office space with a team of writers and editors working on various projects. Natural lighting, comfortable seating, and a collaborative atmosphere. Ultra realistic, cinematic lighting, premium color grading, shallow depth of field, smooth camera movement.",
    video: null,
    palette: ["#151321", "#33203a", "#f38d90"],
  },

  "reels-video": {
    id: "reels-video",
    title: "Reels & Video",
    prompt:
      "Vertical LED screens floating in darkness showing dynamic social media content. Fast elegant transitions, motion graphics, creative editing timeline. Camera flies between floating screens. Ultra realistic, cinematic lighting, premium color grading, shallow depth of field, smooth camera movement.",
    video: null,
    palette: ["#131220", "#272052", "#815da7"],
  },

  "photography": {
    id: "photography",
    title: "Photography",
    prompt:
      "Luxury photography studio. Premium product photography, soft lighting, macro camera movement, beautiful reflections, minimal composition. Ultra realistic, cinematic lighting, premium color grading, shallow depth of field, smooth camera movement.",
    video: null,
    palette: ["#161320", "#342236", "#e663a5"],
  },

  "the-people": {
    id: "the-people",
    title: "The People",
    prompt:
      "Creative team working late inside an architectural studio. Large monitors, moodboards, brand sketches, minimal desks, rain outside the windows, warm practical lighting, city bokeh, very calm atmosphere. Ultra realistic, cinematic lighting, premium color grading, shallow depth of field, smooth camera movement.",
    video: null,
    palette: ["#14141f", "#242238", "#c9a0e0"],
  },

  "influencer-marketing": {
    id: "influencer-marketing",
    title: "Influencer Marketing",
    prompt:
      "A premium creator studio with influencers recording brand campaigns. Multiple cameras, stylish content setups, social media screens displaying engagement metrics, creative collaboration between brands and creators. Cinematic camera movement through the studio, modern lighting, realistic atmosphere, ultra detailed, premium commercial style.",
    video: null,
    palette: ["#151522", "#38264b", "#ff8c8c"],
  },

  "campaign-management": {
    id: "campaign-management",
    title: "Campaign Management",
    prompt:
      "A futuristic creative command center showing a large marketing campaign coming to life. Floating screens with campaign strategies, analytics dashboards, creative concepts, and visual planning boards. Slow cinematic camera movement through a dark premium workspace. Ultra realistic, cinematic lighting, premium color grading.",
    video: null,
    palette: ["#121522", "#26355c", "#e8a85c"],
  },

  "ecommerce-marketing": {
    id: "ecommerce-marketing",
    title: "E-commerce Marketing",
    prompt:
      "Luxury digital commerce environment with floating product displays, modern online storefront interfaces, customer journey animations, and elegant shopping experiences. Camera smoothly moves between digital products and glowing interfaces. Ultra realistic, cinematic lighting, premium technology aesthetic.",
    video: null,
    palette: ["#121722", "#24435a", "#64d8c8"],
  },

  "seo": {
    id: "seo",
    title: "Search Engine Optimization",
    prompt:
      "A futuristic digital landscape representing search optimization. Glowing data networks, rising graphs, connected nodes, search interfaces, and organic growth patterns floating in a dark technological environment. Smooth camera movement, cinematic lighting, ultra realistic, premium digital atmosphere.",
    video: null,
    palette: ["#111827", "#243b53", "#52d6ff"],
  },

  "web-design-development": {
    id: "web-design-development",
    title: "Web Design & Development",
    prompt:
      "A futuristic design studio showing beautiful website interfaces floating in space. Large transparent screens displaying responsive layouts, code elements, UX wireframes, and interactive prototypes. Camera slowly moves through the digital environment. Ultra realistic, cinematic lighting, premium technology aesthetic.",
    video: null,
    palette: ["#12131f", "#30345c", "#8f9cff"],
  },

  "graphic-design": {
    id: "graphic-design",
    title: "Graphic Design",
    prompt:
      "A creative design studio filled with floating posters, digital illustrations, typography elements, color palettes, and artistic compositions. Camera moves through a gallery of visual concepts. Modern creative atmosphere, cinematic lighting, ultra realistic details, premium branding aesthetic.",
    video: null,
    palette: ["#17131f", "#43294d", "#ffb86b"],
  },

  "paid-advertising": {
    id: "paid-advertising",
    title: "Paid Advertising",
    prompt:
      "A futuristic advertising analytics room with large glowing dashboards, campaign performance charts, audience data visualization, and digital advertising screens. Smooth camera movement through a high-tech marketing environment. Ultra realistic, cinematic lighting, premium digital atmosphere.",
    video: null,
    palette: ["#101521", "#263b62", "#4de1ff"],
  },

  "social-media-management": {
    id: "social-media-management",
    title: "Social Media Management",
    prompt:
      "A modern social media command center with multiple screens displaying engaging content, community interactions, trending posts, and creative calendars. A professional team managing digital platforms in a premium studio environment. Cinematic camera movement, realistic lighting, ultra detailed.",
    video: null,
    palette: ["#141421", "#39285b", "#d77cff"],
  },

  "marketing-strategy": {
    id: "marketing-strategy",
    title: "Marketing Strategy",
    prompt:
      "A premium strategy room with large interactive maps, market research visuals, customer journey diagrams, and strategic planning boards. Executives and creatives analyzing insights in a sophisticated environment. Slow cinematic camera movement, warm lighting, ultra realistic, premium consulting atmosphere.",
    video: null,
    palette: ["#15141f", "#354052", "#f5c26b"],
  },
};