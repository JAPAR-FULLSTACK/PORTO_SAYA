import { useState, useEffect } from 'react';

const STORAGE_KEY = 'raffa_profile_photo_v24';

// Default elegant developer portrait SVG data URI so there is always a clean, non-slop human portrait
export const DEFAULT_AVATAR = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" width="400" height="500">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#18181b"/>
      <stop offset="100%" stop-color="#09090b"/>
    </linearGradient>
    <linearGradient id="face" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#27272a"/>
      <stop offset="100%" stop-color="#18181b"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#d9ff3d"/>
      <stop offset="100%" stop-color="#a3e635"/>
    </linearGradient>
  </defs>
  
  <!-- Backdrop -->
  <rect width="400" height="500" fill="url(#bg)"/>
  
  <!-- Subtle architectural grid lines -->
  <line x1="0" y1="120" x2="400" y2="120" stroke="#27272a" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="0" y1="360" x2="400" y2="360" stroke="#27272a" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="80" y1="0" x2="80" y2="500" stroke="#27272a" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="320" y1="0" x2="320" y2="500" stroke="#27272a" stroke-width="1" stroke-dasharray="4 4"/>

  <!-- Stylized Editorial Silhouette -->
  <!-- Shoulders / Torso -->
  <path d="M 80 500 C 90 410, 140 370, 200 370 C 260 370, 310 410, 320 500 Z" fill="#202024" stroke="#2e2e34" stroke-width="2"/>
  
  <!-- Collar details -->
  <path d="M 160 375 L 200 420 L 240 375" fill="none" stroke="#2e2e34" stroke-width="2"/>
  
  <!-- Head & Hair silhouette -->
  <ellipse cx="200" cy="240" rx="65" ry="85" fill="url(#face)" stroke="#3f3f46" stroke-width="2"/>
  
  <!-- Hair line -->
  <path d="M 135 220 C 135 150, 160 140, 200 140 C 240 140, 265 150, 265 220 C 255 180, 230 165, 200 165 C 160 165, 145 185, 135 220 Z" fill="#121214"/>
  
  <!-- Glasses / Minimalist Frame -->
  <rect x="155" y="225" width="36" height="24" rx="4" fill="none" stroke="#d9ff3d" stroke-width="2"/>
  <rect x="209" y="225" width="36" height="24" rx="4" fill="none" stroke="#d9ff3d" stroke-width="2"/>
  <line x1="191" y1="237" x2="209" y2="237" stroke="#d9ff3d" stroke-width="2"/>
  
  <!-- Label / Badge -->
  <rect x="130" y="450" width="140" height="28" rx="6" fill="#121214" stroke="#27272a"/>
  <text x="200" y="468" font-family="monospace" font-size="11" fill="#a1a1aa" text-anchor="middle" letter-spacing="1">RAFFA // RPL</text>
</svg>
`)}`;

export function useProfilePhoto() {
  const [photo, setPhoto] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_AVATAR;
    }
    return DEFAULT_AVATAR;
  });

  const savePhoto = (dataUrl: string) => {
    try {
      localStorage.setItem(STORAGE_KEY, dataUrl);
      setPhoto(dataUrl);
      // Dispatch storage event so other components sync immediately
      window.dispatchEvent(new Event('raffa_photo_updated'));
    } catch (e) {
      console.error('Failed to save photo to localStorage:', e);
    }
  };

  const resetPhoto = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setPhoto(DEFAULT_AVATAR);
      window.dispatchEvent(new Event('raffa_photo_updated'));
    } catch (e) {
      console.error('Failed to reset photo:', e);
    }
  };

  useEffect(() => {
    const handleUpdate = () => {
      const stored = localStorage.getItem(STORAGE_KEY) || DEFAULT_AVATAR;
      setPhoto(stored);
    };
    window.addEventListener('raffa_photo_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('raffa_photo_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  return { photo, savePhoto, resetPhoto, isCustom: photo !== DEFAULT_AVATAR };
}
