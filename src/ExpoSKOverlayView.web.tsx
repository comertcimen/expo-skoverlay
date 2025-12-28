import * as React from 'react';

import { ExpoSKOverlayViewProps } from './ExpoSKOverlay.types';

export default function ExpoSKOverlayView(props: ExpoSKOverlayViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
