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
  | "reels-video"
  | "photography"
  | "the-people";

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
};
