// Copyright 2015-present 650 Industries. All rights reserved.

import SwiftUI
import ExpoModulesCore

internal final class ConcentricRectangleViewProps: ExpoSwiftUI.ViewProps, CommonViewModifierProps {
  @Field var fixedSize: Bool?
  @Field var frame: FrameOptions?
  @Field var padding: PaddingOptions?
  @Field var testID: String?
  @Field var modifiers: ModifierArray?
}

internal struct ConcentricRectangleView: ExpoSwiftUI.View {
  @ObservedObject var props: ConcentricRectangleViewProps

  var body: some View {
    if #available(iOS 26.0, tvOS 26.0, *) {
      ConcentricRectangle().modifier(CommonViewModifiers(props: props))
    } else {
      EmptyView()
    }
  }
}
