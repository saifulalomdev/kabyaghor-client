import { useCallback } from 'react';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';

export interface StatusBarConfig {
  color: string;
  style: 'DARK' | 'LIGHT' | 'DEFAULT';
}

export function useStatusBar() {
  const isNative = Capacitor.isNativePlatform();

  const updateStatusBar = useCallback(async (config: StatusBarConfig) => {
    if (!isNative) return;

    try {
      // Set the background hex color
      await StatusBar.setBackgroundColor({ color: config.color });

      // Map string values to Capacitor Style enums
      const statusStyle = 
        config.style === 'DARK' ? Style.Dark : 
        config.style === 'LIGHT' ? Style.Light : Style.Default;

      await StatusBar.setStyle({ style: statusStyle });
    } catch (error) {
      console.error('Failed to update status bar:', error);
    }
  }, [isNative]);

  return { updateStatusBar, isNative };
}
