import { type CommonViewModifierProps } from '../types';
export interface RectangleProps extends CommonViewModifierProps {
}
export declare function Rectangle(props: RectangleProps): import("react").JSX.Element;
export interface RoundedRectangleProps extends CommonViewModifierProps {
    cornerRadius?: number;
}
export declare function RoundedRectangle(props: RoundedRectangleProps): import("react").JSX.Element;
export interface EllipseProps extends CommonViewModifierProps {
}
export declare function Ellipse(props: EllipseProps): import("react").JSX.Element;
export interface UnevenRoundedRectangleProps extends CommonViewModifierProps {
    topLeadingRadius?: number;
    topTrailingRadius?: number;
    bottomLeadingRadius?: number;
    bottomTrailingRadius?: number;
}
export declare function UnevenRoundedRectangle(props: UnevenRoundedRectangleProps): import("react").JSX.Element;
export interface CapsuleProps extends CommonViewModifierProps {
    cornerStyle?: 'continuous' | 'circular';
}
export declare function Capsule(props: CapsuleProps): import("react").JSX.Element;
export interface CircleProps extends CommonViewModifierProps {
}
export declare function Circle(props: CircleProps): import("react").JSX.Element;
export type CornerStyleConfig = {
    type: 'concentric';
    minimumRadius?: number;
} | {
    type: 'fixed';
    radius: number;
};
export interface ConcentricRectangleCornerParams {
    topLeadingCorner: CornerStyleConfig;
    topTrailingCorner: CornerStyleConfig;
    bottomLeadingCorner: CornerStyleConfig;
    bottomTrailingCorner: CornerStyleConfig;
}
export interface ConcentricRectangleProps extends CommonViewModifierProps {
    corners?: ConcentricRectangleCornerParams;
}
export declare const EdgeCornerStyle: {
    concentric: (minimumRadius?: number) => CornerStyleConfig;
    fixed: (radius: number) => CornerStyleConfig;
};
export declare function ConcentricRectangle(props: ConcentricRectangleProps): import("react").JSX.Element;
//# sourceMappingURL=index.d.ts.map