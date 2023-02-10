import React from 'react';
import { RootStoreProvider } from './model';

export function rootContainer(container: React.ReactChild) {
  return <RootStoreProvider>{container}</RootStoreProvider>;
}
