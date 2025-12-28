import ExpoModulesCore
import StoreKit
import UIKit

public class ExpoSKOverlayModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoSKOverlay")

    AsyncFunction("showOverlay") { (appIdentifier: String, position: String) in
      DispatchQueue.main.async {
        // "view.window" doesn't exist here, so we ask the App for the active scene
        let scenes = UIApplication.shared.connectedScenes
        let windowScene = scenes.first { $0.activationState == .foregroundActive } as? UIWindowScene

        guard let scene = windowScene else { return }

        let overlayPos: SKOverlay.Position = (position == "bottomRaised") ? .bottomRaised : .bottom
        let config = SKOverlay.AppConfiguration(appIdentifier: appIdentifier, position: overlayPos)
        let overlay = SKOverlay(configuration: config)
        
        overlay.present(in: scene)
      }
    }
  }
}