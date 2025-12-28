import { NativeModule, requireNativeModule } from 'expo';

import { ExpoSKOverlayModuleEvents } from './ExpoSKOverlay.types';

declare class ExpoSKOverlayModule extends NativeModule<ExpoSKOverlayModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoSKOverlayModule>('ExpoSKOverlay');
