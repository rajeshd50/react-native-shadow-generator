declare module 'react-native-shadow-generator' {
  interface ShadowOffset {
    width: number;
    height: number;
  }
  interface Shadow {
    shadowColor: string,
    shadowOffset: ShadowOffset,
    shadowOpacity: number,
    shadowRadius: number,
    elevation: number,
  }
  export function generateShadow(elevation: string | number): Shadow;
}