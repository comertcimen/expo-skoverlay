import { registerWebModule, NativeModule } from 'expo';

import { ExpoSKOverlayModuleEvents } from './ExpoSKOverlay.types';

class ExpoSKOverlayModule extends NativeModule<ExpoSKOverlayModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoSKOverlayModule, 'ExpoSKOverlayModule');
