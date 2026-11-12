export type ImageItem = {
  file: string
  alt: string
  title: string
  description: string
  label?: string
}

export type Project = {
  id: string
  number: string
  name: string
  category: string
  headline: string
  description: string
  role: string
  contribution: string
  stack: string
  studioHeading: { label: string; title: string; description: string }
  collectionsHeading: { label: string; title: string; description: string }
  collectionModel: string
  workflowHeading: { label: string; title: string; description: string }
  contextHeading: { title: string; description: string }
  archiveHeading: { title: string; description: string }
  engineeringHeading: { label: string; title: string; description: string }
  studio: ImageItem[]
  collections: ImageItem[]
  assets: ImageItem
  context: ImageItem[]
  archive: ImageItem
  decisions: { title: string; description: string }[]
}

// Add another project following this shape to include it on the landing page.
export const projects: Project[] = [
  {
    id: 'madaiprint', number: '01', name: 'madAIprint', category: 'Product engineering',
    headline: 'From artwork to print.',
    description: 'I built a print shop workspace for designing posters, managing a catalog, and preparing orders. It brings artwork search, editing, and print preparation into one workflow.',
    role: 'Software product engineer', contribution: 'Studio editor, product data, and image processing', stack: 'Next.js, TypeScript, Supabase, R2, fal',
    studioHeading: { label: 'Studio creation', title: 'From artwork queue to gallery wall.', description: 'Choose a starting point, compare mockups, and refine individual posters or a full gallery in Studio.' },
    collectionsHeading: { label: 'Collections', title: 'Build a template. Use it across products.', description: 'I built collection templates so shops can reuse print sizes, artwork slots, and mockup layouts across products.' },
    collectionModel: 'A product slot identifies an artwork. A view position determines where it appears in a mockup. I stored print size separately from preview geometry, so resizing a frame on screen preserves the print format.',
    workflowHeading: { label: 'Operator workflow', title: 'Find artwork. Review the result.', description: 'Search by title, tag, or SKU, or browse by category and color. Then refine the composition in Studio and save it to the catalog.' },
    contextHeading: { title: 'Review a design in context.', description: 'Inspect the artwork up close, then use a full mockup to check framing, spacing, and how the composition reads in a room.' },
    archiveHeading: { title: 'Manage designs after saving.', description: 'The archive brings drafts and listings together so operators can find and reopen saved designs.' },
    engineeringHeading: { label: 'Engineering decisions', title: 'Keep the design intact from editor to order.', description: 'I built the editor, the save workflow, and the image integrations. Three decisions show how those pieces work together.' },
    studio: [
      { file: 'studio-home.jpg', alt: 'Studio home with a shop selector, workflow tabs, and travel poster previews', title: 'Studio home', description: 'Choose a shop and start from the artwork queue or a poster workflow.' },
      { file: 'studio-single-browser.jpg', alt: 'Single-poster workflow showing artwork across different mockup templates', title: 'Single poster', description: 'Compare frame styles and room settings for the same artwork.' },
      { file: 'studio-travel-set.jpg', alt: 'Studio canvas with three framed travel posters, an asset library, and caption controls', title: 'Travel triptych', description: 'Compose three prints and edit each title and subtitle in context.' },
      { file: 'studio-travel-closeup.jpg', alt: 'Close-up of a travel triptych with mixed text styles and a generated synopsis', title: 'Typography and copy', description: 'Inspect a closer view and review the selected poster’s generated synopsis.' },
      { file: 'studio-forest-wall.jpg', alt: 'Studio canvas showing a woodland gallery and similar artwork suggestions', title: 'Woodland gallery', description: 'Arrange a larger gallery and find related artwork without leaving the canvas.' },
      { file: 'studio.jpg', alt: 'Studio canvas showing six framed watercolor animals, an artwork library, and poster settings', title: 'Watercolor wildlife', description: 'Refine a coordinated six-print set with individual layout controls.' },
    ],
    collections: [
      { file: 'collection-library.jpg', alt: 'Collections library with shop tabs, template thumbnails, and view counts', label: '01 / Browse', title: 'Find a starting point.', description: 'Browse templates by shop and compare their previews.' },
      { file: 'collection.jpg', alt: 'Collection draft with a poster layer, three artwork slots, and two views', label: '02 / Define', title: 'Set the artwork slots.', description: 'Define the artwork count and place layers in each view.' },
      { file: 'collection-views.jpg', alt: 'Collection editor showing a saved template with its preview and view controls', label: '03 / Present', title: 'Build alternate mockups.', description: 'Rearrange the same artwork across alternate views.' },
    ],
    assets: { file: 'assets.jpg', alt: 'Artwork gallery with search, category filters, a color palette, and poster thumbnails', title: 'Assets', description: 'Search and filter the source library.' },
    context: [
      { file: 'studio-nursery.jpg', alt: 'Six watercolor animal prints above a crib in the Studio canvas', title: 'Wildlife · Nursery gallery', description: 'Check the scale and spacing of a six-print set.' },
      { file: 'context-car.jpg', alt: 'Vintage red car illustration open in the artwork inspector', title: 'Automotive · Artwork inspection', description: 'Review the illustration and its asset details before placing it.' },
      { file: 'studio-single.jpg', alt: 'Full product preview of one framed Japanese-style autumn landscape', title: 'Landscape · Single framed print', description: 'Inspect the print, mat, and frame as one composition.' },
      { file: 'studio-triptych.jpg', alt: 'Full product preview of three framed botanical poppy prints', title: 'Botanical · Triptych', description: 'Check how the colors and spacing work across three frames.' },
    ],
    archive: { file: 'archive.jpg', alt: 'Product archive showing poster mockups, draft and listing states, and filters', title: 'Archive', description: 'Preview, search, and filter saved products.' },
    decisions: [
      { title: 'Preserve the design', description: 'Persist artwork selections and crops with the product so the composition survives reopening and order preparation.' },
      { title: 'Keep AI output reviewable', description: 'Keep generated artwork in preview until the operator chooses what to save and place.' },
      { title: 'Track readiness by file version', description: 'Tie print readiness to the upscaled file version. Replacing the file clears that status across orders.' },
    ],
  },
]