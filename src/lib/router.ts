import { useState, useEffect, useCallback } from 'react';
import { PageId } from '../types';

export interface RouteState {
  currentPage: PageId;
  currentView: 'website' | 'dashboard';
  isElementorMode: boolean;
}

export function parseCurrentLocation(): RouteState {
  if (typeof window === 'undefined') {
    return { currentPage: 'home', currentView: 'website', isElementorMode: false };
  }

  const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
  const hash = window.location.hash.toLowerCase().replace(/^#\/?/, '');
  const target = hash || path.replace(/^\//, '');

  if (target === 'wp-admin' || target === 'admin' || target === 'dashboard') {
    return { currentPage: 'home', currentView: 'dashboard', isElementorMode: false };
  }

  if (target === 'elementor' || target === 'edit') {
    return { currentPage: 'home', currentView: 'website', isElementorMode: true };
  }

  if (target === 'about') {
    return { currentPage: 'about', currentView: 'website', isElementorMode: false };
  }

  if (target === 'services' || target === 'service') {
    return { currentPage: 'services', currentView: 'website', isElementorMode: false };
  }

  if (target === 'contact') {
    return { currentPage: 'contact', currentView: 'website', isElementorMode: false };
  }

  return { currentPage: 'home', currentView: 'website', isElementorMode: false };
}

export function getRouteUrl(page: PageId, view: 'website' | 'dashboard' = 'website', elementor: boolean = false): string {
  if (view === 'dashboard') return '/wp-admin';
  if (elementor) return '/elementor';
  if (page === 'home') return '/';
  return `/${page}`;
}

export function useRouter() {
  const [route, setRoute] = useState<RouteState>(() => parseCurrentLocation());

  const handleLocationChange = useCallback(() => {
    setRoute(parseCurrentLocation());
  }, []);

  useEffect(() => {
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, [handleLocationChange]);

  const navigate = useCallback((page: PageId | 'wp-admin' | 'elementor', options?: { view?: 'website' | 'dashboard'; elementor?: boolean }) => {
    let nextPath = '/';
    let nextState: RouteState;

    if (page === 'wp-admin') {
      nextPath = '/wp-admin';
      nextState = { currentPage: 'home', currentView: 'dashboard', isElementorMode: false };
    } else if (page === 'elementor') {
      nextPath = '/elementor';
      nextState = { currentPage: 'home', currentView: 'website', isElementorMode: true };
    } else {
      nextPath = page === 'home' ? '/' : `/${page}`;
      nextState = {
        currentPage: page,
        currentView: options?.view ?? 'website',
        isElementorMode: options?.elementor ?? false
      };
    }

    try {
      window.history.pushState(null, '', nextPath);
    } catch {
      // Fallback for sandboxed iframes where pushState may be restricted
      window.location.hash = nextPath === '/' ? 'home' : nextPath.replace(/^\//, '');
    }

    setRoute(nextState);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return {
    ...route,
    navigate,
    setRoute
  };
}
