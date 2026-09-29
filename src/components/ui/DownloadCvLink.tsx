import { useState, type MouseEvent } from 'react';
import { resume } from '../../data/site';
import { useViewerDownloads } from '../../hooks/useViewerDownloads';
import { MagneticLink } from './MagneticLink';

interface DownloadCvLinkProps {
  variant?: 'primary' | 'secondary' | 'inverse' | 'outline-inverse';
  size?: 'md' | 'lg';
  className?: string;
}

async function fileFromHref(href: string): Promise<Blob> {
  if (href.startsWith('data:')) {
    const [header, base64] = href.split(',');
    const type = header.slice(5).split(';')[0];
    const bytes = Uint8Array.from(atob(base64), (char) => char.charCodeAt(0));
    return new Blob([bytes], { type });
  }
  const response = await fetch(href);
  if (!response.ok) throw new Error(`Could not load ${href}`);
  return response.blob();
}

/** A link that downloads the CV PDF. */
export function DownloadCvLink({ variant = 'secondary', size = 'md', className }: DownloadCvLinkProps) {
  const viewerDownloads = useViewerDownloads();
  const [message, setMessage] = useState('');

  const handleClick = async (event: MouseEvent<HTMLAnchorElement>) => {
    if (!viewerDownloads) return; // A normal browser handles the download attribute itself.
    event.preventDefault();
    setMessage('');
    try {
      await viewerDownloads.save({ filename: resume.fileName, data: await fileFromHref(resume.href) });
    } catch (error) {
      if ((error as { code?: string })?.code === 'declined') return;
      setMessage('The CV could not be downloaded here. Please try again from the published site.');
    }
  };

  return (
    <>
      <MagneticLink
        href={resume.href}
        download={resume.fileName}
        type="application/pdf"
        variant={variant}
        size={size}
        icon="download"
        className={className}
        onClick={handleClick}
      >
        {resume.label}
        <span className="btn__meta">
          <span className="visually-hidden">, </span>
          {resume.format}
        </span>
      </MagneticLink>
      <span className="visually-hidden" role="status">
        {message}
      </span>
    </>
  );
}
