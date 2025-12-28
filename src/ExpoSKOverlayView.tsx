import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoSKOverlayViewProps } from './ExpoSKOverlay.types';

const NativeView: React.ComponentType<ExpoSKOverlayViewProps> =
  requireNativeView('ExpoSKOverlay');

export default function ExpoSKOverlayView(props: ExpoSKOverlayViewProps) {
  return <NativeView {...props} />;
}
