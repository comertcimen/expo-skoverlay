import { NativeModule, requireNativeModule } from "expo";

export type Position = "bottomRaised" | "bottom";

declare class ExpoSKOverlayModule extends NativeModule {
  showOverlay(appIdentifier: string, position?: Position): Promise<void>;
}

const ExpoSKOverlay = requireNativeModule<ExpoSKOverlayModule>("ExpoSKOverlay");

/**
 * Shows the SKOverlay App Clip banner.
 * @param appIdentifier The iTunes Item Identifier (App Store ID)
 * @param position The position of the overlay (default: Bottom)
 */
export async function showSKOverlay(
  appIdentifier: string,
  position: Position = "bottom"
): Promise<void> {
  return ExpoSKOverlay.showOverlay(appIdentifier, position);
}
