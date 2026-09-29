import { useEffect, useState } from 'react';

interface ViewerDownloads {
  save: (request: { filename: string; data: Blob }) => Promise<{ status: 'saved' | 'delivered' }>;
}

declare global {
  interface Window {
    /** Present only when the page is opened inside the claude.ai artifact viewer. */
    claude?: { use?: (name: string) => Promise<unknown> };
  }
}

/**
 * Inside the claude.ai artifact viewer, plain download links are inert and files have to be
 * handed to the viewer instead. Everywhere else this returns `null` and links behave normally.
 */
export function useViewerDownloads(): ViewerDownloads | null {
  const [downloads, setDownloads] = useState<ViewerDownloads | null>(null);

  useEffect(() => {
    const viewer = window.claude;
    if (typeof viewer?.use !== 'function') return;

    let active = true;
    viewer
      .use('downloads')
      .then((namespace) => {
        if (active && namespace) setDownloads(namespace as ViewerDownloads);
      })
      .catch(() => undefined);

    return () => {
      active = false;
    };
  }, []);

  return downloads;
}
